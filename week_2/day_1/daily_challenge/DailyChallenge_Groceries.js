let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = ()=>{
    groceries['fruits'].forEach(fruit => {
        console.log(fruit); 
    });
}

const cloneGroceries = ()=>{
    let user = client;
    client = 'Betty';
    console.log(user); //John bc it's copied by value 
    
    let shopping = groceries; //copied by reference, both shopping and groceries now point to the same object in memory
    groceries.totalPrice = "35$";
    groceries.other['paid'] = false;
    console.log(shopping); //same as groceries bc object is copied by reference
    
}
cloneGroceries();