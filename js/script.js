
const button = document.querySelector("button");
button.addEventListener("click" , function(){
    for(let i=1; i<=100; i++){
        const divElement = document.querySelector("div");
        divElement.classList.add("flex-wrap" , "d-flex");
        const newDivElement = document.createElement("div");
        newDivElement.innerHTML = "<span>" + i + "</span>"
        newDivElement.classList.add("box", "d-flex" , "justify-content-center", "align-items-center" , "fs-3");
        divElement.append(newDivElement);
    }
});




//myGetElementById("output", "fw-bold" , "ciao");

//FUNCTION
function myGetElementById(elementId, elementClass, elementInner){
    const elementName = document.getElementById(elementId);
    elementName.classList.add(elementClass);
    elementName.innerHTML = elementInner;

}