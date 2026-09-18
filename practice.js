const cart = [
    {
        name: "Keyboard",
        price: 3000,
        quantity: 2
    },
    {
        name: "Mouse",
        price: 1500,
        quantity: 1
    },
    {
        name: "Headphones",
        price: 5000,
        quantity: 1
    }
];


let total = 0;

for(let i = 0; i < cart.length; i++){
total += cart[i].price * cart[i].quantity;

}

// The Total is 12500 

const products = [
    {
        name: "iPhone 17",
        price: 249999
    },
    {
        name: "MacBook Air",
        price: 299999
    },
    {
        name: "AirPods Pro",
        price: 69999
    }
];

const productContianer = document.querySelector(".moible-specs");

products.forEach(
    (item)=>{
        productContianer.innerHTML += `
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        `
    }
)

// Displayed Products on the Front-End

function taxCalculate (price, quantity, tax){
    const subTotal = price * quantity;
    const taxAmount = subTotal * tax;
    const total = subTotal + taxAmount;
    return total;
}

let totalPrice = taxCalculate(4000, 4, 25 / 100);