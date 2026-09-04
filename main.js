let balance = 0;
let passward = "1234";
let historyTrans = [];
let isOnePassword = false;
let span = document.querySelector("#Balance");

const oneTimePass = () => {
  if (isOnePassword == false) {
    let Passward = prompt("Enter passward");

    if (Passward == passward) {
      isOnePassword = true;
      alert("Correct password");
    } else {
      alert("Invalid passward");
    }
  }
};
const showBalance = () => {
  oneTimePass();
  if (isOnePassword) {
    span.innerHTML = `
    <span id="Balance" type="number">${balance} EGP</span>`;
  }
};

const Deposite = () => {
  oneTimePass();
  if (isOnePassword) {
    let deposite = document.querySelector("#Deposite");
    let amount = +deposite.value;
    deposite.value = "";
    if (amount > 0) {
      let history = {
        BalanceBefore: `${balance} EGP`,
        Transaction: `Deposited : ${amount} EGP`,
        BalanceAfter: `${balance + amount} EGP`,
      };
      balance += amount;
      span.innerHTML = `
    <span id="Balance" type="number">${balance} EGP</span>`;
      historyTrans.push(history);
    } else alert("Invalid amount");
  }
};

const Withdraw = () => {
  oneTimePass();
  if (isOnePassword) {
    let withdraw = document.querySelector("#Withdraw");
    let amount = +withdraw.value;
    withdraw.value = "";
    if (amount <= 0) alert("Invalid amount");
    else if (balance < amount) alert("Balance not enough");
    else {
      let history = {
        BalanceBefore: `${balance} EGP`,
        Transaction: `Withdrawn : ${amount} EGP`,
        BalanceAfter: `${balance - amount} EGP`,
      };
      balance -= amount;
      span.innerHTML = `
    <span id="Balance" type="number">${balance} EGP</span>`;
      historyTrans.push(history);
    }
  }
};

const historyTransaction = () => {
  oneTimePass();
  if (isOnePassword) {
    let table = document.querySelector("#Transaction");
    table.innerHTML = "";
    historyTrans.forEach((el, index) => {
      table.innerHTML += `<tr class="table-dark">
        <td>${index + 1}</td> 
        <td>${el.BalanceBefore}</td> 
        <td>${el.Transaction}</td> 
        <td>${el.BalanceAfter}</td>
        </tr>`;
    });
  }
};
