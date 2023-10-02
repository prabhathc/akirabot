import crypto from 'crypto';
import axios from 'axios';
import url from 'url';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Cryptography for Tokens
const algo = `${process.env.ENCRYPTING_ALGO}`;
const invec = Buffer.from([10, 20, 19, 18, 23, 234, 300, 80, 40, 99, 26, 417, 365, 10, 17, 1]);
const secKey = Buffer.from([1, 4, 4, 5, 6, 7, 5, 3, 5, 67, 7, 4, 3, 5, 76, 234, 24, 235, 24, 4, 15, 30, 28, 40, 356, 40, 10, 20, 19, 44, 43, 12]);

export default async function handler(req, res) {


    const { code } = req.query;

    const cipherText = crypto.createCipheriv(algo, secKey, invec);

    if (code) {
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
                        "Content-Type": "application/x-www-form-urlencoded",
                        'Accept': 'application/json'
                    }
                });

            let encryptedData = cipherText.update(response.data.access_token, "utf-8", "hex");

            encryptedData += cipherText.final("hex");

            res.cookie('__disctkn', `${encryptedData}`, { maxAge: 360000 }, { signed: true });

            //when success redirect to homepage and it will sync with token | frontend handles the rest
            res.redirect('http://localhost:8080');

        } catch (err) {
            console.log(err)

            //if something wrong happens it automatically redirects to homepage
            res.redirect('http://localhost:8080');
        }
    } else {
        console.log("No worky")

        //if they decline the authorization go back to the homepage
        res.redirect('http://localhost:8080');
    }
}
