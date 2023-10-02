import axios from 'axios';
import crypto from 'crypto';
import dotenv from 'dotenv';
// import helper function for structuring the data from discord for frontend

dotenv.config();

// Cryptography for Tokens
const algo = `${process.env.ENCRYPTING_ALGO}`;
const invec = Buffer.from([10, 20, 19, 18, 23, 234, 300, 80, 40, 99, 26, 417, 365, 10, 17, 1]);
const secKey = Buffer.from([1, 4, 4, 5, 6, 7, 5, 3, 5, 67, 7, 4, 3, 5, 76, 234, 24, 235, 24, 4, 15, 30, 28, 40, 356, 40, 10, 20, 19, 44, 43, 12]);

// Get User Information
const getUser = (async (req, res) => {

    let decryptedData;

    //try to see if decryption works if not it could be server refresh or malicious intent.
    try {
        const decipherText = crypto.createDecipheriv(algo, secKey, invec);

        decryptedData = decipherText.update(req.headers['x-authtoken'], "hex", "utf-8");
        
        decryptedData += decipherText.final("utf8");

    } catch (err) {
        res.status(400).send('Not same token as it was encrypted. Sorry Jackass we are not that dumb');
        return;
    }

    const accessToken = {
        token_type: 'Bearer',
        access_token: decryptedData
    }

    if(accessToken.access_token) {
        try {
            const response = await axios.get("https:discord.com/api/v8/users/@me", {
                headers: {
                    "Authorization": `${accessToken.token_type} ${accessToken.access_token}`
                }
            })
            res.send(response.data)

        } catch (err) {
            res.status(401).send({message: err.message})
        }
    } else {
        res.status(400).send({message: 'Oops Something went wrong. Please try again later..'})
    }
})

//Get Guild/Server Info
const userGuild = (async (req, res) => {

    let decryptedData;

    //try to see if decryption works if not it could be server refresh or malicious intent.
    try {
        const decipherText = crypto.createDecipheriv(algo, secKey, invec);

        decryptedData = decipherText.update(req.headers['x-authtoken'], "hex", "utf-8");
        
        decryptedData += decipherText.final("utf8");

    } catch (err) {
        res.sendStatus(400);
        return;
    }

    const accessToken = {
        token_type: 'Bearer',
        access_token: decryptedData
    }

    if(accessToken.access_token) {
        try {
            const response = await axios.get("https://discord.com/api/v8/users/@me/guilds" , {
                headers: {
                    "Authorization": `${accessToken.token_type} ${accessToken.access_token}` 
                }
            });
            res.send(response.data)
        } catch (err) {
            res.status(401).send({message: err.message})
        }
    } else {
        res.status(400).send({message: 'Oops Something went wrong. Please try again later..'})
    }
})

export default { userGuild, getUser }