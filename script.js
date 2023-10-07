// Дз 

let products = [
    {
        name: "milk",
        type: "milk",
        price: 16000
    },
    {
        name: "cheese",
        type: "milk",
        price: 25999
    },
    {
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {
        name: "govyadina",
        type: "meat",
        price: 90000
    },
    {
        name: "baranina",
        type: "meat",
        price: 94000
    },
    {
        name: "kuryatina",
        type: "meat",
        price: 45000
    },
    {
        name: "vodka",
        type: "alcohol",
        price: 20000
    },
    {
        name: "tekila",
        type: "alcohol",
        price: 50000
    },
    {
        name: "pivo",
        type: "alcohol",
        price: 17000
    },
    {
        name: "champain",
        type: "alcohol",
        price: 100000
    },
]


// 1. посчитать общую сумму всех товаров
let total = products.reduce((a, b) => {
    return a + b.price
}, 0)

console.log(total);


// 2. посчитать общую сумму всех товаров конкретной категории
let totalByType = {};

products.forEach(({ type, price }) => {
    if (!totalByType[type]) {
        totalByType[type] = 0
    }
    totalByType[type] += price
});

console.log(totalByType);


// 3. посчитать сколько товаров конкретной категории
let productsType = products.reduce((task, { type }) => {
    task[type] = (task[type] || 0) + 1;
    return task;
}, {});

console.log(productsType);


// 4. найти средний прайс всех товаров
let averagePrice = products.reduce((a, b) => {
    return a + b.price
}, 0)

console.log(averagePrice / products.length);