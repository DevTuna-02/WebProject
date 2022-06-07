var area=document.getElementsByClassName("contb")[0];
var slide=document.getElementsByClassName("carousel")[0];
area.addEventListener("click",select);

var menu=document.getElementsByClassName("MMenu")[0];

function display(){
    if(menu.classList.contains("on")){
        menu.classList.remove("on");
        menu.classList.add("off");
        return;
    }
    if(menu.classList.contains("off")){
        menu.classList.remove("off");
        menu.classList.add("on");
        return;
    }
}

function select(e){
    let froma=Array.from(area.children);
    froma.forEach(i=>i.classList.remove("Active"));
    e.target.classList.add("Active");
    let second=-300/3;
    let third=-600/3;
    if(e.target.classList.contains("First")){
        slide.style.transform="translateX(-0%)";
    }
    if(e.target.classList.contains("Second")){
        slide.style.transform="translateX("+second+"%)";
    }
    if(e.target.classList.contains("Third")){
        slide.style.transform="translateX("+third+"%)";
    }
}