function mapPromise(promise, transformer){
    return promise.then(res => transformer(res))
}
const myPromise = Promise.resolve(10)
const myTransformer = (val => val * 2)
mapPromise(myPromise, myTransformer).then(res => console.log(res)).catch(err => console.log(err))
