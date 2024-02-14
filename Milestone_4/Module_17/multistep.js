/**
 * MULTI_LEVEL_CONDITION
 */

const price = 5000;

if(price >= 5000){
    // 10% discount
    const discount = price * 10 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount);
}
else if(price >= 1000){
    const discount = price * 20 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount);
}
else{
    console.log(price);
}