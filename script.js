let head=document.querySelector('h2')
//constructor funct
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.active = true;
    this.name = name;
    this.type = type;
    this.balance = balance;
   
}

BankAccount.prototype.withdraw = function(amount) {
    if (this.active && amount > 0 && amount <= this.balance)
     {
        this.balance=this.balance- amount;
        console.log(`Withdraw ${amount} from ${this.name}s account. Current balance: ${this.balance}`);
       
    } 
    else {
        console.log('Low Balance!');
        console.log("")
    }
}; 

BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance=this.balance+amount;
        console.log(`Deposited ${amount} into ${this.name}s account. Current balance is: ${this.balance}`);
        
    } else {
        console.log('Please enter correct amount');
    }
};


BankAccount.prototype.checkBalance = function() {
    console.log(`${this.name}s account balance: ${this.balance}`);
}


BankAccount.prototype.isActive = function() {
    return this.active;
}


function getTotalBalance(accounts) {
    return accounts.reduce((total, account) =>
     (account.isActive() ? total + account.balance : total), 0);
}

let acc1= new BankAccount(1234, 'Aman', 'Savings Account', 10000)
let acc2=  new BankAccount(1432, 'Uday', 'Saving Account', 15000)
let acc3= new BankAccount(5456, 'Beekesh', 'Current Account', 1000)
let acc4= new BankAccount(5456,'Raghav','Demat Account',3000)

acc1.deposit(2000)
acc2.deposit(1500)
acc3.withdraw(1000)
acc4.withdraw(4000)

console.log(`${acc1.name}s account is ${acc1.isActive()}`);
console.log(`${acc2.name}s account is ${acc2.isActive()}`);
console.log(`${acc3.name}s account is ${acc3.isActive()}`);
console.log(`${acc4.name}s account is ${acc3.isActive()}`);
console.log("")

acc1.checkBalance()
acc2.checkBalance()
acc3.checkBalance()
acc4.checkBalance()
console.log("")


let accounts = [acc1, acc2, acc3,acc4];
const sum = getTotalBalance(accounts);
console.log(`THE SUM OF ALL ACCOUNTS IS: ${sum}`);
