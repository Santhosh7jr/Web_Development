let button=document.querySelector("button");

let flag=false;
// button.addEventListener("click",()=>{
//     if(!flag){
//         document.body.style.backgroundColor="black";
//         flag=true;
//     }else{
//         document.body.style.backgroundColor="white";
//         flag=false;
//     }
// });

const fun=()=>{
    if(!flag){
        document.body.style.backgroundColor="black";
        flag=true;
    }else{
        document.body.style.backgroundColor="white";
        flag=false;
    }
}

button.addEventListener("click",fun);

let divs=document.querySelectorAll(".boxes");

divs.forEach(div => {
    div.addEventListener("click", () => {
        console.log(`box got clicked!`);
    });
});