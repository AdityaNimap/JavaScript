function returnPromise() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This promise in resolved');
        }, 2000);
    });
    return p1;
}

async function asyncCall() {
    console.log('calling');
    const result = await returnPromise();
    console.log(result);
    console.log("run after promise is completely resolved")
}

asyncCall();
