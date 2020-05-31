let editor = document.getElementById('editor');
let button = document.querySelector('.button-clear');

window.onload = () => {
    editor.value = localStorage.getItem('value');
};

editor.oninput = () => {
    let valueText = editor.value;
    localStorage.setItem('value', valueText);
}

button.addEventListener('click', () => {
    localStorage.removeItem('value');
})

