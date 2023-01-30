// Fetch api javascript

// let fetch_Data = fetch("https://jsonplaceholder.typicode.com/users");
// let fetch_Data = fetch("json/student_data.json");
// fetch_Data.then((response) => {
//   console.log(response.status);
//   console.log(response.ok)
//   response.json()
// }).then((data) => {
// console.log(data);
// // for(let i in data) {
// // document.write(`<li> ${data[i].name}</li><li> ${data[i].email}</li> <br>  `)
// // }
// for(let i in data) {
//     document.write(`${data[i].name} - ${data[i].age} - ${data[i].city } <br>`)
//  }
    
// }).catch((error) => {
// console.log("Can't fetch data");
// });


// Posting Data 
// Creating a resource

// let obj = {
//     first_Name: document.getElementById("fname").value,
//     last_Name: document.getElementById("lname").value,
//     userId: document.getElementById("userId").value,
// };

// document.getElementById("saveForm").addEventListener("click",function(e){
// e.preventDefault();
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(obj),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => {
//     console.log("Can't fetch data");
//   })

// //   console.log(first_Name);
// });

// API call in javascript 


let userInfo = fetch("https://jsonplaceholder.typicode.com/users");

// userInfo.then((response) => {
// return response.json();
// }).then((data) => {
//     console.log(data);
//     let div =  document.getElementById("table-id");
//     let ihtml = "";
//     for(key in data){
//          ihtml += `
//          <tr> 
//          <td> ${data[key].name} </td>
//          <td> ${data[key].username} </td>
//          <td> ${data[key].email} </td>
//          <td> ${data[key].phone} </td>
//          <td> ${data[key].website} </td>
//      </tr>
// `
//     }
//     div.innerHTML = ihtml;
// })

userInfo.then((response) => {
    return response.json();
    }).then((data) => {
      console.log(data);
    for(let i in data) {
      console.log(data[i]);
    }
});