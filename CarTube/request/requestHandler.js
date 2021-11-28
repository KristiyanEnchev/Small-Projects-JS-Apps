async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const error = await response.json();
            alert(error.message);
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data
        } catch (error) {
            return response;
        }
    } catch (error) {
        throw error.message;
    }
}

function setOptions(method, data) {

    if (method == undefined) {
        method = 'get'
    }

    let options = {
        method,
        headers: {},
    }

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        options.headers['X-Autorization'] = token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return options;
}

export const setHost = {
    host: ''
}

export async function get(url) {
    return await request(url);
}

export async function post(url, data) {
    return await request(url, setOptions('post', data));
}