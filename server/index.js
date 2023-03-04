import express from 'express'
import discord from 'discord.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import apiRouter from './api/routes/index.js'
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import AWS from 'aws-sdk'

dotenv.config();

const { Client, Events, GatewayIntentBits } = discord;
const token = process.env.DISCORD_BOT_TOKEN;

const PORT = process.env.PORT || 3000; 

const app = express();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const awsConfig = new AWS.Config({
    region: 'us-east-1'
});

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);

app.use(express.urlencoded({extended:false}));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin: 'localhost:3000',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.disable('x-powered-by');

app.get("/*" , async(req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`App Listening at PORT ${PORT}`));