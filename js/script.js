'use strict';

let sumString, sumSymbol, secNumber;
calc();
function calc(oneString, oneNumber, oneSymbol, oneBoolean) {
    oneString = prompt('Напишите строку');
    if(oneString === null || oneString === '') {
        return  console.log('Жаль что вы не захотели ввести строку');
    }
    oneNumber = prompt('Напишите число больше нуля');
    if(oneNumber === null || oneNumber === '' || isNaN(+oneNumber) || oneNumber <= 0) {
        return  console.log('Жаль что вы не захотели ввести число');
    }
    oneSymbol = prompt('Напишите символ');
    if(oneSymbol === null || oneSymbol === '' || oneSymbol.length !== 1) {
        return  console.log('Жаль что вы не захотели ввести символ');
    }
    oneBoolean = prompt('Напишите left или right');
    if(oneBoolean !== 'left' && oneBoolean !== 'right' ) {
        return  console.log('Жаль что вы не захотели ввести left или right');
    }
    if(oneNumber < oneString.length) {
        for(let i=0; i < oneNumber; i++) {
            sumString+=oneString[i];
        }
        return console.log(sumString);
    } else if(oneBoolean === 'left') {
        secNumber = oneNumber - oneString.length;
        for(let i=0; i < secNumber; i++) {
            sumSymbol+=oneSymbol;
        }
        return console.log(`${sumSymbol}${oneString}`);
    }
    else if(oneBoolean === 'right') {
        secNumber = oneNumber - oneString.length;
        for(let i=0; i < secNumber; i++) {
            sumSymbol+=oneSymbol;
        }
        return console.log(`${oneString}${sumSymbol}`);
    }else {
        return console.log(`Что-то пошло не так`);
    }
}