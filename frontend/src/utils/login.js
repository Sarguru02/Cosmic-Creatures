
export function login(username, password) {
    const userobj = {
        username: username,
        login_state: password === "password",
    }
    localStorage.setItem('user', JSON.stringify(userobj));
}


export function logout() {
    localStorage.removeItem('user');
}


export function signup(username, password) {
    login(username, password);
}


export function checkLogin() {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    return user.login_state === true;
}
