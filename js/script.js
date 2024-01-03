const inputText = document.querySelector('#text');
const createBtn = document.querySelector('.create-qr-code');
let qrImg = document.querySelector('#qr-img');

createBtn.addEventListener('click', () => {
    if (inputText.value !== '') {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`;
        inputText.value = '';
    } else {
        inputText.classList.add('error');
        setTimeout(() => {
            inputText.classList.remove('error');
        }, 1500)
    }
})
