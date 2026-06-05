// Get the dropdown element
const dropdown = document.getElementById('classSelect');

// Add an event listener to the dropdown
dropdown.addEventListener("change", function() {
    // Get the selected value
    const selectedValue = dropdown.value;
    // Get the element where you want to display the selected value
    if(selectedValue=='econ'){
        displayEcon();
    }else if(selectedValue=='finance'){
        displayFinance();
    }
    // Update the display element with the selected value
    console.log(selectedValue);
});

function displayEcon(){
    const displayElement = document.getElementById('text');
    displayElement.textContent = "Econ 101 Page";
}

function displayFinance(){
    const displayElement = document.getElementById('text');
    displayElement.textContent = "Finance 101 Page";
}