async function getDestCords(dest) {
    const url = 'http://127.0.0.1:3000/geosearch';

    return await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ "dest": dest })
    }).then(res => res.json());
}

async function getDestImage(dest) {
    const url = 'http://127.0.0.1:3000/image';

    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ "dest": dest })
    }).then(res => res.text());

    return result;
}

async function getDestForecast(lat, lng, time) {
    const url = 'http://127.0.0.1:3000/forecast';

    let body = { "lat": lat, "lng": lng };

    if (time != undefined) {
        body.time = time;
    };

    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json());

    return result;
}

export {
    getDestCords,
    getDestImage,
    getDestForecast
}