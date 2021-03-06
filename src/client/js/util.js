async function fetchPost(url, body) {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: body
    });
}

export {
    fetchPost
}