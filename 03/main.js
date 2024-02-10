/*дописати реалізацію  калькулятора розглянутого на уроці за допомогою if і else if при спробі поділити на 0 виводити alert з попередженням. Повині бути команди (додавання, множення, ділення, віднімання)*/

let userFirstNumber = Number(prompt('Type number'));
let userSecondNumber = Number(prompt('Type number'));
let userOperation = prompt('Select operation: +-/*');

function minus(userFirstNumber, userSecondNumber){
    console.log(`Minus ${userFirstNumber} - ${userSecondNumber} = ${userFirstNumber-userSecondNumber}`);
}
function summ(userFirstNumber, userSecondNumber){
    console.log(`Summ ${userFirstNumber} + ${userSecondNumber} = ${userFirstNumber+userSecondNumber}`);
}
function multiply(userFirstNumber, userSecondNumber){
    console.log(`Multiply ${userFirstNumber} * ${userSecondNumber} = ${userFirstNumber*userSecondNumber}`);
}
function divide(userFirstNumber, userSecondNumber){
    if(userSecondNumber == 0){
        alert('Division by 0 is not possible');
    }
    else{
        console.log(`Divide ${userFirstNumber} / ${userSecondNumber} = ${userFirstNumber/userSecondNumber}`);
    }
}

switch (userOperation) {
    case '-':
        minus(userFirstNumber, userSecondNumber);
        break;
    case '+':
        summ(userFirstNumber, userSecondNumber);
        break;
    case '*':
        multiply(userFirstNumber, userSecondNumber);
        break;
    case '/':
        divide(userFirstNumber, userSecondNumber);
        break;
    default:
        console.log('No information')
        break;
}

/* за допомогою циклу вивести в консоль всі парні значення числа 20*/
for(let i=1;i<=20;i++){
    if(i % 2 == 0)
    console.log(`Even numbers ${i}`);
}

/*зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...)*/
for(let i=10;i>=0;i--){
    console.log(`Value ${i}`);
}

/*реалізуйте таблицю множення за допомогою циклу
 для конкретного числа (наприклад, для числа 5) за допомогою циклу for:*/
 function multiplication_table(number) {
    for(let i=1;i<=10;i++){
        console.log(`${number} * ${i} = ${i*number}`);
    }
}

multiplication_table(9)

/*створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі*/


let planet = prompt('Назва планети:');

switch (planet) {
    case 'Меркурій':
        console.log('Ця планета в нашій сонячній системі')
        break;
    case 'Венера':
        console.log('Ця планета в нашій сонячній системі')
        break;
    case 'Земля':
        console.log('Ця планета в нашій сонячній системі')
        break;
    case 'Марс':
        console.log('Ця планета в нашій сонячній системі')
        break;
    case 'Юпітер':
        console.log('Ця планета в нашій сонячній системі')
        break;
    case 'Сатурн':
        console.log('Ця планета в нашій сонячній системі')
        break;
        
    default:
        console.log('Ця планета не в нашій системі')
        break;
}