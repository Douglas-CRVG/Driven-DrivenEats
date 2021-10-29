let foodSelected = 0;
let drinkSelected = 0;
let dessertSelected = 0;

function cancel(){
    const checkout = document.querySelector(".checkout-order");
    checkout.classList.add("hidden");
    const order = document.querySelector(".order");
    order.innerHTML = ``;
}

function checkOrder(){
    const name = prompt("Nos diga seu nome");
    const endereco = prompt ("Agora seu endereço");

    const confirmFood = document.querySelector(".food .selected h4").innerHTML;
    const confirmDrink = document.querySelector(".drink .selected h4").innerHTML;
    const confirmDessert = document.querySelector(".dessert .selected h4").innerHTML;
    const food = document.querySelector(".food .selected strong").innerHTML;
    const drink = document.querySelector(".drink .selected strong").innerHTML;
    const dessert = document.querySelector(".dessert .selected strong").innerHTML;
    const priceFood = Number(food.replace(",","."));
    const priceDrink = Number(drink.replace(",","."));
    const priceDessert = Number(dessert.replace(",","."));
    let total = priceFood + priceDrink + priceDessert;
    total = total.toFixed(2);
    
    const order = document.querySelector(".order");
    order.innerHTML = `
    <p><strong>Confirme seu pedido</strong></p>
    <div>
        <div>
            <p>${confirmFood}</p>
            <p>${food}</p>
        </div>
        <div>
            <p>${confirmDrink}</p>
            <p>${drink}</p>
        </div>
        <div>
            <p>${confirmDessert}</p>
            <p>${dessert}</p>
        </div>
        <div>
            <p><strong>TOTAL</strong></p>
            <p><strong>${total.replace(".",",")}</strong></p>
        </div>

        <div>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Endereço:</strong> ${endereco}</p>
        </div>
    </div>
    <div>
        <button>
            <p><span>Tudo certo, pode pedir!</span></p>
        </button>
        <button onclick="cancel();">
            <p><strong>Cancelar</strong></p>
        </button>
    </div>
`;
    const checkout = document.querySelector(".checkout-order");
    checkout.classList.remove("hidden");
}

function activeButton(){
    const button = document.querySelector("footer");
    button.innerHTML=`<button class="fechar-pedido" onclick="checkOrder();">
        <h6>Fechar Pedido</h6>
    </button>`;
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