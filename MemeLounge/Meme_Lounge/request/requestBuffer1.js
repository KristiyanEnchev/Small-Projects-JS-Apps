import * as api from "./requestHandler.js";

const host = 'http://localhost:3030'
api.setHost.host = host;

export async function getMemes() {
    return await api.get(host + '/data/memes?sortBy=_createdOn%20desc');
}

// export async function getMemes() {
//     return await api.get(host + '/data/memes?sortBy=_createdOn%20desc');
// }
// export async function getMemes() {
//     return await api.request(host + '/data/memes?sortBy=_createdOn%20desc');
// }
// export async function getMemes() {
//     const response = await fetch(host + '/data/memes');

//     if (!response.ok) {
//         const error = await response.json();
//         alert(error.message);
//         throw new Error(error.message);
//     }

//     const data = await response.json();
//     return data;
// }

export async function getMyMemes() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function getMemesById(id) {
    const response = await fetch(host + '/data/memes/' + id);
    if (!response.ok) {
        let error = await response.json();
        throw new Error(error.message);
    }
    const data = await response.json();

    return data;
}

export async function create(body, token) {
    const response = await fetch(host + '/data/memes', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

export async function deleteRequest(id, token) {

    const response = await fetch(host + '/data/memes/' + id, {
        method: 'Delete',
        headers: { "X-Authorization": token }
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    let data = await response.json();
    return data;
}

export async function editMeme(body, token, id) {

    const response = await fetch(host + '/data/memes/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

export async function logout(token) {

    const response = await fetch(host + '/users/logout', {
        method: 'get',
        headers: { "X-Authorization": token }
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    sessionStorage.clear();
}

export async function handleSerchRequest(serch) {

    const response = await fetch(host + `/data/cars?where=year%3D${serch}`, {
        method: 'get',
        // headers: { "X-Authorization": token }
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

export async function handleRegisterRequest(body) {

    const response = await fetch(host + '/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    setupSession(data);
    return data;
}

export async function handleLoginRequest(body) {

    const response = await fetch(host + '/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    setupSession(data);
    return data;
}

export function setupSession(data) {
    sessionStorage.setItem('authToken', data.accessToken);
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('username', data.username);
    sessionStorage.setItem('userEmail', data.email);
    sessionStorage.setItem('userGender', data.gender);
}