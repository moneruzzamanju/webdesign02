x = 1;
function fewd(){
    if(x == 1){
    document.querySelector(".frontinner").classList.remove("hide");
    document.querySelector(".frontinner").classList.add("show");
    document.querySelector(".backinner").classList.remove("show");
    document.querySelector(".backinner").classList.add("hide");
    x = 0;
    }else{
    document.querySelector(".frontinner").classList.remove("show");
    document.querySelector(".frontinner").classList.add("hide");
    document.querySelector(".backinner").classList.remove("show");
    document.querySelector(".backinner").classList.add("hide");
    x = 1;    
    }
}   
 y = 1;
function bewd(){
    if(y == 1){
    document.querySelector(".backinner").classList.remove("hide");
    document.querySelector(".backinner").classList.add("show");
    document.querySelector(".frontinner").classList.remove("show");
    document.querySelector(".frontinner").classList.add("hide");
    y = 0;    
    }else{
    document.querySelector(".backinner").classList.remove("show");
    document.querySelector(".backinner").classList.add("hide");
    document.querySelector(".frontinner").classList.remove("show");
    document.querySelector(".frontinner").classList.add("hide");    
    y = 1;
    }
}
