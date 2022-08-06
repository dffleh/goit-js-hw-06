const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {
    const valueLength = event.currentTarget.value.length;
    const dataLength = Number(validationInputRef.dataset.length);

    if (valueLength === dataLength) {
        validationInputRef.setAttribute('class', 'valid');
    } else {
        validationInputRef.setAttribute('class', 'invalid');
    }
};