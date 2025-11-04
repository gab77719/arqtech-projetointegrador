export const isLogged = () => {
    return localStorage.getItem('token') !== null;
};

export const doLogin = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user)); 
};

export const doLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}


export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};


