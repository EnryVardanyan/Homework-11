function upperCasePromise(arg){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof arg === "string") resolve(arg.toUpperCase())
            reject(arg)
        },500)
    }).then(str => console.log(str)).catch(arg => console.log(arg))
}
upperCasePromise(123)