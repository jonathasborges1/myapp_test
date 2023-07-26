/**
 * Extracts the first name from a full name string.
 *
 * @param {string} fullName - The full user name separated by blank spaces.
 * @returns {string} - The first name extracted from the full name, or the name itself if no blank space is found.
 */
function firstName(fullName) {
  // const blankSpace = fullName.lastIndexOf(' '); // [incorreto]
  const blankSpace = fullName.indexOf(' '); // [correto] 

  if (blankSpace === -1) return fullName;
  else return fullName.slice(0, blankSpace);
}



// test('Teste da função firstName', () => {
//   // Caso de teste 1: nome completo com espaço
//   expect(firstName("João da Silva")).toBe("João");

//   // Caso de teste 2: nome completo sem espaço
//   expect(firstName("Maria")).toBe("Maria");

//   // Caso de teste 3: nome completo com espaço no início
//   expect(firstName(" José Silva")).toBe("");

//   // Caso de teste 4: nome completo com espaço no final
//   expect(firstName("Ana ")).toBe("Ana");
// });

/**
 * Verifies the availability of a product in stock based on its type and desired quantity.
 *
 * @param {string} productType - The type of the product to check for availability.
 * @param {number} qty - The desired quantity of the product to check.
 * @returns {boolean} - Returns true if the desired quantity of the specified product type is available in stock,
 *                      otherwise returns false.
 */
function verifyStockAvailability(productType, qty) {
  const stock = {
    laptop: 10,
    smartphone: 20,
    headphone: 5,
    tablet: 15,
    book: 0,
  };

 if(!stock[productType]) return false;

  const availableStock = stock[productType];
  if (availableStock >= qty) {
    return true;
  } else {
    return false;
  }
  // if (availableStock === 0) return false;
  // else return true;
}

/**
 * Calculates the total price of an array of products in an e-commerce application.
 *
 * @param {Array} products - An array of product objects, each containing 'price' and 'quantity' properties.
 * @returns {number} - The total price obtained by multiplying the price of each product by its quantity
 *                    and summing up the individual product prices.
 *
 * Example of products array:
 *   [
 *     { name: 'Product 1', price: 10, quantity: 2 },
 *     { name: 'Product 2', price: 15, quantity: 2 },
 *     { name: 'Product 3', price: 20, quantity: 1 }
 *   ]
 */
function calculateTotalPrice(products) {

  if(products.length === 0 ){
    return 0;
  }

  for(i=0; i < products.length; i++){
    if(products[i].price === undefined || products[i].price < 0){
      return 0
    }
  }
  

  let total = 0;
  for (let i = 0; i < products.length; i++) {
    // total = products[i].price;
    total += products[i].price; // Acumula o preço de cada produto na variável total

  }
  return total;
}

module.exports = { firstName, verifyStockAvailability, calculateTotalPrice };
