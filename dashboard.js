// JavaScript code for handling sidebar expansion
function expandSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('minimized');
}

// JavaScript code for handling the welcome popup
function showWelcomePopup() {
  var popup = document.getElementById('welcomePopup');
  popup.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Lock the background
}

function dismissPopup() {
  var popup = document.getElementById('welcomePopup');
  popup.style.display = 'none';
  document.body.style.overflow = 'auto'; // Unlock the background
}

// Call the function to show the welcome popup when the page loads
window.onload = function() {
  showWelcomePopup();
};
