import tokenService from './tokenService';

const BASE_URL = '/api/items/';

export default {
    index,
    create,
    update,
    detail,
    add,
    remove,
    byeBye
};

function index() {
    console.log('working');
    const options = {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function create(item) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(item)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function detail(itemId) {
    const options = {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + itemId, options).then(res => res.json());
}

function update(itemId, item) {
    const options = {
        method: 'PUT',
        headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(item)
    };
    return fetch(BASE_URL + itemId, options).then(res => res.json());
}

function byeBye(itemId) {
    const options = {
        method: 'DELETE',
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + 'delete/' + itemId, options).then(res => res.json());
}

function add(charId, itemId) {
    const options = {
        method: 'GET',
        headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + charId + '/' + itemId, options).then(res => res.json());
}

function remove(charId, itemId) {
    const options = {
        method: 'GET',
        headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL + 'remove/' + charId + '/' + itemId, options).then(res => res.json());
}