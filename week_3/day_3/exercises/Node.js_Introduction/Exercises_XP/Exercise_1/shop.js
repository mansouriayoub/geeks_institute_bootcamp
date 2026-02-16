const products = require('./products.js')

/**
 * Create a function that takes a product name as a parameter and searches for the corresponding product object.

    Call this function with different product names and print the details of the products.

    Run shop.js and verify that the correct product details are displayed.
 */

function searchProduct(param) {
    const paramLow = param.toLowerCase()

    let product = products.find(item => item.name.toLowerCase() === paramLow);

    if (product) {
        console.log('product found');
        console.log(product);
        
        
    } else {
        console.log('not found');
    }

}
searchProduct('notebook'); //product found
// { name: 'Notebook', price: 3.49, category: 'Stationery' }

searchProduct('backpack') /**product found
{ name: 'Backpack', price: 39.95, category: 'Accessories' } */
 
searchProduct('laptop'); // not found