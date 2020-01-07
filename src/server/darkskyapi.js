const fetch = require('node-fetch');

async function getForecast(latitude, longitude, time) {
    const apiKey = process.env.DarkSkyApiKey;

    let url = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`;

    if (time != undefined) {
        url += `,${time}`;
    }

    return await fetch(url).then(res => res.json());
}

module.exports = {
    getForecast
}