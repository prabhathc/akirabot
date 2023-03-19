import axios from 'axios';
import url from 'url';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

// Cryptography for Tokens
const algo = `${process.env.ENCRYPTING_ALGO}`;
const invec = Buffer.from([10, 20, 19, 18, 23, 234, 300, 80, 40, 99, 26, 417, 365, 10, 17, 1]);
const secKey = Buffer.from([1, 4, 4, 5, 6, 7, 5, 3, 5, 67, 7, 4, 3, 5, 76, 234, 24, 235, 24, 4, 15, 30, 28, 40, 356, 40, 10, 20, 19, 44, 43, 12]);

//Get Authentication Token from discord.
const redirectToken = (async (req, res) => {
    
    const { code } = req.query;

    const cipherText = crypto.createCipheriv(algo, secKey, invec);

    if(code) {
        try {
            const formData = new url.URLSearchParams({
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                grant_type: 'authorization_code',
                code,
                redirect_uri: "http://localhost:3000/api/auth/redirect",
            });

            const response = await axios.post("https://discord.com/api/v8/oauth2/token",
            formData.toString(), 
            {
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded",
                    'Accept': 'application/json' 
                }
            });

            let encryptedData = cipherText.update(response.data.access_token, "utf-8", "hex");

            encryptedData += cipherText.final("hex");

            res.cookie('__disctkn', `${encryptedData}`, {maxAge: 360000}, {signed: true});

            //when success redirect to homepage and it will sync with token | frontend handles the rest
            res.redirect('http://localhost:8080');

        } catch (err) {
            console.log(err)

            //if something wrong happens it automatically redirects to homepage
            res.redirect('http://localhost:8080');
        }
    } else {
        console.log(err)

        //if they decline the authorization go back to the homepage
        res.redirect('http://localhost:8080');
    }
});

//Get Refresh Token Exchange 
const refreshToken = (async (req, res) => {

    if(accessToken.refresh_token) {
        try {
            const response = await axios.post("https://discord.com/api/v8/oauth2/token", {
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
            const response = await axios.post("https://discord.com/api/v8/oauth2/token/revoke", {
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