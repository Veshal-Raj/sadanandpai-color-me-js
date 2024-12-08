const input = document.querySelector('#color-me-input');
const colorMeBtn = document.querySelector('#color-me-btn');
const numbersDiv = document.querySelector('.numbers')

colorMeBtn.addEventListener('click', activateNumber);

function activateNumber() {
    const inputVal = input.value;
    if (!inputVal) {
        alert('Please Enter a Number');
        return;
    }
    if (inputVal < 1 || inputVal > 9) {
        alert('Please enter a number between 1 to 9');
        return;
    }
    const activeElement = document.querySelector('.num.active');
    if (activeElement) {
        activeElement.classList.remove('active');
    }
    const allElements = document.querySelectorAll('.num');
    allElements[inputVal - 1].classList.add('active')
}