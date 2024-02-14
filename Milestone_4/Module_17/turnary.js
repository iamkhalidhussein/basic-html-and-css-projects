/**
 * Turnary ---> three parts
 * 
 *      ?     : 
 *      condition ? do something when true : do something when false
 */

const age = 19;
// if(age >= 18){
//     console.log('you are eligible for voting!');
// }
// else{
//     console.log('you are not able to vote!');
// }

// simple turnary 
// age >= 18 ? console.log('vote dio') : console.log('ghumai thako')

let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 1;
}
//console.log(price);

price = isLeader === true ? 0 : price + 100;


//OPTIONAL: semi-advanced ternary

if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 1000;
}

// feel free to ignore this part
// price = isLeader ==== true ? price > 1000 ? price / 2 : 0 : price + 1000;
price = isLeader === true ?
            price > 1000 ?
                price / 2 : 0
                : price + 1000;