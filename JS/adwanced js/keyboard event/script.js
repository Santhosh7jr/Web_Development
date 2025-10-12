document.addEventListener("keypress",(enevt)=>{
    document.querySelector("h1").append(enevt.key);
})