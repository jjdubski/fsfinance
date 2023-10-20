function sendEmail() {
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

Email.send({
        Host : "smtp.elasticemail.com",
        Username: "fsfinancecontact@gmail.com", 
        Password: "DCC4D2B080817E28AAAD84B1FE13260DF2CD",
        To: 'fsfinancecontact@gmail.com', 
        From: "fsfinancecontact@gmail.com", 
        Subject: "New message from " + name + " at " + email, 
        Body: message,
}).then(
        message => alert("Email sent successfully!")
);}