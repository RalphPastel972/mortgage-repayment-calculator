let inputMortgageAmount = document.getElementById("input_mortgage_amount");
let inputMortgageTerm = document.getElementById("input_mortgage_term");
let inputInterestRate = document.getElementById("input_interest_rate");
let inputRadioRepayment = document.getElementById("input_radio_repayment");
let inputRadioInterestOnly = document.getElementById(
  "input_radio_interest_only"
);

const clearAllFieldsButton = document.getElementById("clear_all_fields_button");
clearAllFieldsButton.addEventListener("click", () => {
  inputMortgageAmount.value = "";
  inputMortgageTerm.value = "";
  inputInterestRate.value = "";
  inputRadioRepayment.checked = false;
  inputRadioInterestOnly.checked = false;
});

const calculateRepaymentButton = document.getElementById("submit_button");
calculateRepaymentButton.addEventListener("click", () => {
  checkIfEachFieldIsFilled();
  calculationEngine();
});

function checkIfEachFieldIsFilled() {
  if (inputMortgageAmount.value == "") {
    const warningMissingMortgageAmountPart1 =
      document.getElementById("warning_field_1");
    const warningMissingMortgageAmountPart2 = document.getElementById(
      "complex_input_field_1_Warning_ON"
    );

    warningMissingMortgageAmountPart1.classList.add(
      "requirement_warning_message_ON"
    );
    warningMissingMortgageAmountPart2.classList.add(
      "complex_input_field_Warning_ON"
    );
  } else {
    const warningMissingMortgageAmountPart1 =
      document.getElementById("warning_field_1");
    const warningMissingMortgageAmountPart2 = document.getElementById(
      "complex_input_field_1_Warning_ON"
    );

    warningMissingMortgageAmountPart1.classList.remove(
      "requirement_warning_message_ON"
    );
    warningMissingMortgageAmountPart2.classList.remove(
      "complex_input_field_Warning_ON"
    );
  }

  if (inputMortgageTerm.value == "") {
    const warningMissingMortgageAmountPart1 =
      document.getElementById("warning_field_2");
    const warningMissingMortgageAmountPart2 = document.getElementById(
      "complex_input_field_2_Warning_ON"
    );

    warningMissingMortgageAmountPart1.classList.add(
      "requirement_warning_message_ON"
    );
    warningMissingMortgageAmountPart2.classList.add(
      "complex_input_field_Warning_ON"
    );
  } else {
    const warningMissingMortgageAmountPart1 =
      document.getElementById("warning_field_2");
    const warningMissingMortgageAmountPart2 = document.getElementById(
      "complex_input_field_2_Warning_ON"
    );

    warningMissingMortgageAmountPart1.classList.remove(
      "requirement_warning_message_ON"
    );
    warningMissingMortgageAmountPart2.classList.remove(
      "complex_input_field_Warning_ON"
    );
  }

  if (inputInterestRate.value == "") {
    const warningMissingMortgageAmountPart1 =
      document.getElementById("warning_field_3");
    const warningMissingMortgageAmountPart2 = document.getElementById(
      "complex_input_field_3_Warning_ON"
    );

    warningMissingMortgageAmountPart1.classList.add(
      "requirement_warning_message_ON"
    );
    warningMissingMortgageAmountPart2.classList.add(
      "complex_input_field_Warning_ON"
    );
  } else {
    const warningMissingMortgageAmountPart1 =
      document.getElementById("warning_field_3");
    const warningMissingMortgageAmountPart2 = document.getElementById(
      "complex_input_field_3_Warning_ON"
    );

    warningMissingMortgageAmountPart1.classList.remove(
      "requirement_warning_message_ON"
    );
    warningMissingMortgageAmountPart2.classList.remove(
      "complex_input_field_Warning_ON"
    );
  }

  if (
    inputRadioRepayment.checked == false &&
    inputRadioInterestOnly.checked == false
  ) {
    const warningMissingMortgageAmountPart1 =
      document.getElementById("warning_field_4");
    warningMissingMortgageAmountPart1.classList.add(
      "requirement_warning_message_ON"
    );
  } else {
    const warningMissingMortgageAmountPart1 =
      document.getElementById("warning_field_4");
    warningMissingMortgageAmountPart1.classList.remove(
      "requirement_warning_message_ON"
    );
  }
}

function calculationEngine() {
    const loanAmount = inputMortgageAmount.value;
    const numberOfPayments = inputMortgageTerm.value * 12;
    const monthlyInterestRate = (inputInterestRate.value / 100) / 12;
    let finalResults = {};
    
    let monthlyMortgagePayment = (loanAmount * monthlyInterestRate) / (1 - (1 / Math.pow((1 + monthlyInterestRate), numberOfPayments) ))

    let totalAmountToRepay = monthlyMortgagePayment * numberOfPayments;

    let monthlyInterestPayment = monthlyMortgagePayment - (loanAmount / numberOfPayments);

    let costOfLoan = totalAmountToRepay - loanAmount;

    // Let's put the set of results in an object for convenience.
    // Let's also make sure we save only values rounded to 2 digits
    finalResults.monthlyMortgagePayment = `£${Number.parseFloat(monthlyMortgagePayment).toFixed(2)}`;
    finalResults.totalAmountToRepay = `£${Number.parseFloat(totalAmountToRepay).toFixed(2)}`;
    finalResults.monthlyInterestPayment = `£${Number.parseFloat(monthlyInterestPayment).toFixed(2)}`;
    finalResults.costOfLoan = `£${Number.parseFloat(costOfLoan).toFixed(2)}`;
    console.log(finalResults);
    return finalResults;

}



