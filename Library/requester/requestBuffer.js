import * as api from './requestInitiator.js';

api.settings.host = 'http://localhost:3030';
const host = api.settings.host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getItems() {
    return await api.get(host +'/data/books?sortBy=_createdOn%20desc');
}

export async function getItemsById(id) {
    return await api.get(host + '/data/books/' + id);
}

export async function getMyItems() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function create(item) {
    return await api.post(host + '/data/books', item);
}

export async function edit(id, item) {
    return await api.put(host + '/data/books/' + id, item);
}

export async function deleteRequest(id) {
    return await api.del(host + '/data/books/' + id);
}


export async function getLikesByBookId(id) {
    return await api.get(host + `/data/likes?where=bookId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function getOwnLikesByBookId(id, userId) {
    console.log(userId);
    return await api.get(host + `/data/likes?where=bookId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function likeBookRequest(body) {

    // let result =  await api.post(host + '/data/likes', body);
    return await api.post(host + '/data/likes', body);
    // return await api.post(host + `/data/likes?where=_id%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22count`);
}