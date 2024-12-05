//*Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.

 function resolvePromise(n) {
    const promise = new Promise((resolve , reject) =>{
        setTimeout(() => {

            resolve(`Resolve after ${n} second`);

        }, n * 1000);
    })
    return promise;
        
}

async function result() {
   let data =  await resolvePromise(3);
    console.log(data)
  
}
result();



