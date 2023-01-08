import express from 'express'
import discord from 'discord.js'
import dotenv from 'dotenv'


dotenv.config();

const { Client, Events, GatewayIntentBits } = discord;
const { token } = process.env.DISCORD_BOT_TOKEN;

const PORT = 3000; 
const app = express();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);

app.get("/", (request, response) => {
    return response.sendFile('index.html', {root: '.././client'});
});

app.listen(PORT, () => console.log(`App Listening at PORT ${PORT}`))