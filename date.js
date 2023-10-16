// Get the date element from the DOM
const dateElement = document.getElementById('date');

// Function to update the date and time
function updateDateTime() {
    // Get the current date and time
    const now = new Date();
    
    // Format the date and time as a string
    const dateTimeString = now.toLocaleString();
    
    // Update the date element with the new date and time
    dateElement.textContent = dateTimeString;
}

// Call the updateDateTime function initially to set the date and time
updateDateTime();

// Call the updateDateTime function every second to update the date and time in real-time
setInterval(updateDateTime, 1000);
