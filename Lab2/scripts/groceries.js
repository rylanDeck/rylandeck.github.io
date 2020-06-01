// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    {
        name: "potatoe",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        price: 1.35
    },
    {
        name: "brocoli",
        vegetarian: true,
        glutenFree: true,
        Organic: true,
        price: 1.99
    },
    {
        name: "lettus",
        vegetarian: true,
        glutenFree: true,
        Organic: true,
        price: 1.99
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        Organic: false,
        price: 2.35
    },
    {
        name: "egg flour pasta",
        vegetarian: true,
        glutenFree: false,
        Organic: false,
        price: 2.35
    },
    {
        name: "dressing",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        price: 2.85
    },
    {
        name: "croutons",
        vegetarian: true,
        glutenFree: false,
        Organic: false,
        price: 3.40
    },
    {
        name: "premade ham sandwitch",
        vegetarian: false,
        glutenFree: false,
        Organic: false,
        price: 8.99
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        Organic: true,
        price: 10.00
    },
    {
        name: "steak",
        vegetarian: false,
        glutenFree: true,
        Organic: false,
        price: 11.99
    }    
];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
    let product_names = [];
    for (let i = 0; i < prods.length; i += 1) {
        if ((restriction == "VegetarianAndGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)) {
            product_names.push(prods[i].name);
        }
        else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
            product_names.push(prods[i].name);
        }
        else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
            product_names.push(prods[i].name);
        }
        else if (restriction == "None") {
            product_names.push(prods[i].name);
        }
        /*if (prods[i].name == product_names[product_nameslenght - 1]){
            product_names[product_nameslenght - 1] += (prods[i].price).toString();
        }*/

    }
    return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}