  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];




const collectibles = [
    { name: "ball", price: 5 },
    { name: "doll", price: 10 },
    { name: "puzzle", price: 7 }
];
 
app.get("/collectibles", (req, res) => {
    const index = Number(req.params.index);
    const item = collectibles[index];

    if (item) {
        return res.send(`The price of the ${item.name} is $${item.price}.`);
    }

    res.send("Item not found.");
});

const express = require('express');
const app = express();
const port = 3000;

app.get("/collectibles", (req, res) => {
    const index = Number(req.query.index);
    const item = collectibles[index];

    if (item) {
        res.send(`The price of the ${item.name} is $${item.price}.`);
    }

app.get("/greeting/:username", (req, res) => {
    const username = req.params.username;
    res.send(`Hello, ${username}! Welcome to our site.`);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.get("/roll/:number", (req, res) => {
    const max = Number(req.params.number);

    if (Number.isNaN(max)) {
        return res.send("Please provide a valid number.");
    }

    const roll = Math.floor(Math.random() * max) + 1;
    res.send(`You rolled a ${roll} (1-${max})`);
});

app.get('/hello', (req, res) => {
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});


app.get("/shoes", (req, res) => {
    let results = shoes;

    if (req.query["min price"]) {
        results = results.filter(shoe => shoe.price >= Number(req.query["min price"]));

    }

    if (req.query["max price"]) {
        results = results.filter(shoe => shoe.price <= Number(req.query["max price"]));
    }

    if (req.query.type) {
        results = results.filter(shoe => shoe.type === req.query.type);
    }

    res.send(results);
});


