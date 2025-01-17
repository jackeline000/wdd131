let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    console.log(current);
    if (current == 'dark'){
        document.body.className = 'dark';
        logo.setAttribute('src', 'mission/byui-logo_white.png');
    } else {
        document.body.classList.remove('dark');
        logo.setAttribute('src', 'mission/logo.webp');
    }
}
