import axios from 'axios';
import url from 'url';

//testing without the need of front-end
let accessToken = {}

//Get Authentication Token from discord.
const redirectToken = (async (req, res) => {
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
            res.redirect('/api/user')
        } catch (err){
            console.log(err)
            res.sendStatus(400)
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
            res.send(response.data)
        } catch  (err){
            console.log(err)
            res.sendStatus(400)
        }
    } else {
        res.sendStatus(400)
    }
});


// Get User Information
const getUser = (async (req, res) => {
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
    } else {
        res.sendStatus(400)
    }
})

//Get Guild/Server Info
const userGuild = (async (req, res) => {
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