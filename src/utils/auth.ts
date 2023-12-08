import { connectSocket } from "./socket";
// @ts-ignore
// import jwt from 'jsonwebtoken';
const BASE_URL = '/api/users/';
const SECRET = process.env.SECRET;

console.log('Is this firing?')

export function getToken() {
    console.log('Getting Token')
    let token = localStorage.getItem('token');
    console.log(token, 'Token in getToken');
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token');
            token = null;
        };
    };
    return token;
};

export function getUserFromToken() {
    console.log('Getting User from Token')
    const token = getToken();
    console.log(token, 'Token in getUserFromToken')
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
};

export function setToken(token: string) {
    console.log('Setting Token')
    if (token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    };
};

export function removeToken() {
    localStorage.removeItem('token');
};

export function isLoggedIn() {
    return !!getToken();
};

export async function login(creds: any) {
//     console.log(creds, "Creds?")
//     const token = createJWT(creds);
//     console.log(token, "Token in login?")
//     return token;

//     // const socket = connectSocket('ws://localhost:3000');
//     // socket.onopen = () => {
//     //     console.log(creds, "Creds?")
//     //     socket.send(JSON.stringify(creds));
//     // };
//     // socket.onmessage = (event: any) => {
//     //     const { token } = JSON.parse(event.data);
//     //     console.log(token, "Token?")
//     //     setToken(token);
//     // };

//     // return fetch(BASE_URL + 'login', {
//     //     method: 'POST',
//     //     headers: new Headers({ 'Content-Type': 'application/json' }),
//     //     body: JSON.stringify(creds)
//     // }).then(async res => {
//     //     if (res.ok) return res.json();
//     //     const response = await res.json();
//     //     throw new Error(response.err);
//     // }).then(({token}) => setToken(token));
};

export function logout() {
    removeToken();
};

export async function signup(user: any) {
    // return fetch(BASE_URL + 'signup', {
    //     method: 'POST',
    //     body: user
    // }).then(async res => {
    //     if (res.ok) return res.json();
    //     return res.json().then(response => {
    //         throw new Error(response.err)
    //     })
    // }).then(({token}) => setToken(token));
    try {
        // const token = createJWT(user);
        // return token;
    } catch (err: any) {
        console.log(`Error: ${err}`);
    };
};

// function createJWT(player: any): string {
//     return jwt.sign(
//         { player },
//         SECRET,
//         { expiresIn: '7d' }
//     );
// };