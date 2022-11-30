const mainElement = document.querySelector("main");

const button = document.querySelector("button");
button.addEventListener("click", function () {

    //SVUOTO l'elemento main Element, resetto
    mainElement.innerHTML = "";

    //CREO il divParent che conterra le piccole caselle, AGGIUNGO le classi, lo INSERISCO all'interno del mainElement
    const newParentDivElement = document.createElement("div");
    newParentDivElement.classList.add("m-auto", "flex-wrap", "d-flex");
    mainElement.append(newParentDivElement);

    //CICLO e creo i vari div che comporranno il divParent
    for (let i = 1; i <= 100; i++) {
        const newDivElement = document.createElement("div");
        //INSERISCO nell'innerHTML del divChild i numeri del contatore e le classi
        newDivElement.innerHTML = "<span>" + i + "</span>"
        newDivElement.classList.add("box", "d-flex", "justify-content-center", "align-items-center", "fs-3");
        newParentDivElement.append(newDivElement);

        //AGGIUNGO evento al click su un divElement
        newDivElement.addEventListener("click", function () {
            newDivElement.classList.toggle("bg-danger");
        });
    }
});
/*
function createSquare(element, classList, innerHTML) {
    const newElement = document.createElement(element);
    newElement.innerHTML = innerHTML;
    const classList = [];
    for (let i = 0; i < classList.length; i++) { 

    }
}

*/