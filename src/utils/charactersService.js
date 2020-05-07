import tokenService from './tokenService';

const BASE_URL = '/api/characters/';

export default {
    index,
    create,
    detail
};

function index() {
    const options = {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function create(character) {
    const options = {
        method: 'POST',
        headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(character)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function detail(charId) {
    const options = {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + charId, options).then(res => res.json());
}
