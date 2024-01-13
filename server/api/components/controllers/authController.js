import axios from 'axios';
import url from 'url';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

//Get Authentication Token from discord.
const redirectToken = (async (req, res) => {
    const { code } = req.query;
    if (code) {
        try {
            const formData = new url.URLSearchParams({
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                grant_type: 'authorization_code',
                code,
                redirect_uri: "http://localhost:3000/api/auth/redirect",
            });
            const response = await axios.post("https://discord.com/api/oauth2/token",
            formData.toString(), 
            {
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded",
                    'Accept': 'application/json' 
                }
            });
            res.cookie('__disctkn', `${response.data.access_token}`, {maxAge: 360000}, {signed: true}, {httpOnly: true});

        } catch (err) {
            console.log(err.response || err.message)
        }
    } else {
        console.log("rip no code")
    }
    res.redirect('http://localhost:8080');
});

//Get Refresh Token Exchange 
const refreshToken = (async (req, res) => {

    if(accessToken.refresh_token) {
        try {
            const response = await axios.post("https://discord.com/api/oauth2/token", {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                grant_type: 'refresh_token',
                refresh_token: accessToken.refresh_token
            }, { 
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            })
            accessToken = response.data;

            //send the new token to cookie and let frontend know.
            res.send(response.data);

        } catch  (err) {
            res.status(400).send({message: 'Oops Something went wrong. Please try again later..'})
        }
    } else {
        res.status(400).send({message: 'Oops Something went wrong. Please try again later..'})
    }
});

//Revoke token if user logs out
const revokeToken = (async (req, res) => {
    
    let decryptedData;

    //try to see if decryption works if not it could be server refresh or malicious intent.
    try {
        const decipherText = crypto.createDecipheriv(algo, secKey, invec);

        decryptedData = decipherText.update(req.body.AuthToken, "hex", "utf-8");
        
        decryptedData += decipherText.final("utf8");

    } catch (err) {
        res.Status(400).send('Not same token as it was encrypted. Sorry Jackass we are not that dumb');
        return;
    }

    const accessToken = {
        token_type: 'Bearer',
        access_token: decryptedData
    }

    if(accessToken.access_token) {
        try {
            const response = await axios.post("https://discord.com/api/oauth2/token/revoke", {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                token: accessToken.access_token
            }, { 
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            })

            res.status(200).send({message: 'Token revocation was successful'})
        } catch (err) {
            console.log(err);
            res.status(400).send({message: err.response.data.error});
        }
    } else {
        res.status(400).send({message: 'Oops Something went wrong. Please try again later..'})
    }
})

export default { redirectToken, refreshToken, revokeToken }