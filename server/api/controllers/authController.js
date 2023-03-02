import axios from 'axios';
import url from 'url';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

//testing without the need of front-end
let accessToken = {}

// Cryptography for Tokens
const algo = `${process.env.ENCRYPTING_ALGO}`;
const invec = Buffer.from([10, 20, 19, 18, 23, 234, 300, 80, 40, 99, 26, 417, 365, 10, 17, 1]);
const secKey = Buffer.from([1, 4, 4, 5, 6, 7, 5, 3, 5, 67, 7, 4, 3, 5, 76, 234, 24, 235, 24, 4, 15, 30, 28, 40, 356, 40, 10, 20, 19, 44, 43, 12])

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
                    "Contet-Type":"application/x-www-form-urlencoded",
                    'Accept': 'application/json' 
                }
            });

            accessToken = response.data;

            let encryptedData = cipherText.update(accessToken.access_token, "utf-8", "hex");

            encryptedData += cipherText.final("hex");

            res.cookie('Token', `${encryptedData}`, {maxAge: 360000}, {signed: true});
            res.cookie('Refresh_Limit', true, {maxAge: 200000}, {signed: true});
            res.sendStatus(200);

        } catch (err) {

            console.log(err);
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(400)
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
            res.send(response.data);
        } catch  (err) {
            console.log(err)
            res.sendStatus(400)
        }
    } else {
        res.sendStatus(400)
    }
});


// Get User Information
const getUser = (async (req, res) => {

    let decryptedData;

    //try to see if decryption works if not it could be server refresh or malicious intent.
    try {
        const decipherText = crypto.createDecipheriv(algo, secKey, invec);

        decryptedData = decipherText.update(req.body.AuthToken, "hex", "utf-8");
        
        decryptedData += decipherText.final("utf8");

    } catch (err) {
        res.sendStatus(400);
        return;
    }

    const accessToken = {
        token_type: 'Bearer',
        access_token: decryptedData
    }

    if(accessToken) {
        try {
            const response = await axios.get("https:discord.com/api/v8/users/@me", {
                headers: {
                    "Authorization": `${accessToken.token_type} ${accessToken.access_token}`
                }
            })
            res.send(response.data)
        } catch (err) {
            console.log(err.message)
            res.sendStatus(400)
        }
    } else {
        res.sendStatus(400)
    }
})

//Get Guild/Server Info
const userGuild = (async (req, res) => {

    let decryptedData;

    //try to see if decryption works if not it could be server refresh or malicious intent.
    try {
        const decipherText = crypto.createDecipheriv(algo, secKey, invec);

        decryptedData = decipherText.update(req.body.AuthToken, "hex", "utf-8");
        
        decryptedData += decipherText.final("utf8");

    } catch (err) {
        res.sendStatus(400);
        return;
    }

    const accessToken = {
        token_type: 'Bearer',
        access_token: decryptedData
    }

    if(accessToken) {
        try {
            const response = await axios.get("https://discord.com/api/v8/users/@me/guilds" , {
                headers: {
                    "Authorization": `${accessToken.token_type} ${accessToken.access_token}` 
                }
            })
            res.send(response.data)
        } catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
})



export default { redirectToken, refreshToken, userGuild, getUser }