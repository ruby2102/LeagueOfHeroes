
const BASE_URL = 'https://psw-server.onrender.com/';
const PUBLIC_ID = '29117';
const PRIVATE_ID = 'uyxsq';

export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/users/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

export const getUserHeroes = async () => {
    const response = await fetch(`${BASE_URL}/users/${PUBLIC_ID}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

export const getUserTopHeroes = async () => {
    const response = await fetch(`${BASE_URL}/users/${PUBLIC_ID}/top`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

export const saveUserHeroes = async (heroes) => {
    const response = await fetch(`${BASE_URL}/users/${PRIVATE_ID}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(heroes),
    });
    return response.json();
};

export const saveUserTopHeroes = async (topHeroes) => {
    const response = await fetch(`${BASE_URL}/users/${PRIVATE_ID}/top`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(topHeroes),
    });
    return response.json();
};
