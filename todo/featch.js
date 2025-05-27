

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json(); // Convert the response to JSON
//   })
//   .then(data => console.log(data)) // Log the parsed JSON data
//   .catch(error => console.error("Fetch error:", error));

//   fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => response.json())
// .then(data => console.log(data.name))
// .catch(error => console.error(error));

// let a=new Promise((resolve,reject)=>
// {
//     let a=1+1;
//     if(a===2)
//     {
//         resolve(" success")
//     }
//     else{
//         reject("failed")
//     }
// })

// a.then((message)=>{
//     console.log("this is in then " + message)
// }).catch((message)=>{
//     console.log("this is in the catch" + message)
// })


// let kruth=new Promise((resolve,reject)=>{
//     let b=1+1;
//     if(b==2)
//     {
//         resolve("its correct")
//     }else
//     {
//         reject("no its not correct")
//     }
// })
// kruth.then((message)=>{
//     console.log("its inside then " + message);
// }).catch((message)=>{
//     console.log("its inside catch" + message);
// })


// let userleft=true;
// let userwatchingcat=true;
// function f1()
// {
//     return new Response((resolve,reject)=>
//     {
//         if(userleft)
//             {
//               reject({
//                 name:'user left',
//                 message:":("
//               }) else if(userwatchingcat)
//               {
//                 reject({
//                     name:"userwaychingcat",
//                     message:"webdev"
//                 })

//               }
//             }
//     })
    
//}
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(res=> res.json())
// .then(data=> console.log(data))
// .catch(error=>console.error(error));

// async function fetchData(){
//     try{
//         const res=await fetch(`https://pokeapi.co/api/v2/pokemon`);
//         if(!res.ok){
//             throw new Error("could not fetch resource");
//         }
//         const data=await res.json();
//         diplay(data)
//     }
//     catch (error) {
//          console.log(error);
         
//     }
// }


// const diplay = (data)=>{
//     const div = document.getElementById("div")
//         div.innerHTML = ""
//         data.results.forEach(element => {
//             const para = document.createElement("p")
//             para.innerHTML = element.name;
//             div.appendChild(para)
        
//         });
        
//         const pokemonsprite = data.sprites.front_default;
//         const imgelement=document.getElementById("pokemonSprite");
//         imgelement.src=pokemonsprite;
//         imgelement.style.display="block";
// }

// async function fetchData(){
//     try{
//         const res=await fetch(`https://pokeapi.co/api/v2/pokemon`);
//         if(!res.ok){
//             throw new Error("could not fetch resource");
//         }
//         const data=await res.json();
//         diplay(data)
//     }
//     catch (error) {
//          console.log(error);
         
//     }
// }


// const diplay = (data)=>{
//     console.log(data);
//     const div = document.getElementById("div")
//         div.innerHTML = ""
//         data.forEach(element => {
//             const ab=data.sprites.front_default;
//             const para = document.createElement("img")
//             console.log(para);
//             para.innerHTML = ab;
//             div.appendChild(para)
            
        
//         });
        
//         const pokemonsprite = data.sprites.front_default;
//         const imgelement=document.getElementById("pokemonSprite");
//         imgelement.src=pokemonsprite;
//         imgelement.style.display="block";
// }

// const display = (data) => {
//     const div = document.getElementById("div");
//     div.innerHTML = ""; // Clear existing content

//     data.forEach(element => {
//         if (element.sprites && element.sprites.front_default) {
//             const img = document.createElement("img");
//             img.src = element.sprites.front_default;
//             div.appendChild(img);
//         }
//     });

//         const pokemonsprite = data.sprites.front_default;
//         const imgelement=document.getElementById("pokemonSprite");
//         imgelement.src=pokemonsprite;
//         .imgelement.style.display="block";
//     };


// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=2649d654")
// .then(res=>{
//     if(!res.ok)
//     {
//         return new error("coudnt featch resource ")
//     }
//     res.json()
// } )
// .then(data=> console.log(data))
// .catch(error=>console.error(error));
//http://www.omdbapi.com/?i=tt3896198&apikey=2649d654
// async function fetchData(){
//     try{
//         const res=await fetch("http://www.omdbapi.com/?s=guardians&apikey=2649d654");
//         if(!res.ok){
//             throw new Error("could not fetch resource");
//         }
//         const data=await res.json();
//         console.log(data);
//         data.array.forEach(element => {
//             let imgage=document.createElement("img")
//             imgage.src=data.Poster;
//         });
//         // let movie=document.getElementById('p');
//         // p.innerHTML=data.Title;
//         // let actors=document.getElementById('actors');
//         // actors.innerHTML=`Actors: ${data.Actors}`;
//         // let img=document.getElementById('image');
//         // img.src=data.Poster;
//         // console.log(img);
        
//     }
//     catch (error) {
//         console.error("Error fetching data:", error);
         
//     }
// }

async function fetchData() {
    try {
        const res = await fetch("http://www.omdbapi.com/?s=guardians&apikey=2649d654");
        if (!res.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await res.json();
        console.log(data);

        const div = document.getElementById("div");

        data.forEach(movie => {
            const image = document.createElement("img");
            image.src = movie.Poster;
            image.style.width = "200px"; 
            image.style.margin = "10px";
            div.appendChild(image);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

