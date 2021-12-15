 let r=document.getElementById("t");
 let par1=document.getElementById("o");


function test(){
    fetch("https://restcountries.com/v3.1/capital/lima")
    .then((res)=>{
       return res.json()
      // console.log(res);
    })
    .then((result)=>{
        console.log(result);
       let c=JSON.stringify(result[0].name.nativeName);
      par1.innerText-Object.values(result[0].name.nativeName);
      par1.innerText = c;
    }).catch((f) =>{
        console.log("something");
    });
}
test();

//callback

//promise

// const p1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("success")
//     },1000);
// })

// const p1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("failure")
//     },1000);
// })
//p1.then(console.log)