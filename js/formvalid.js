const form = document.querySelector('.modal-contact-form');
const inputsField = document.querySelectorAll('.input__control');

for (let input of inputsField) {
    input.addEventListener('blur', (event) => {
        validateForm(event)
    })
}

const formBtns = document.querySelectorAll('.form-button');
formBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        let isValid = true;
        inputsField.forEach(input => {
            if (!input.value.trim()) {
                setError(input, 'This field is required');
                isValid = false;
            }
        });
        if (isValid) {
            form.submit();
        }
    });
});

const setError = (element, message) => {
    const errorSection = element.parentElement.querySelector('.error');
    errorSection.innerText = message;
    errorSection.classList.add('invalid');
}

const setValid = (element) => {
    const errorSection = element.parentElement.querySelector('.error');
    errorSection.innerText = '';
    errorSection.classList.remove('invalid');
}

const nameValidation = (name) => {
    const regex = /^[A-Za-z][A-Za-z0-9_]{5,29}$/;

    if (name.value === '') {
        setError(name, 'Enter your name');
    } else {
        setValid(name);
    }
}

const emailValidation = (email) => {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    if (email.value === '') {
        setError(email, 'Enter your email')
    } else if (!regex.test(email.value)) {
        setError(email, 'Please note the correct email. Thank you!')
    } else {
        setValid(email)
    }
}

const telephoneValidation = (telephone) => {
    const regex = /^\+?[0-9]{10,14}$/;

    if (telephone.value === '') {
        setError(telephone, 'Enter your telephone number');
    } else if (!regex.test(telephone.value)) {
        setError(telephone, 'Please enter a valid phone number');
    } else {
        setValid(telephone);
    }
}

const validateForm = (element) => {
    switch (element.target.id) {
        case 'name':
            nameValidation(element.target)
            break;
        case 'email':
            emailValidation(element.target)
            break;
        case 'tel':
            telephoneValidation(element.target)
            break;
        default:
            console.error('Invalid input element')
            break;
    }
}

