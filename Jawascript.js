const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("list")
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

let isEnglish = true;
function toggleLanguage() {
    isEnglish = !isEnglish;

    var toggleButton = document.querySelector('.toggle-button');
    toggleButton.innerText = isEnglish ? 'Bahasa' : 'English';

    var elementsToTranslate = document.querySelectorAll('.translate');

    elementsToTranslate.forEach(function(element) {
        if (isEnglish) {
            element.innerText = element.getAttribute('data-english');
        } else {
            element.innerText = element.getAttribute('data-bahasa');
        }
    });

    var nameElementsToTranslate = document.querySelectorAll('.name-translate');

    nameElementsToTranslate.forEach(function(nameElement) {
        if (isEnglish) {
            nameElement.textContent = nameElement.getAttribute('data-english-name');
        } else {
            nameElement.textContent = nameElement.getAttribute('data-bahasa-name');
        }
    });

    var contentElementsToTranslate = document.querySelectorAll('.content-translate');

    contentElementsToTranslate.forEach(function(contentElement) {
        if (isEnglish) {
            contentElement.textContent = contentElement.getAttribute('data-english-content');
        } else {
            contentElement.textContent = contentElement.getAttribute('data-bahasa-content');
        }
    });
}

const toggleLButton = document.querySelector('.toggle-button');
toggleLButton.addEventListener('click', () => {
    toggleLButton.style.backgroundColor = isEnglish ? 'grey' : 'black';
    toggleLButton.style.color = 'white';
    toggleLanguage();
    isEnglish = !isEnglish;
});

const nav = document.querySelector('nav');
const toggleButton = document.querySelector('.toggle-button');
let isColorChanging = false;
toggleButton.addEventListener('click', () => {
    if (!isColorChanging) {
        isColorChanging = true;

        setTimeout(() => {
            if (nav.style.backgroundColor === 'black') {
                nav.style.backgroundColor = 'grey';
            } else {
                nav.style.backgroundColor = 'black';
            }

            isColorChanging = false;
        });
    }
});
