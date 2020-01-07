import { fetchPost } from './js/util';

test('Check ', async () => {
    const body = JSON.stringify({dest: 'morocco'});

    fetchPost('http://127.0.0.1/geosearch', body).then(resp => {
        expect(resp.status == 200).toBeTruthy();
    })
})