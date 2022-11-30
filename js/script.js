
const button = document.querySelector("button");
button.addEventListener("click" , function(){
    
    //NASCONDO il bottone dopo il click
    //button.classList.add("d-none");
    
    const mainElement = document.querySelector("main");
    //SVUOTO l'elemento main Element, resetto
    mainElement.innerHTML="";
    //CREO il divParent che conterra le piccole caselle
    const newParentDivElement = document.createElement("div");
    newParentDivElement.classList.add("m-auto");
    mainElement.append(newParentDivElement);

    //CICLO e creo i vari div che comporranno il divParent
    for(let i=1; i<=100; i++){
        newParentDivElement.classList.add("flex-wrap" , "d-flex");
        const newDivElement = document.createElement("div");

        //AGGIUNGO evento al click su un divElement
        newDivElement.addEventListener("click", function(){
            newDivElement.classList.toggle("bg-danger");
        });

        //INSERISCO nell'innerHTML del divChild i numeri del contatore e le classi
        newDivElement.innerHTML = "<span>" + i + "</span>"
        newDivElement.classList.add("box", "d-flex" , "justify-content-center", "align-items-center" , "fs-3");
        newParentDivElement.append(newDivElement);
    }
});




//myGetElementById("output", "fw-bold" , "ciao");


function myGetElementById(elementId, elementClass, elementInner){
    const elementName = document.getElementById(elementId);
    elementName.classList.add(elementClass);
    elementName.innerHTML = elementInner;

}
