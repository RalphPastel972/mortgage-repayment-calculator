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
  triggerWarningsInCaseOfEmptyFields();
  calculationEngine();
});

function triggerWarningsInCaseOfEmptyFields() {
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

function checkIfAllFieldsAreFilled() {
  if (
    (inputMortgageAmount.value != "" &&
      inputMortgageTerm.value != "" &&
      inputInterestRate.value != "" &&
      inputRadioRepayment.checked == true) ||
    inputRadioInterestOnly.checked == true
  ) {
    return true;
  } else {
    return false;
  }
}

function calculationEngine() {
  const loanAmount = inputMortgageAmount.value;
  const numberOfPayments = inputMortgageTerm.value * 12;
  const monthlyInterestRate = inputInterestRate.value / 100 / 12;
  let finalResults = {};

  let monthlyMortgagePayment =
    (loanAmount * monthlyInterestRate) /
    (1 - 1 / Math.pow(1 + monthlyInterestRate, numberOfPayments));
  let totalAmountToRepay = monthlyMortgagePayment * numberOfPayments;
  let monthlyInterestPayment =
    monthlyMortgagePayment - loanAmount / numberOfPayments;
  let costOfLoan = totalAmountToRepay - loanAmount;

  finalResults.monthlyMortgagePayment = monthlyMortgagePayment;
  finalResults.totalAmountToRepay = totalAmountToRepay;
  finalResults.monthlyInterestPayment = monthlyInterestPayment;
  finalResults.costOfLoan = costOfLoan;
  console.log(finalResults);
  formatingResults(finalResults);
  return finalResults;
}

function formatingResults(resultsInObject) {
  let finalResults = {};

  // Rounding the results to 2 decimal digits + forcing the result into numbers instead of strings
  finalResults.monthlyMortgagePayment = Number(
    Number.parseFloat(resultsInObject.monthlyMortgagePayment).toFixed(2)
  );
  finalResults.totalAmountToRepay = Number(
    Number.parseFloat(resultsInObject.totalAmountToRepay).toFixed(2)
  );
  finalResults.monthlyInterestPayment = Number(
    Number.parseFloat(resultsInObject.monthlyInterestPayment).toFixed(2)
  );
  finalResults.costOfLoan = Number(
    Number.parseFloat(resultsInObject.costOfLoan).toFixed(2)
  );
  console.log(finalResults);

  // Formating the values according to the user's locale (language and region) + adding "£" at the beginning.
  finalResults.monthlyMortgagePayment = `£${finalResults.monthlyMortgagePayment.toLocaleString()}`;
  finalResults.totalAmountToRepay = `£${finalResults.totalAmountToRepay.toLocaleString()}`;
  finalResults.monthlyInterestPayment = `£${finalResults.monthlyInterestPayment.toLocaleString()}`;
  finalResults.costOfLoan = `£${finalResults.costOfLoan.toLocaleString()}`;
  console.log(finalResults);
  displayResultsInApp(finalResults);
  return finalResults;
}

function displayResultsInApp(resultsInObject) {
  if (checkIfAllFieldsAreFilled() == true) {
    let monthlyMortgagePayment = document.getElementById("final_result_1");
    let totalAmountToRepay = document.getElementById("final_result_2");

    if (inputRadioRepayment.checked === true) {
      monthlyMortgagePayment.innerText = resultsInObject.monthlyMortgagePayment;
      totalAmountToRepay.innerText = resultsInObject.totalAmountToRepay;
    } else {
      monthlyMortgagePayment.innerText = resultsInObject.monthlyInterestPayment;
      totalAmountToRepay.innerText = resultsInObject.costOfLoan;
    }

    const preResultPannel = document.getElementById("empty_results_area");
    const displayOfResults = document.getElementById("display_of_results");

    preResultPannel.classList.remove("pannel_is_visible");
    displayOfResults.classList.remove("pannel_is_hidden");

    preResultPannel.classList.add("pannel_is_hidden");
    displayOfResults.classList.add("pannel_is_visible");
  }
}
