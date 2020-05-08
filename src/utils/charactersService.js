import tokenService from './tokenService';

const BASE_URL = '/api/characters/';

export default {
    index,
    create,
    detail,
    update,
    byeBye
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

function update(charId, character) {
    const options = {
        method: 'PUT',
        headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(character)
    };
    return fetch(BASE_URL + charId, options).then(res => res.json());
}

function byeBye(charId) {
    const options = {
        method: 'DELETE',
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + charId, options).then(res => res.json());
}