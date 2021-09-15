/* const express = require('express');
const dotenv = require('dotenv').config()
const fetch = require('node-fetch');
const btoa = require('btoa');
const { catchAsync } = require('../utils');
const { URLSearchParams } = require('url'); // can also use form-data
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const router = express.Router();
const scopes = ['identify', 'guilds'];

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect =       
encodeURIComponent('http://localhost:50451/api/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect}&response_type=code&scope=identify%20guilds`);
});

router.get('/callback', catchAsync(async (req, res) => {
  if (!req.query.code) throw new Error('NoCodeProvided');
  const code = req.query.code;
  const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
    {
  method: 'POST',
  headers: {
    Authorization: `Basic ${creds}`,
  },
});
  const json = await response.json();
  res.redirect(`/success/?token=${json.access_token}`);
}));

module.exports = router; */

///outro tutorial
const express = require('express');

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = encodeURIComponent('http://localhost:19006/auth/redirect');//('http://localhost:19006/api/discord/callback');//50451

router.get('/login', (req, res) => {
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
});

module.exports = router;  
