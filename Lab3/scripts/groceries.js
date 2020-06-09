// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    {
        name: "potatoe",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        price: 1.35,
        foodCat: "veg"
    },
    {
        name: "salt and pepper",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        price: 1.85,
        foodCat: "dry"
    },
    {
        name: "brocoli",
        vegetarian: true,
        glutenFree: true,
        Organic: true,
        price: 1.99,
        foodCat: "veg"
    },
    {
        name: "lettus",
        vegetarian: true,
        glutenFree: true,
        Organic: true,
        price: 1.99,
        foodCat: "veg"
    },
    {
        name: "bread",
        vegetarian: true,
        glutenFree: false,
        Organic: false,
        price: 2.35,
        foodCat: "baked"
    },
    {
        name: "egg flour pasta",
        vegetarian: true,
        glutenFree: false,
        Organic: false,
        price: 2.35,
        foodCat: "dry"
    },
    {
        name: "salad dressing",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        price: 2.85,
        foodCat: "sauce"
    },
    {
        name: "tofu",
        vegetarian: true,
        glutenFree: true,
        Organic: true,
        price: 3.00,
        foodCat: "protein"
    },
    {
        name: "bagels",
        vegetarian: true,
        glutenFree: false,
        Organic: false,
        price: 3.40,
        foodCat: "baked"
    },
    {
        name: "gluten free bagels",
        vegetarian: true,
        glutenFree: true,
        Organic: false,
        price: 4.40,
        foodCat: "baked"
    },
    {
        name: "greek salad",
        vegetarian: true,
        glutenFree: true,
        Organic: true,
        price: 5.50,
        foodCat: "readyFood"
    },
    {
        name: "premade ham sandwitch",
        vegetarian: false,
        glutenFree: false,
        Organic: false,
        price: 8.99,
        foodCat: "readyFood"
    },
    {
        name: "salmon",
        vegetarian: false,
        glutenFree: true,
        Organic: true,
        price: 10.00,
        foodCat: "protein"
    },
    {
        name: "steak",
        vegetarian: false,
        glutenFree: true,
        Organic: false,
        price: 11.99,
        foodCat: "protein"
    }    
];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
    var RestrictedList = [];
    var TmpObj = new Object();
    for (let i = 0; i < prods.length; i += 1) {
        if ((restriction == "VegetarianAndGlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)) {
            RestrictedList.push({
                name: prods[i].name,
                price: prods[i].price,
                foodCat: prods[i].foodCat
            });
        }
        else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
            RestrictedList.push({
                name: prods[i].name,
                price: prods[i].price,
                foodCat: prods[i].foodCat
            });
        }
        else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
            RestrictedList.push({
                name: prods[i].name,
                price: prods[i].price,
                foodCat: prods[i].foodCat
            });
        }
        else if (restriction == "None") {
            RestrictedList.push({
                name: prods[i].name,
                price: prods[i].price,
                foodCat: prods[i].foodCat
            });
        }
    }
    return RestrictedList;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice = +((totalPrice + products[i].price).toFixed(2));
        }
    }
    return totalPrice;
}