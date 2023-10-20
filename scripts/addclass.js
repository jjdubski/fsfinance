function showPopup() {
    // get class code and student ID from user
    const classCode = prompt("Enter Class Code:");
    const studentId = prompt("Enter Student ID:");

    // create new bubble container
    const bubbleContainer = document.createElement("div");
    bubbleContainer.classList.add("bubble_container");

    // create new bubble
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // create bubble content
    const classPic = document.createElement("img");
    classPic.src = "../images/classpic.png";
    classPic.alt = "Class Pic";
    classPic.width = "50";
    classPic.height = "50";

    const classInfo = document.createElement("div");
    classInfo.classList.add("class_info");

    const className = document.createElement("p");
    className.textContent = classCode;

    const teacherName = document.createElement("p");
    teacherName.textContent = studentId;

    // append bubble content to bubble
    classInfo.appendChild(className);
    classInfo.appendChild(teacherName);
    bubble.appendChild(classPic);
    bubble.appendChild(classInfo);

    // append bubble to bubble conatiner
    const dashboard = document.querySelector(".bubble_container");
    dashboard.appendChild(bubble);
}
