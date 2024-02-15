// Перепишіть стрілкову функцію в звичайну 
const multiplyValues = (a, b, c) => a * b * c;
function multiplyValues(a, b, c){
return (`${a}*${b}*${c} = ${a*b*c}`);
}


// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

function hiUser(user){
   console.log(`Вітаю ${user}`)
 }
function wellcomUser( ){

}

// Завдання 1: Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

let newNumberArr = [];
let numberArr = [25, 50, 75, 100, 125, 150, 175, 200];

for(let i=0; i<numberArr.length; i++){
   newNumberArr.push(numberArr[i]*2);
}
console.log(newNumberArr);


// Завдання 2: Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

let сhocolate = [];
let сhocolateColor = ['dark', 'white', 'milk'];
function Arreys (arrey){
  arrey.push('pink');
}
Arreys(сhocolateColor);
console.log(сhocolateColor);
pop

// Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

let firstpop = [];
let secondpop = [1,2,3,4,5,6,7,8,9];
secondpop.pop();
console.log(secondpop);



// Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

let firstNumber = [1,2,3,4,5,6,7];
function Arreys (arrey){
    arrey.pop();
}
Arreys(firstNumber);
console.log(firstNumber)

// Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

let Moto = [];

Moto.unshift('Honda');
Moto.unshift('BMW');
Moto.unshift('Yamaha');

console.log(Moto);


// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let Cars = ['BMW', 'AUDI', 'MERSEDES'];
function newCar(Cars){
     Cars.unshift('Volkswagen');
 }
 newCar(Cars);
 console.log(Cars);



// Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

let Html = ['TD', 'TR', 'h1', 'br'];
Html.shift();
console.log(CHtml);



// Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

let Css = ['background', 'color','fonts' , 'outline'];
function newCar(Cars){
    Css.shift();
    Css.shift();
}
newCar(Css);
console.log(Css);

// Додаткова робота

let keepRemoveArr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];
keepRemoveArr.filter("Remove");
console.log(keepRemoveArr);




