// JS Promises with two callback resolve and reject 
// let data_load = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//             reject(10);
//     },2000);
// }); 

// JS Promises then() catch()
// JS Chaining Promises 
data_load.then((item)=>{
    console.log("1st", item)
  return item*10
}).then((item)=>{
    console.log("2nd", item)
    return item*10
}).then((item)=>{
    console.log("3rd", item)
    return item*10
}).then((item)=>{
    console.log("4th", item)
});

data_load.then((item)=>{
    console.log("then block", item)
}).catch((error)=>{
    console.log("catch block", error)   
})
let url  = fetch("https://dummy.restapiexample.com/api/v1/employees");
url.then((item)=>{
  return item.json();
}).then((data)=>{
  console.log(data);
});

// Promise.all method([]) 
// Promise.allSettled([])
// Promise.race([])

let data = Promise.race([
    new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve("2 seconds");
    },2000)
    }),

    new Promise(function (resolve, reject) {
    setTimeout(function () {
    reject("1 seconds");
    },1000)
    }),

    new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve("3 seconds");
    },3000)
    })
]);

data.then((item)=>{
    console.log("then Block", item);
}).catch((error)=>{
    console.log("catch Block", error);
})


// async/await 
// what is async/await
// How to use it 
// Example
// Example wih api
// Interview question 

// Async Await

let a = 5;
let b = 10;
let c =  20;

console.log(a);
setTimeout(() =>{
console.log(c)
},3000);
console.log(b);


 function getData(){
    let p1 = new Promise(function (resolve, reject) {
        let a = 5;
        setTimeout(function () {
            resolve(a);
        },2000);
    });
    p1.then(function(x) {
        console.log(x);
    });

    let p2 = new Promise(function (resolve, reject) {
        let b = 10;
        setTimeout(function () {
            resolve(b);
        },1000);
    });
    p2.then(function(x) {
        console.log(x);
    });

    let p3 = new Promise(function (resolve, reject) {
        let c = 15;
        setTimeout(function () {
            resolve(c);
        },3000);
    });
    p3.then(function(x) {
        console.log(x);
    });
};

getData();



// // Async Await

async function myFunction(){
let handlePromises = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("All done !");
    },3000)
});

let dataa = 1;
console.warn("First", dataa);
dataa  =  2;
setTimeout(()=>{
    console.log("Second", dataa)
},2000);
let x = await handlePromises;
console.log(x);
dataa = 3;
console.log("last", dataa);

}
myFunction()


