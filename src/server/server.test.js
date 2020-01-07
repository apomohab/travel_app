import { fetchPost } from './util';

test('Content-type is json', () => {
    const body = JSON.stringify({dest:'morocco'});

    fetchPost('http://127.0.0.1/image', body).then(resp => {
        expect(resp.type.includes('json')).toBeTruthy();
    })
})