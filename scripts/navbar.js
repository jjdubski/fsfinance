function navbar() {
    const nav = document.querySelector('nav');
    const Lines = document.querySelectorAll('.line');
    const navUl = nav.querySelector('nav ul');
    const ulElements = nav.querySelectorAll('nav ul li');
    const liElements = nav.querySelectorAll('nav ul li a');
    document.querySelector('.nav_lines').addEventListener('click', () => {
        Lines[0].style.transform = 'rotate(45deg) translate(5px, 10px)';
        Lines[0].style.transition = 'all 0.5s ease';
        Lines[2].style.transform = 'rotate(-45deg) translate(5px, -10px)';
        Lines[2].style.transition = 'all 0.5s ease';
        Lines[1].style.opacity = '0';

        nav.style.width = '100%';
        nav.style.height = '100%';
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.alignItems = 'center';
        nav.style.justifyContent = 'start';
        
        liElements.forEach((a) => {
            a.style.display = 'flex';
            a.style.width = 'fit-content';
            a.style.height = 'fit-content';
        });
        ulElements.forEach((li) => {
            li.style.display = 'flex';
            li.style.width = 'fit-content';
            li.style.height = 'fit-content';
        });
        navUl.forEach((ul) => {
            ul.style.display = 'flex';
            ul.style.width = '65%';
            ul.style.height = 'fit-content';
        });
    });

}