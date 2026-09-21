const cart = [
  {
    name: "Keyboard",
    price: 3000,
    quantity: 2,
  },
  {
    name: "Mouse",
    price: 1500,
    quantity: 1,
  },
  {
    name: "Headphones",
    price: 5000,
    quantity: 1,
  },
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
  total += cart[i].price * cart[i].quantity;
}

// The Total is 12500

const products = [
  {
    name: "iPhone 17",
    price: 249999,
  },
  {
    name: "MacBook Air",
    price: 299999,
  },
  {
    name: "AirPods Pro",
    price: 69999,
  },
];

const productContianer = document.querySelector(".moible-specs");

products.forEach((item) => {
  productContianer.innerHTML += `
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        `;
});

// Displayed Products on the Front-End

function taxCalculate(price, quantity, tax) {
  const subTotal = price * quantity;
  const taxAmount = subTotal * tax;
  const total = subTotal + taxAmount;
  return total;
}

let totalPrice = taxCalculate(4000, 4, 25 / 100);

// Created a function to calculate total price

const NewCart = [
  {
    name: "Keyboard",
    price: 3000,
    quantity: 2,
  },
  {
    name: "Mouse",
    price: 1500,
    quantity: 1,
  },
];

function calcObjectPrice(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  return total;
}

// Created a function that will calculate total cart price of data which is in form of array

const user = {
  email: "talha@example.com",
  password: "123456",
};

function loginVerifier(email, password) {
  if (email === user.email && password === user.password) {
    console.log("You are Welcome Login Successfull");
  } else {
    console.log("Invalid Details");
  }
}

loginVerifier("talha@example.com", "123456");

// Created a basic login Verifier

class bankAccount {
  constructor(person, balance) {
    this.person = person;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Idiot");
      return this.balance;
    }

    return (this.balance -= amount);
  }

  totalBalance() {
    return this.balance;
  }
}

const customer = new bankAccount("Nikka", 70000);

console.log(customer);
console.log(customer.deposit(20000));
console.log(customer.withdraw(1000));
console.log(customer.totalBalance());

// Exercise for leaning Class Constructor

let rooms = [
  {
    roomNumber: 101,
    type: "Standard",
    price: 3000,
    available: true,
  },
  {
    roomNumber: 102,
    type: "Standard",
    price: 3000,
    available: true,
  },
  {
    roomNumber: 103,
    type: "Deluxe",
    price: 5000,
    available: true,
  },
  {
    roomNumber: 104,
    type: "Deluxe",
    price: 5000,
    available: false,
  },
  {
    roomNumber: 105,
    type: "Suite",
    price: 8000,
    available: true,
  },
  {
    roomNumber: 106,
    type: "Suite",
    price: 8000,
    available: true,
  },
  {
    roomNumber: 107,
    type: "Standard",
    price: 3000,
    available: false,
  },
  {
    roomNumber: 108,
    type: "Deluxe",
    price: 5000,
    available: true,
  },
  {
    roomNumber: 109,
    type: "Suite",
    price: 8000,
    available: false,
  },
  {
    roomNumber: 110,
    type: "Standard",
    price: 3000,
    available: true,
  },
];

class Room {
  constructor(roomNumber, type, price) {
    this.roomNumber = roomNumber;
    this.type = type;
    this.price = price;
    this.available = true;
  }

  book() {
    if (!this.available) {
      console.log("It is booked");
      return;
    }

    this.available = false;
    console.log(`The room no ${this.roomNumber} booked`);
  }

  cancelBooking() {
    this.available = true;
    console.log(`The room no ${this.roomNumber} is available again`);
  }
}

// const room = new Room(101, "Deluxe", 5000);
// room.book();
// room.cancelBooking();

// Try to Understand but could not build logic Problem 1

const userInfo = document.querySelector(".user-info");

function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        userInfo.innerHTML += `
            <h2>${user.name}</h2>
            <p>${user.username}</p>
            <p>${user.email}</P>
            `;
      });
    })
    .catch((error) => {
      console.log(`Koi panga ${error}`);
    });
}

getUsers();

// Fetch users form API

function searchUsers(searchText) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const filteredUsers = data.filter((user) => {
        return user.name.toLowerCase().includes(searchText.toLowerCase());
      });

      console.log(filteredUsers);
    });
}

console.log(searchUsers("Leanne"));

// Search Filter 70% understanding

class productManager {
  constructor() {
    this.products = [];
  }

  loadProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.products = data.products;

        this.displayProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  displayProducts() {
    const newUsers = document.querySelector(".new-users");

    this.products.forEach((product) => {
      newUsers.innerHTML += `
            <h2>Title: ${product.title}</h2>
            <p>Description: ${product.description}</p>
            <p>Category: ${product.category}</p>  
            <p>Price: ${product.price}</p>  
            <p>Rating: ${product.rating}</p>  
            <p>Stock: ${product.stock}</p>  
            <p>Return Policy: ${product.returnPolicy}</p>  
            
            
            `;
    });
  }
}

const danManager = new productManager();

danManager.loadProducts();

// Learned Class Constructor and Fetch Api

function getWeather() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=34.0151&longitude=71.5249&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code",
  )
  .then((response)=>{
    return response.json()
  })
  .then((weather)=>{

    
    console.log(Math.round(weather.current.temperature_2m))

  })
  .catch((error)=>{
    console.log(error)
  })
}

getWeather();

// Fetch weather from weather Api
