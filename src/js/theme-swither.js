const bodyRef = document.querySelector('body');
// const switchRef = document.querySelector('#theme-switch-control');
const switchRef = document.querySelector('input.js-switch-input');

const savedTheme = localStorage.getItem('theme');
const savedChecked = localStorage.getItem('checked');


if(savedTheme){
    bodyRef.classList.add(savedTheme);
    switchRef.checked = JSON.parse(savedChecked);
    //  console.log(savedChecked);
}

switchRef.addEventListener('change', event => {
    if (event.target.checked){
        switchToDarkTheme();
    }else{
        switchToWhiteTheme();
    }
});

function switchToWhiteTheme(){
    bodyRef.classList.add('light-theme');
    bodyRef.classList.remove('dark-theme');
    localStorage.setItem('theme','light-theme');
    // localStorage.removeItem('checked');
    // localStorage.setItem('checked', 'falce');
    localStorage.clear();


}

function switchToDarkTheme(){
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
    localStorage.setItem('theme','dark-theme');
    localStorage.setItem('checked', 'true');

}