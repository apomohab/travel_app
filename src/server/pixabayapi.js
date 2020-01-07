const fetch = require('node-fetch');

async function getDestinationImage(dest) {
    const encodedDest = encodeURIComponent(dest);
    const apiKey = process.env.PixabayApiKey;

    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodedDest}&image_type=photo&pretty=true`;

    const result = await fetch(url).then(res => res.json());

    // we return the first match only, which is the most relevant.
    return result.hits[0].largeImageURL;
}

module.exports = {
    getDestinationImage
}