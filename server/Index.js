import express from 'express'
import discord from 'discord.js'
import axios from 'axios'
import url from 'url'
import dotenv from 'dotenv'

dotenv.config();

const { Client, Events, GatewayIntentBits } = discord;
const token = process.env.DISCORD_BOT_TOKEN;

const PORT = process.env.PORT || 3000; 
const app = express();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
let accessToken = {};

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);

//Get Authentication Token from discord.
app.get("/api/auth/redirect", async (req, res) => {
    const { code } = req.query;
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
            res.sendStatus(200);
        } catch (err){
            console.log(err)
            res.sendStatus(400)
        }
    }
});

// Get User Information
app.get("/api/auth/user", async (req, res) => {
    if(accessToken) {
        try {
            const response = await axios.get("https:discord.com/api/v8/users/@me", {
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

app.listen(PORT, () => console.log(`App Listening at PORT ${PORT}`))