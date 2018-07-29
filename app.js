// Listen for the submit button
document
  .getElementById("temp-form")
  .addEventListener("submit", convertResult());

function convertResult() {
  //Variables
  const degreeC = document.getElementById("degrees-c");
  const degreeF = document.getElementById("degrees-f");

  // convert the temperture
  if (degreeC != null) {
    degrees-F.value = degreeC * (9 / 5) + 32;
  } else if (degreeF != null) {
    degrees-C.value = (degreeF - 32) * (5 / 9);
  }
}
