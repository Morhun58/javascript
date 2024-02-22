
/*створіть список ul з 5 елементами li всередині.
За допомогою querySelector виберіть:
- перший елемент списку
- останній елемент списку
- 3 елемент списку
За допомогою querySelectorAll
- всі елементи li в списку
- конвертуйте вибрані елменти в массив.*/

window.onload = function(){
    let firstLi = document.querySelectorAll('li:nth-child(1)');
    console.log(firstLi);
    let lastLi = document.querySelectorAll('li:last-child');
    console.log(lastLi);
    let thirdElLi = document.querySelectorAll('li:nth-child(3)');
    console.log(thirdElLi);
    
    
    /*За допомогою querySelectorAll
- всі елементи li в списку
- конвертуйте вибрані елменти в массив*/
    let allSpecialLi = document.querySelectorAll('ul li');
    console.log(allSpecialLi);
    let liElement = Array.from(allSpecialLi);
    console.log(liElement);
}

/*++++++++++++++++++++++++++++++++++++++++++++++++
Створіть на сторінці елемент який вибирається ціми селекторами
*/
let listItems = document.querySelectorAll('ul.nav > li');
    console.log(listItems)
let listItem = document.querySelectorAll('li:nth-child(2)');
    console.log(listItem)
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*Перевірка Високосного Року
Реалізуйте функцію, яка перевіряє, чи є рік, заданий датою, високосним.*/

function isHighYear(year){
    const febday = new Date(year, 1, 28);
    const marchDay = new Date(year, 2, 1);
    const res = (marchDay-febday)/(24*60*60*1000)
    const differenceValue = res === 2;
    return differenceValue;
}
    console.log(`2021${isHighYear(2021)}`)
    console.log(`2020${isHighYear(2020)}`)
    console.log(`2019${isHighYear(2019)}`)
    console.log(`2018${isHighYear(2018)}`)
    console.log(`2017${isHighYear(2017)}`)
    console.log(`2016${isHighYear(2016)}`)



    /*Додавання Днів до Дати
    Створіть функцію, яка додає певну кількість днів до заданої дати і повертає нову дату.*/

function pushday() {
    let dayInfo = new Date(2001,1,1,12,30,20);
    let newdate = dayInfo = new Date(2001,1,4,12,30,20);
    console.log(newdate)
}
pushday()


/*Отримання Назви Місяця
Напишіть функцію, яка приймає об'єкт Date і повертає назву місяця англійською мовою.*/
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let nowMethodDate = new Date();
    console.log(months[nowMethodDate.getMonth()])



/*Заміна Першої Букви Кожного Слова на Велику
Розробіть функцію, яка перетворює першу букву кожного слова у рядку на велику, залишаючи решту букв маленькими.*/


let Value = 'Full Stack Developer'
let transform = Value.toUpperCase();
let Split = transform.split();
console.log(Split)