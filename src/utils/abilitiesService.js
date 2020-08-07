import tokenService from './tokenService';

const BASE_URL = '/api/abilities/';

export default {
    index,
    create,
    update,
    detail,
    add,
    remove,
    byeBye
};

function index(charId) {
    const options = {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + charId, options).then(res => res.json());
}

function create(ability) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(ability)
    };
    console.log('sending ability post request', options);
    return fetch(BASE_URL, options).then(res => res.json());
}

function detail(abilityId) {
    const options = {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + abilityId, options).then(res => res.json());
}

function update(abilityId, ability) {
    const options = {
        method: 'PUT',
        headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(ability)
    };
    return fetch(BASE_URL + abilityId, options).then(res => res.json());
}

function byeBye(abilityId) {
    const options = {
        method: 'DELETE',
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + 'delete/' + abilityId, options).then(res => res.json());
}

function add(charId, abilityId) {
    const options = {
        method: 'GET',
        headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + charId + '/' + abilityId, options).then(res => res.json());
}

function remove(charId, abilityId) {
    const options = {
        method: 'GET',
        headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + 'remove/' + charId + '/' + abilityId, options).then(res => res.json());
}