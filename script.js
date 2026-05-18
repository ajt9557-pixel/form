const btn = document.getElementById('btn');
const ask = document.getElementById('ask');
const result = document.getElementById('result'); 
const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const message = document.getElementById('message');

btn.onclick = function() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const genderValue = gender.value.trim();
    const messageValue = message.value.trim();
    const askValue = ask.value.trim();

    if (nameValue && emailValue && ageValue && genderValue && messageValue && askValue) {
         localStorage.setItem('formData', `name: ${nameValue}, email: ${emailValue}, age: ${ageValue}, gender: ${genderValue}, message: ${messageValue}, are you a student?: ${askValue}`);
         window.location.href = 'next.html';
    } else {
        result.textContent = `please fill up the form first`;
    }
};
