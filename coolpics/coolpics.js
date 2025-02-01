// Task 1: Toggle Menu on Small Screens
const menuButton = document.getElementById('menu-button');
const navMenu = document.querySelector('nav ul');

menuButton.addEventListener('click', function() {
    navMenu.classList.toggle('hide');
});

// Task 2: Handle Screen Resize
function handleResize() {
    if (window.innerWidth > 1000) {
        navMenu.classList.remove('hide'); 
    } else {
        navMenu.classList.add('hide'); 
    }
}

window.addEventListener('resize', handleResize);
handleResize(); 

// Task 3: Image Viewer Modal
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        const imgSrc = event.target.src.replace('-sm', '-full'); 
        const imgAlt = event.target.alt;

        const viewerHTML = `
            <div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${imgSrc}" alt="${imgAlt}">
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', viewerHTML);


        document.querySelector('.close-viewer').addEventListener('click', function() {
            document.querySelector('.viewer').remove();
        });
    }
});
