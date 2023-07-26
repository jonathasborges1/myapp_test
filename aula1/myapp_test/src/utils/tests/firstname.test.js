const { firstName, verifyStockAvailability, calculateTotalPrice } = require("../validations")

describe('firstName', () => {
   it("should return the first name when a full name is passed", () => {
     const fullName = "João da Silva";
     expect(firstName(fullName)).toBe("João");
   })

  it("deve retornar a string original quando ela não contém espaços em branco", () => {
    const noSpaces = "JoãoSilva";
    expect(firstName(noSpaces)).toBe(noSpaces);
  });

 })

 describe('verifyStockAvailability', () => {
  it("deve retornar verdadeiro para um produto com estoque disponível", () => {
    const productType = "laptop";
    const qty = 5;
    expect(verifyStockAvailability(productType, qty)).toBe(true);
  });

  it("deve retornar verdadeiro para um produto com estoque disponível igual a 1", () => {
    const productType = "smartphone";
    const qty = 1;
    expect(verifyStockAvailability(productType, qty)).toBe(true);
  });

  it("deve retornar falso para um produto com estoque esgotado (quantidade igual a 0)", () => {
    const productType = "book";
    const qty = 0;
    expect(verifyStockAvailability(productType, qty)).toBe(false);
  });

  it("deve retornar verdadeiro para um produto com estoque disponível maior que zero", () => {
    const productType = "headphone";
    const qty = 3;
    expect(verifyStockAvailability(productType, qty)).toBe(true);
  });

  it("deve retornar verdadeiro para um produto com estoque disponível igual à quantidade informada", () => {
    const productType = "tablet";
    const qty = 15;
    expect(verifyStockAvailability(productType, qty)).toBe(true);
  });

  it("deve retornar falso para um produto não existente no estoque", () => {
    const productType = "camera";
    const qty = -1;
    expect(verifyStockAvailability(productType, qty)).toBe(false);
  });
});


describe('calculateTotalPrice', () => {
  it("deve retornar 0 para uma lista vazia de produtos", () => {
    const products = [];
    expect(calculateTotalPrice(products)).toBe(0);
  });

  it("deve calcular corretamente o preço total para uma lista com um único produto", () => {
    const products = [
      { name: "Laptop", price: 2500 },
    ];
    expect(calculateTotalPrice(products)).toBe(2500);
  });

  it("deve calcular corretamente o preço total para uma lista com vários produtos", () => {
    const products = [
      { name: "Smartphone", price: 1200 },
      { name: "Tablet", price: 800 },
      { name: "Headphone", price: 100 },
    ];
    expect(calculateTotalPrice(products)).toBe(2100);
  });

  it("deve retornar 0 para uma lista de produtos com preços inválidos", () => {
    const products = [
      { name: "Laptop", price: -1000 },
      { name: "Smartphone", price: 500 },
      { name: "Tablet", price: -800 },
    ];
    expect(calculateTotalPrice(products)).toBe(0);
  });

  it("deve retornar 0 para uma lista de produtos sem preços", () => {
    const products = [
      { name: "Laptop" },
      { name: "Smartphone", price: 500 },
      { name: "Tablet" },
    ];
    expect(calculateTotalPrice(products)).toBe(0);
  });
});



