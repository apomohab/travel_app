const geonames = require('./geonamesapi');
const darksky = require('./darkskyapi');
const pixabay = require('./pixabayapi');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

app.listen(4000, () => {
    console.log('Example app listening on port 4000!')
});

app.post('/geosearch', async (req, res) => {
    const dest = req.body.dest;

    const result = await geonames.getDestinationCords(dest);

    res.send(result);
});

app.post('/forecast', async (req, res) => {
    const lat = req.body.lat;
    const lng = req.body.lng;
    const time = req.body.time;

    let result;

    if (time == undefined) {
        result = await darksky.getForecast(lat, lng);
    }
    else {
        result = await darksky.getForecast(lat, lng, time);
    }

    res.send(result);
});

app.post('/image', async (req, res) => {
    const dest = req.body.dest;

    const result = await pixabay.getDestinationImage(dest);

    res.send(result);
});