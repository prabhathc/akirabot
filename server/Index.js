import express from 'express'
import discord from 'discord.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import apiRouter from './api/routes/index.js'

dotenv.config();

const { Client, Events, GatewayIntentBits } = discord;
const token = process.env.DISCORD_BOT_TOKEN;

const PORT = process.env.PORT || 3000; 

const app = express();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);

app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(express.json());

app.get("/" , async(req, res) => {
    res.send("HELLO WORLD")
})

app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`App Listening at PORT ${PORT}`))