/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function firstPromise(condition){
    return new Promise((resolve , reject) => {
        setTimeout( () => {
            if(condition){
                resolve("First promise resolved")
            }
            else{
                reject("First Promise rejected")
            }
        },1000)
    })
}



function secondPromise(condition){
    return new Promise((resolve , reject) => {
        setTimeout( () => {
            if(condition){
                resolve("second promise resolved")
            }
            else{
                reject("second Promise rejected")
            }
        },2000)
    })
}

function thirdPromise(condition){
    return new Promise((resolve , reject) => {
        setTimeout( () => {
            if(condition){
                resolve("third promise resolved")
            }
            else{
                reject("third Promise rejected")
            }
        },3000)
    })
}

// promise chaining 
function results(){
   firstPromise(true)
    .then(secondPromise(true))
    .then(thirdPromise(true))
    .then( (res) =>{
        console.log(res);
    })
    .catch((err) => {
        console.error("Error is " , err); 
    })
    
}

// setTimeout(() => {     
//     results();
// },2000)

results(); 