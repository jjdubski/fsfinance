function checkAnswer() {
    const responseDivs = document.querySelectorAll('.response');
    let clickedCorrect = false;
    let clickedIncorrect = false;
    
    responseDivs.forEach(div => {
        div.addEventListener('click', () => {
            if (div.id === "correct") {
                clickedCorrect = true;
                console.log('Correct answer!');
                const element = document.getElementById('correct');
                element.style.backgroundColor = 'green';
                element.style.color = 'var(--light-gray)';
                element.style.opacity = '0.7';
                const img = div.querySelector('img');
                img.style.visibility = 'visible';
                img.src = '../images/checkmark.png';
            } else {
                clickedIncorrect = true;
                div.style.backgroundColor = 'red';
                div.style.color = 'var(--light-gray)';
                div.style.opacity = '0.7';
                const img = div.querySelector('img');
                img.style.visibility = 'visible';
                img.src = '../images/x.png';
                console.log('Incorrect answer.');
            }
        });
    });
}