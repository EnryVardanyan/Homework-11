function mapPromise(promise, transformer){
    return promise.then(res => transformer(res))
}
const myPromise = Promise.resolve(10)
const myTransformer = (val => val * 2)
mapPromise(myPromise, myTransformer).then(res => console.log(res)).catch(err => console.log(err))

//ex 5  Promise.resolve()
// .then(() => console.log(1))
// .catch(() => console.log(3))
// .then(() => { console.log(2); throw new Error(); })
// .then(() => console.log(4))
// .then(() => console.log(4))
// 1,2,error


// Promise.resolve()
// .then(() => console.log(11))
// .then(() => { console.log(12); throw new Error(); })
// .catch(() => console.log(13))
// .catch(() => console.log(14))
// .then(() => console.log(15))

// 11,12,13,15