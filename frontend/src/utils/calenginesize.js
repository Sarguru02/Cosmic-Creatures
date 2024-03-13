export function findsize(userdata) {
    if (userdata["fetchingData"]['engineSize'] === "small")
        return 33;
    if (userdata["fetchingData"]['engineSize'] === "medium")
        return 66;
    return 100;
}

export function findac(userdata){
    const a=userdata['fetchingData']["actype"];
    const b=a[0];
    return b;
}