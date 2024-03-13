// fyki we use localstorage as db rn 
//
//

export function getUserData() {
    // get the current username from localstorage with the key user
    const username = JSON.parse(localStorage.getItem("user")).username;
    // get the full db from localstorage
    const fulldb = JSON.parse(localStorage.getItem("database"));
    // find the user in the db and return the user object
    const user = fulldb.find(user => user[username]);
    return user[username];
}


export function putUserData(props){
    const username = JSON.parse(localStorage.getItem("user")).username;
    const userobj = {[username]: {fetchingData: props}};

    // get the db, if it's empty, create a new one
    const fulldb = JSON.parse(localStorage.getItem("database")) || [];
    fulldb.push(userobj);
    localStorage.setItem("database", JSON.stringify(fulldb));
}
