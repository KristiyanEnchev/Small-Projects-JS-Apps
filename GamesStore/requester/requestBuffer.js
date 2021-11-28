import * as api from './requestInitiator.js';

api.settings.host = 'http://localhost:3030';
const host = api.settings.host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getItems() {
    return await api.get(host +'/data/games?sortBy=_createdOn%20desc');
}

export async function getMostRecentItems() {
    return await api.get(host +'/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function getItemsById(id) {
    return await api.get(host + '/data/games/' + id);
}

export async function getMyItems() {
    const userId = sessionStorage.getItem('userId');
    // return await api.get(host + `/data/games?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function create(item) {
    return await api.post(host + '/data/games', item);
}

export async function edit(id, item) {
    return await api.put(host + '/data/games/' + id, item);
}

export async function deleteRequest(id) {
    return await api.del(host + '/data/games/' + id);
}

export async function createComentRequest(coment, id) {
    let result = await api.post(host + '/data/comments', coment);
    return await api.get(host + `/data/comments?where=gameId%3D%22${id}%22`);
}

export async function getComentsByPostId(id) {
    return await api.get( host + `/data/comments?where=gameId%3D%22${id}%22`);
}