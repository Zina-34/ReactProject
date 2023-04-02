
export const getTableOfList = () => {
    if(!localStorage["users"]){
        localStorage["users"] = "[]";
    }
    
    let users = localStorage["users"];
    users = JSON.parse(users);
    return users;

};

export const addUser =(user) => {
    const users = getTableOfList();
    users.push(user);
    localStorage["users"] = JSON.stringify(users);
};

export const removeUser = (id) => {
    let users = getTableOfList();
    users = users.filter((user) => user.id !== id);
    localStorage["users"] = JSON.stringify(users);
}

export const getUserById = (id) => {
    const users = getTableOfList();
    const user = users.find(user => user.id === id);
    return user;
}


export const editUser = (id, newUser) => {
    let users = getTableOfList();
    users = users.filter(user => user.id !== id);
    users.push(newUser);
    localStorage["users"] = JSON.stringify(users);

};

