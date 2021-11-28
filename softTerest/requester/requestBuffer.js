import * as api from './requestInitiator.js';

api.settings.host = 'http://localhost:3030';
const host = api.settings.host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc

export async function getItems() {
    return await api.get(host +'/data/ideas?sortBy=_createdOn%20desc');
}

export async function getItemsById(id) {
    return await api.get(host + '/data/ideas/' + id);
}

export async function getMyItems() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/ideas?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function create(item) {
    return await api.post(host + '/data/ideas', item);
}

export async function edit(id, item) {
    return await api.put(host + '/data/ideas/' + id, item);
}

export async function deleteRequest(id) {
    return await api.del(host + '/data/ideas/' + id);
}

export async function search(query) {
    // return await api.get(host + `/data/ideas?where=title%20LIKE%20%22${query}%22`);

    //serch by title(string)
}

export async function getLikesByIdeaId(id) {
    return await api.get(host + '/data/likes/' + `?where=ideaId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function getOwnLikesByIdeaId(id) {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/likes?where=ideaId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
}

export async function likeIdeaRequest(body, id) {
    const userId = sessionStorage.getItem('userId');
    let result =  await api.post(host + '/data/likes', body);
    return await api.get(host + `/data/likes?where=ideaId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
}

export async function getComents() {
    return await api.get(host + '/data/comments');
    
}

export async function createComentRequest(coment, id) {
    let result = await api.post(host + '/data/comments', coment);
    // return await api.post(host + '/data/comments', coment);
    // return await api.get(host + '/data/comments' + result._id + '?load=' + encodeURIComponent('author=_ownerId:users'));
    return await api.get(host + `/data/comments?where=recipeId%3D%22${id}%22&sortBy=_createdOn%20desc`);
}

export async function getComentsByPostId(id) {
    return await api.get( host + `/data/comments?where=recipeId%3D%22${id}%22&sortBy=_createdOn%20desc`);

    // '?load=' + encodeURIComponent('author=_ownerId:users'
}