//const names=["kruThik","hamsHIk","Prash","yaShu"];

// const upper=names.map(f1);
// const lower=names.map(f2);
// const d=date.map(f3);
// console.log(d);
// console.log(upper);
// console.log(lower)
// function f1(ele){
//     return ele.toUpperCase();
// }
 
// function f2(e){
//     return e.toLowerCase();
// }
// function f3(ar){
//     const parts=ar.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`
// }
// const ab=["2000-09-20","2001-01-17"]
// function fr(ar) {
//     const parts = ar.split("-");
//     console.log(parts);
// }
// fr(ab);
//const ab = ["2000-09-20", "2001-01-17"];

// function fr(dates) {
//     dates.forEach(date => {
//         const parts = date.split("-");
//         console.log(parts);
//     });
// }

// fr(ab);
// function sp(a){
// a.forEach(element => {
//     const p=element.split("-");
//     console.log(p);
    
// });
// }
// sp(ab);

// const bu=["kruthik","krachana","hamshik","bhoomika"];
// const abb=bu.filter(f2);
// console.log(abb)
// function f2(e){
//     return e.charAt(2)==='u';
// }
// let a=[1,2,3,4,5,6];
// let b=a.filter(e=>e>=5);
        
// console.log(b);

// const users=[
//     {
//      name:"kruthik",
//      age:"25"
//     },
//     {
//         name:"hamshik",
//         age:"19"
//        },
//        {
//         name:"rachana",
//         age:"25"
//        },
//        {
//         name:"yashu",
//         age:"19"
//        },
//        {
//         name:"prash",
//         age:"16"
//        }

// ]
// const a=users.filter(use=>use.age>20);
// console.log(a);

// const use = [
//     { id: 1, name: "Joe" },
//     { id: -19, name: "John" },
//     { id: 20, name: "James" },
//     { id: 25, name: "Jack" },
//     { id: -10, name: "Joseph" },
//     { id: NaN, name: "Jimmy" },
//     { id: null, name: "Jeff" }
//   ];
//  const obje= use.filter(use => typeof use.id === 'number' && use.id >= 0);
//  console.log(obje);
  
//  console.log(typeof NaN);

// function sum(numbers){
//     let sum=0;
//     numbers.forEach(num =>{
//      sum +=num;
//     })
//     return sum;
//     }
//     const res=sum([]);
//     console.log(res);

// function isEven(number) {
//     return number%2==0?"even":"odd";
//   }
  
// console.log(isEven(4)); 
// console.log(isEven(7)); 

//    function reverseString(str){
//     let name='';
//     for(let i=str.length-1;i>=0;i--)
//     {
//      name +=str[i];
//     }
//     return name
//    }
//     console.log(reverseString("hello"));
//     console.log(reverseString("javascript"));
// function findMax(numbers){
//     let sum;
//     if(!numbers)
//     {
//         sum=numbers[0];
//     }
//     for(let i=0;i<numbers.length;i++)
//     {
//         if(numbers[i]<numbers[i+1])
//         {
//             sum=numbers[i+1];
//         }
//     }
//    return sum;
// }
// console.log(findMax([]));
// function factorial(n){
//     if(n>0)
//     return Math.pow(n,2);
//     else
//     return 1;
// }
// console.log(factorial(5));

// function isPrime(n)
// {
//     let prime=true;
//     for(let i=2;i<=n/2;i++)
//     {
//         if(n%i===0)
//         {
//           return false;
//         }
//     }
//     return prime;
// }
// console.log(isPrime(2));

// function isprime(n)
// {   
    
//     let count =0
//     for(let i=1;i<=n;i++){
//         if(n%i ==0){
//             count++
//         }

//         if(count==2){
//             return `${n} is prime`
//         }
              
//         else return `${n} is not prime`
//     }
    
    
    
// }
// console.log(isprime(20))

// function fizzBuzz(n){
//     let arr=[];
//   for(let i=1;i<=n;i++)
//     {
//         if(i%3==0 && i%5===0)
//         {
//             arr.push("fizzbuzz");
//         }
//         else
//         if (i%3==0){
//         arr.push("FIZZ")
//         }
//         else
//         if(i%5==0)
//         {
//         arr.push("BUZZ");
//         }
//         else{
//             arr.push(i);
//         }
//     } 
//     return arr; 
// }
// console.log(fizzBuzz(15));
function removeDuplicates(arr){
    let arr1=[];
    for(let i=0;i<arr.length;i++)
    {
        let count=0;
        for(let j=i;j<=arr.length;j++)
        {
            if(arr[i]===arr[j])
            {
                count++;
            }
        }
    if(count === 1)
        {
            arr1.push(arr[i])
        }
    }
    return arr1;
}
console.log(removeDuplicates(["a","b","c","d","a","e","f","b","g"]));
//this is the second repo dfgfsg
// modifed here