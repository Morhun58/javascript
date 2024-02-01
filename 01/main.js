// First Task
let userNickname='Alexander';
let userScore=32;

// Second Task
let Price = Number(prompt('Ціна покупки'));
let Quantity = Number(prompt('кількість продуктів'));

let totalValue = Price * Quantity;
let percentValue = totalValue/100;
let discount = percentValue*5;
console.log('discount:= ', discount);
let newtotalPrice = totalValue- discount;
console.log('newtotalPrice: ', newtotalPrice);




