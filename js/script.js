"use strict";

// Assigning variables in dom

const $ = (id) => document.getElementById(id);

let billValue = $("bill");

const fivePercent = $("five");

const tenPercent = $("ten");

const fifteenPercent = $("fifteen");

const twentyFivePercent = $("twenty-five");

const fiftyPercent = $("fifty");

const customTip = $("customs");

const numberOfPeople = $("num-ppl");

const tipAmount = $("tip-amt");

const totalAmount = $("total-amt");

const billError = $("bill-error");
const peopleError = $("people-error");

const reset = document.querySelector(".btn-reset");

//to check validity
function validity() {
  // Clear previous messages
  billError.textContent = "";
  peopleError.textContent = "";

  if (billValue.value === "" || Number(billValue.value) === 0) {
    billError.textContent = "Can't be 0";
    billError.style.display = "block";
    totalAmount.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
    return false; // invalid
  } else if (
    numberOfPeople.value === "" ||
    Number(numberOfPeople.value) === 0
  ) {
    peopleError.textContent = "Can't be 0";
    peopleError.style.display = "block";
    totalAmount.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
    return false; // invalid
  }
  return true;
}

function tipCalc() {}

fivePercent.addEventListener("click", function () {
  const bill = Number(billValue.value);
  const people = Number(numberOfPeople.value);
  if (!validity()) return;

  // calculate tip
  let tipFive = Number((5 / 100) * bill);
  let fiveTotal = tipFive + Number(bill); // ask question here

  //tip per person

  const totaltips = tipFive / people;

  tipAmount.textContent = totaltips.toFixed(2);

  // total per person
  const totalPerson = bill / people + tipFive;
  totalAmount.textContent = totalPerson.toFixed(2);
});

tenPercent.addEventListener("click", function () {
  if (!validity()) return;

  const bill = billValue.value;

  // calculate tip
  let tipTen = Number((10 / 100) * bill);
  let fifteenTotal = tipTen + Number(bill);

  //tip per person
  const people = Number(numberOfPeople.value);

  const totaltips = tipTen / people;

  tipAmount.textContent = totaltips.toFixed(2);

  // total per person
  const totalPerson = bill / people + tipTen;
  totalAmount.textContent = totalPerson.toFixed(2);
});

fifteenPercent.addEventListener("click", function () {
  if (!validity()) return;
  const bill = billValue.value;

  // calculate tip
  let tipFifteen = Number((15 / 100) * bill);
  let fifteenTotal = tipFifteen + Number(bill);

  //tip per person
  const people = Number(numberOfPeople.value);

  const totaltips = tipFifteen / people;

  tipAmount.textContent = totaltips.toFixed(2);

  // total per person
  const totalPerson = bill / people + tipFifteen;
  totalAmount.textContent = totalPerson.toFixed(2);
});

twentyFivePercent.addEventListener("click", function () {
  if (!validity()) return;
  const bill = billValue.value;

  // calculate tip
  let tipTwentyFive = Number((25 / 100) * bill);
  let twentyFiveTotal = tipTwentyFive + Number(bill);

  //tip per person
  const people = Number(numberOfPeople.value);

  const totaltips = tipTwentyFive / people;

  tipAmount.textContent = totaltips.toFixed(2);

  // total per person
  const totalPerson = bill / people + tipTwentyFive;
  totalAmount.textContent = totalPerson.toFixed(2);
});

fiftyPercent.addEventListener("click", function () {
  if (!validity()) return;
  const bill = billValue.value;

  // calculate tip
  let tipFifty = Number((50 / 100) * bill);
  let fiftytotal = tipFifty + Number(bill);

  //tip per person
  const people = Number(numberOfPeople.value);

  const totaltips = tipFifty / people;

  tipAmount.textContent = totaltips.toFixed(2);

  // total per person
  const totalPerson = bill / people + tipFifty;
  totalAmount.textContent = totalPerson.toFixed(2);
});

customTip.addEventListener("keydown", function (event) {
  if (!validity()) return;
  const bill = billValue.value;

  // enable enter key to function
  if (event.key === "Enter") {
    const custom = Number(customTip.value); // this takes in the value that will be input in the text input. just like billValue.value

    // calculate tip
    let tipCustom = Number((custom / 100) * bill);

    let customTotal = tipCustom + Number(bill);

    //tip per person
    const people = Number(numberOfPeople.value);

    const totaltips = tipCustom / people;

    tipAmount.textContent = totaltips.toFixed(2);

    // total per person
    const totalPerson = bill / people + tipCustom;
    totalAmount.textContent = totalPerson.toFixed(2);
  }
});

// reset
reset.addEventListener("click", function () {
  billValue.value = "";
  numberOfPeople.value = "";
  peopleError.textContent = "";
  billError.textContent = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  customTip.value = "";
});
