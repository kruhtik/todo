// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then()
// .catch();




// function hello(call){
   
//         console.log("hello");
//          call();
    
// }
// function wait(){
//     console.log("wait")
// }
// function leve(){
//     console.log("leve")
// }
// function goodbye(){
//     console.log("good bye");
// }
// sum(pagedisplay,4,6);
// function sum(call, a,b)
// {
//     let result=a+b;
//     call(result);
// } 
// function display(result){
// console.log(result);
// }
// function pagedisplay(result){
//   document.getElementById('mypage').textContent=result;
// }
function walkDog(call){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("walking dog");
        }, 3000);
    })

}
function kitchen(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("cleaing is done"); 
        },4000)
    });
}
function trash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("trash out");
        },500)
    });
   
}


// walkDog()
// .then(value => {
//     console.log(value);
//     return kitchen();
// })
// .then(value => {
//     console.log(value);
//     return trash();
// })
// .then(value => {
//     console.log(value);
//     console.log("You finished all the chores!");
// });

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//       .then(response => console.log(response))
//       .then(data => console.log(data.id))
//       .catch(error => console.log(error));
let pr=new Promise ((reject,resolve)=>{

let a=1+1;
if(a == 2)
{
    resolve('success')
}else{
    reject('failed')
}
})
pr.then((message)=>{
    console.log('this is in the then' + message);
}).catch((message)=>{
    console.log('this is in the catch ' + message);
}) 

let p=new Promise((reject,resolve)=>{
    let a=3+6;
    if(a===0)
    {
        resolve('correct');
    }
    else {
        reject('correct');
    }
})
p.then((message)=>{
    console.log('this is in the then '+ message)
}).catch((message)=>{
    console.log('this is in the catch '+ message)
})


let a=new Promise((reject,resolve)=>{
    resolve('one id resolved');
})
let b=new Promise((reject,resolve)=>{
    resolve('second is resolved')
})
let c=new Promise((resolve,reject)=>{
    resolve('third');
})
Promise.all([a,b,c]).then((message)=>{
    console.log("message");
});