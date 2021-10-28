function select(selection, item){
    if (item !== null){
        item.classList.remove("selected");
    }
    selection.classList.add("selected");
}

function food(selection) {
    const item = document.querySelector(".food .selected");
    select(selection, item);
}

function drink(selection) {
    const item = document.querySelector(".drink .selected");
    select(selection, item);
}

function dessert(selection) {
    const item = document.querySelector(".dessert .selected");
    select(selection, item);
}

