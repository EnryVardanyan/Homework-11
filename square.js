const p = new Promise((resolve, reject) =>{
    resolve("asd")
})

function squarePromise(promise){
    return promise.then (res => {        
        if(!isNaN(+res)) return console.log((+res) * (+res))
        return console.log(new Error(`Cannot convert ${res} to a
        number!`))
    })
}
squarePromise(p)

