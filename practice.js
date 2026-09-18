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

console.log(total)