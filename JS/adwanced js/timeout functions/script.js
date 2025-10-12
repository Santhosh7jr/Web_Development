//timeout function works exactly once
// setTimeout(()=>{
//     console.log("hello world");
// },1000);

//interval function works repeatedly

setInterval(()=>{
    color1=Math.floor(Math.random()*255)+1
    color2=Math.floor(Math.random()*255)+1
    color3=Math.floor(Math.random()*255)+1

    document.body.style.backgroundColor=`rgb(${color1},${color2},${color3})`;
},5000);