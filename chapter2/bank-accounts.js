var checkings, savings;

function Account(accountNumber) {
  this.accountNumber = accountNumber;

  this.funds = 0;

  this.deposit = function(amount) {
    if(amount === Number(amount)) {
      this.funds += amount;
    }
  };

  this.balance = function() {
    return this.funds;
  };
}

checking = new Account(123456);
checking.deposit(12.34);
checking.deposit(23.45);
checking.deposit(34.45);

console.log(`The checking account ${checking.accountNumber} has a balance of ${checking.balance()}.`);