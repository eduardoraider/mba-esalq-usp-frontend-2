let button = document.querySelector('button');
button.addEventListener('click', addOne);

function addOne() {
    let h3Element = document.querySelector('h3');
    let currentValue = parseInt(h3Element.textContent);
    let newValue = currentValue + 1;
    h3Element.textContent = newValue.toString();

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    if (newValue > currentValue) {
        h3Element.style.color = `rgb(${r}, ${g}, ${b})`;
    }
}
