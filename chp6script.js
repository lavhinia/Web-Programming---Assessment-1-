// Function to calculate total petrol cost
function calculateCost() {
  // Get the cost per liter input value and convert it to a float
  let costPerLiter = parseFloat(document.getElementById("costPerLiter").value);

  // Get the liters purchased input value and convert it to a float
  let liters = parseFloat(document.getElementById("liters").value);

  // Calculate the total cost
  let total = costPerLiter * liters;

  // Display the total cost, formatted to 2 decimal places
  document.getElementById("totalCost").innerText = "Total Cost: $" + total.toFixed(2);
}
