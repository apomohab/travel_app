const fetch = require('node-fetch');

async function getDestinationCords(dest) {
    const url = `http://api.geonames.org/searchJSON?q=${dest}&maxRows=1&username=${process.env.GeonamesApiKey}`;

    const json = await fetch(url).then(res => res.json());

    return {
        lng: json.geonames[0].lng,
        lat: json.geonames[0].lat,
        name: json.geonames[0].countryName
    };
};

module.exports = {
    getDestinationCords
};