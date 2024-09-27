const button=document.querySelectorAll(".batton");
const body=document.querySelector("body");
const main=document.querySelector(".main");

button.forEach(function (button){
    button.addEventListener("click",function(e){
        main.style.color='#fff';
        if(e.target.id==="#fefaf3"){
            main.style.color='#121212';
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="#19455e"){
           
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="olive"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="#5e69ff"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor=e.target.id;
        }

    
    });
});