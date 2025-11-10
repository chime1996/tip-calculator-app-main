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

const reset = document.querySelector(".btn-reset");

//to check validity
function validity() {
  if (billValue.value === "" || Number(billValue.value === 0)) {
    billValue.setCustomValidity("bill can't be 0");
    billValue.reportValidity();
    totalAmount.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
    return;
  } else if (
    numberOfPeople.value === "" ||
    Number(numberOfPeople.value === 0)
  ) {
    numberOfPeople.setCustomValidity("people can't be 0");
    numberOfPeople.reportValidity();
    totalAmount.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
    return;
  }
}

function tipCalc() {}

fivePercent.addEventListener("click", function () {
  const bill = billValue.value;

  // calculate tip
  let tipFive = Number((5 / 100) * bill);
  let fiveTotal = tipFive + Number(bill); // ask question here

  /*
  


  3. How to make sure there is no empty input eg, if number is empty, it will display enter number of people.


  */

  //tip per person
  validity();
  const people = Number(numberOfPeople.value);

  const totaltips = tipFive / people;

  tipAmount.textContent = totaltips.toFixed(2);

  // total per person
  const totalPerson = bill / people + tipFive;
  totalAmount.textContent = totalPerson.toFixed(2);
});

tenPercent.addEventListener("click", function () {
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
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  customTip.value = "";
});
