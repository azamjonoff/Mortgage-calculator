document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const evro = parseFloat(document.getElementById("evro").value);
  const years = parseInt(document.getElementById("years").value);
  const discount = parseFloat(document.getElementById("discount").value / 100);

  const radio = document.querySelector('input[name="radio"]:checked').value;

  let monthlyDiscount = discount / 12;

  let totalPayments = years * 12;

  let monthlyPayment, totalRepayment;

  if (radio === "repayment") {
    monthlyPayment =
      (evro *
        (monthlyDiscount * Math.pow(1 + monthlyDiscount, totalPayments))) /
      (Math.pow(1 + monthlyDiscount, totalPayments) - 1);
    totalRepayment = monthlyPayment * totalPayments;
  } else if (radio === "interestonly") {
    monthlyPayment = evro * monthlyDiscount;
    totalRepayment = monthlyPayment * totalPayments + evro;
  }

  document.getElementById(
    "monthly-repayment"
  ).textContent = `£${monthlyPayment.toFixed(2)}`;

  document.getElementById(
    "total-term"
  ).textContent = `£${totalRepayment.toFixed(2)}`;

  document.getElementById("wrap-result-real").classList.remove("hidden");

  document.getElementById("result-img").classList.add("hidden");
  document.getElementById("wrap-result").classList.remove("wrap-result");
  document.getElementById("wrap-result").classList.add("wrap-result-then");
  document.getElementById("result-title-id").classList.remove("result-title");
  document.getElementById("result-title-id").classList.add("result-title-then");
  document.getElementById("result-title-id").textContent = "Your results";
  document
    .getElementById("result-description-id")
    .classList.remove("result-description");
  document
    .getElementById("result-description-id")
    .classList.add("result-description-then");
  document.getElementById("result-description-id").textContent =
    "Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.";
});

document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("evro").value = "";
  document.getElementById("years").value = "";
  document.getElementById("discount").value = "";
  document.querySelector('input[name="radio"]:checked').value = "";
});
