const age = 50;
const price = 300;

if(age < 12){
    console.log('you can eat all foods for free!');
}
else if(age >= 60){
    // discount 50%
    const discount = price * 50 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount);
}
else if(age >= 50){
    //25% discount
    const discount = price * 25 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount);
}
else if(age >= 40){
    //10% discount
    const discount = price * 10 /100;
    const payAmmount = price - discount;
    console.log(payAmmount);
}

else{
    console.log('sorry! dear, you can not eat here for free or cannot take any discount!');
}