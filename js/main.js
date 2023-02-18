/* let a;
let b = 10;


a = (b < 5) ? 5 : 3;
console.log(a) */ 
/*
let a = prompt('Выбери одно число от 1 до 5');

if(a == 1) {
    console.log('Ваш тип личности 1');
} else if (a == 2) {
    console.log('Ваш тип личности 2');
}
else if (a == 3) {
    console.log('Ваш тип личности 3');
}
else if (a == 4) {
    console.log('Ваш тип личности 4');
}
else if (a == 5) {
    console.log('Ваш тип личности 5');
}
else{
    console.log('Ошибка');
} */

switch (a) {
    case "1": 
        console.log('Ваш тип личности 1');
        break;
    
    case "2": 
        console.log('Ваш тип личности 2');
        break;
        
    case "3": 
        console.log('Ваш тип личности 3');
        break;
    
    case "4": 
        console.log('Ваш тип личности 4');
        break;
        
    case "5": 
        console.log('Ваш тип личности 5');
        break;

    default:
        console.log('Ошибка')
}