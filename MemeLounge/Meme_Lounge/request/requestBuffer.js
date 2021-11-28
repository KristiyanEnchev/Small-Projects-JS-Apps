import * as api from './requestHandler.js';

api.settings.host = 'http://localhost:3030';
const host = api.settings.host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getMemes() {
    return await api.get(host + '/data/memes?sortBy=_createdOn%20desc');
}

export async function getMemesById(id) {
    return await api.get(host + '/data/memes/' + id);
}

export async function getMyMemes() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function create(item) {
    return await api.post(host + '/data/memes', item);
}

export async function editMeme(id, item) {
    return await api.put(host + '/data/memes/' + id, item);
}

export async function deleteRequest(id) {
    return await api.del(host + '/data/memes/' + id);
}