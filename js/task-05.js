const input = document.querySelector("#name-input");
const spanAnonymous = document.querySelector("#name-output");

input.addEventListener('input', inputChange)

function inputChange(event) {
    console.log(event.currentTarget.value);
    if (input.value === "") {
        return spanAnonymous.textContent = "Anonymous"
    } else spanAnonymous.textContent = event.currentTarget.value
}


// const refs = {
//     input: document.querySelector('#name-input'),
//     output: document.querySelector('#name-output'),
// };

// refs.input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     const isFull = event.currentTarget.value;
//     refs.output.textContet = isFull ? isFull : "Anonymous";
// }
// const refs = {
//     input: document.querySelector('#name-input'),
//     output: document.querySelector('#name-output'),
// };

// refs.input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     const isFull = event.currentTarget.value;
//     refs.output.textContet = isFull ? isFull : "Anonymous";
// }