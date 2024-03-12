// fyki we use localstorage as db rn 
//
//

export function getUserData() {
  return JSON.parse(localStorage.getItem("user"));
}

export function putUserData(props){
    const username = JSON.parse(localStorage.getItem("user")).username;
    const userobj = {[username]: {...props}}
    // get array of all user objects
    const allUsers = JSON.parse(localStorage.getItem("users"));
    // if array is empty, create new array
    if (!allUsers) {
        localStorage.setItem("users", JSON.stringify([userobj]));
    } else {
        // if array is not empty, create user object and push into array
        allUsers.push(userobj);
        localStorage.setItem("database", JSON.stringify(allUsers));
    }
}
