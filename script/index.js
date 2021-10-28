let foodSelected = 0;
let drinkSelected = 0;
let dessertSelected = 0;

function activeButton(){
    const button = document.querySelector("footer");
    button.innerHTML='<button class="fechar-pedido"><h6>Fechar Pedido</h6></button>';
}

function select(selection, item){
    if (item !== null){
        item.classList.remove("selected");
    }
    selection.classList.add("selected");

    const contador = foodSelected + drinkSelected + dessertSelected;

    if(contador === 3){
        activeButton();
    }
}

function food(selection) {
    foodSelected = 1;
    const item = document.querySelector(".food .selected");
    select(selection, item);
}

function drink(selection) {
    drinkSelected = 1;
    const item = document.querySelector(".drink .selected");
    select(selection, item);
}

function dessert(selection) {
    const item = document.querySelector(".dessert .selected");
    dessertSelected = 1;
    select(selection, item);
}

