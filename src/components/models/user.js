import React from "react";

export function generateInitialUsers() {
    const initialData = [
        // { id: 'admin', name: 'ThanhHai', username: 'thanhhai', userpassword: '123456' },
    ];
    // nếu chưa có dữ liệu trong localstorage => khởi tạo dữ liệu
    if (!localStorage.getItem('userData')) {
        localStorage.setItem('userData', JSON.stringify(initialData));
    }
}

export function getUsers() {
    // vào localstorage lấy dữ liệu với key = users
    let json = localStorage.getItem('userData');
    return !json ? [] : JSON.parse(json);
}

export function login(username, userpassword) {
    const users = getUsers();
    const foundUser = users.find(user => user.username == username && user.userpassword == userpassword);
    // nếu tìm thấy người dùng => lưu trạng thái đăng nhập vào localstorage
    if (foundUser) {
        localStorage.setItem('current-user', JSON.stringify(foundUser));
    }
    return foundUser;
}

export function autoLogin() {
    const json = localStorage.getItem('current-user');
    return json ? JSON.parse(json) : null;
}

export const AuthContext = React.createContext(null);
//Đăng kí đăng nhập nên dùng authContext