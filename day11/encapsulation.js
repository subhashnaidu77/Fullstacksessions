class Bank{
constructor(balance){
    this._bal = balance;
}
getBalance(){
    return this._bal;
}
deposit(amount){
    this._bal+=amount;
}
}
let acc = new Bank(1000);
acc.deposit(400);
console.log(acc.getBalance());