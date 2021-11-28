import * as api from './requestInitiator.js';

api.settings.host = 'http://localhost:3030';
const host = api.settings.host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getItems() {
    return await api.get(host +'/data/shoes?sortBy=_createdOn%20desc');
}

export async function getItemsById(id) {
    return await api.get(host + '/data/shoes/' + id);
}

export async function getMyItems() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/shoes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function create(item) {
    return await api.post(host + '/data/shoes', item);
}

export async function edit(id, item) {
    return await api.put(host + '/data/shoes/' + id, item);
}

export async function deleteRequest(id) {
    return await api.del(host + '/data/shoes/' + id);
}

export async function search(query) {
    // return await api.get(host + `/data/movies?where=title%20LIKE%20%22${query}%22`);

    //serch by title(string)
}

export async function buyShoeRequest(body, id, userId) {
    let result =  await api.post(host + '/data/shopingCart', body);
    return await api.get(host + `/data/shopingCart?where=shoeId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
}

export async function getOwnShoes(id, userId) {
    return await api.get(host + `/data/shopingCart?where=shoeId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
}