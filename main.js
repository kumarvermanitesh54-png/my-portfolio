
const sidebar = document.querySelector('.sidebar');
const menuicon = document.querySelector('.menu-icon');
const nav = document.getElementById('nav');
const name = document.getElementById('name');



menuicon.addEventListener('click', () => {
    nav.classList.toggle('active');

    /// <---- toggle the display of nav using loop method <-- this method is not recommended as it is not efficient and can cause performance issues -->


    // if (nav.style.display === 'flex') { 
    //     nav.style.display = 'none';
    // } else {
    //     nav.style.display = 'flex';
    // }
});

const words = ["NITESH VERMA","WEB DEVELOPER"];
let wordsIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordsIndex];

    if (isDeleting) {
        name.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        name.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordsIndex = (wordsIndex + 1) % words.length; // Move to next word
        setTimeout(typeEffect, 500); // Pause before typing next word
    } else {
        setTimeout(typeEffect, 150); // Continue typing at a steady pace
    }
}

typeEffect();