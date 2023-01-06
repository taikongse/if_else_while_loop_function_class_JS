function simulateBankAccount(balance) {
  class BankAccount {
    constructor(balance) {
      this.balance = balance;
    }

    deposit(amount) {
      this.balance += amount;
    }

    withdraw(amount) {
      if (this.balance - amount >= 0) {
        this.balance -= amount;
        return amount;
      } else {
        console.log("Insufficient funds");
        return 0;
      }
    }
  }

  let account = new BankAccount(balance);

  for (let i = 0; i < 5; i++) {
    let amount = Math.floor(Math.random() * 500);
    console.log(`Attempting to withdraw ${amount}...`);
    let withdrawn = account.withdraw(amount);
    if (withdrawn > 0) {
      console.log(`Successfully withdrew ${withdrawn}`);
    }
  }

  console.log(`Final balance: ${account.balance}`);
}

simulateBankAccount(1000);
