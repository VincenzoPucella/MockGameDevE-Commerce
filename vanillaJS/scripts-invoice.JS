// scripts-invoice.js

// Wait for DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Get clear button and add click event listener
    const clearButton = document.getElementById('clear-card-info');
    clearButton.addEventListener('click', clearCardInfo);

    // Get all input elements and add blur event listener to each
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('blur', validateInput);
    });

    // Get confirm button and add click event listener
    const confirmButton = document.getElementById('confirm-button');
    confirmButton.addEventListener('click', validateForm);
});

// Clear credit card info
function clearCardInfo() {
    // Get all credit card input elements and set value to empty string
    const cardInputs = document.querySelectorAll('.credit-card-info input');
    cardInputs.forEach(input => {
        input.value = '';
    });
}

// Validate input on blur event
function validateInput(event) {
    const input = event.target;
    // Check if input is required and has no value
    if (input.required && input.value.trim() === '') {
        alert(`${input.previousElementSibling.innerText} is required.`);
        input.focus();
    }

   
    if (input.id === 'card-number') {
        // Basic validation for credit card number to check if it's numeric and has 16 digits
        const cardNumberRegex = /^\d{16}$/;
        if (!cardNumberRegex.test(input.value)) {
            alert('Please enter a valid 16-digit credit card number.');
            input.focus();
        }
    }

    if (input.id === 'card-cvc') {
        // Basic validation for CVC to check if it's numeric and has 3 digits
        const cvcRegex = /^\d{3}$/;
        if (!cvcRegex.test(input.value)) {
            alert('Please enter a valid 3-digit CVC.');
            input.focus();
        }
    }

    if (input.id === 'card-expiration') {
        // Basic validation for expiration date in MM/YY format
        const expirationRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!expirationRegex.test(input.value)) {
            alert('Please enter a valid expiration date in MM/YY format.');
            input.focus();
        }
    }
}

// Regular expressions for validation
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
const provinceRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
const countryRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
const cardNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const cardNumberRegex = /^\d{16}$/;
const cvcRegex = /^\d{3}$/;
const expirationRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

// Get form elements
const homeInput = document.getElementById('home');
const address1Input = document.getElementById('address1');
const address2Input = document.getElementById('address2');
const cityInput = document.getElementById('city');
const postalCodeInput = document.getElementById('postal-code');
const provinceInput = document.getElementById('province');
const countryInput = document.getElementById('country');
const cardNameInput = document.getElementById('card-name');
const cardNumberInput = document.getElementById('card-number');
const cvcInput = document.getElementById('card-cvc');
const expirationInput = document.getElementById('card-expiration');

// Validate form on submit
function validateForm(event) {
    event.preventDefault();

    // Validate each input element with corresponding regex
    if (!validateInput(homeInput, addressRegex)) {
        showError(homeInput, 'Please enter a valid home address.');
        return;
    }

    if (!validateInput(address1Input, addressRegex)) {
        showError(address1Input, 'Please enter a valid address line 1.');
        return;
    }

    if (!validateInput(address2Input, addressRegex)) {
        showError(address2Input, 'Please enter a valid address line 2.');
        return;
    }

    if (!validateInput(cityInput, cityRegex)) {
        showError(cityInput, 'Please enter a valid city.');
        return;
    }

    if (!validateInput(postalCodeInput, postalCodeRegex)) {
        showError(postalCodeInput, 'Please enter a valid postal code.');
        return;
    }

    if (!validateInput(provinceInput, provinceRegex)) {
        showError(provinceInput, 'Please enter a valid province.');
        return;
    }

    if (!validateInput(countryInput, countryRegex)) {
        showError(countryInput, 'Please enter a valid country.');
        return;
    }

    if (!validateInput(cardNameInput, cardNameRegex)) {
        showError(cardNameInput, 'Please enter a valid name on card.');
        return;
    }

    if (!validateInput(cardNumberInput, cardNumberRegex)) {
        showError(cardNumberInput, 'Please enter a valid credit card number.');
        return;
    }

    if (!validateInput(cvcInput, cvcRegex)) {
        showError(cvcInput, 'Please enter a valid CVC.');
        return;
    }

    if (!validateInput(expirationInput, expirationRegex)) {
        showError(expirationInput, 'Please enter a valid expiration date (MM/YY).');
        return;
    }

    alert('Form submitted successfully!');
}

// Validate input with regex
function validateInput(input, regex) {
    return regex.test(input.value);
}

// Show error message
function showError(input, message) {
    // Create error message element
    const errorMessage = document.createElement('span');
    errorMessage.className = 'error-message';
    errorMessage.innerText = message;

    // Create error icon element
    const errorIcon = document.createElement('i');
    errorIcon.className = 'fas fa-exclamation-circle error-icon';

    // Add error message and icon to parent element
    const parentElement = input.parentElement;
    parentElement.appendChild(errorMessage);
    parentElement.appendChild(errorIcon);

    // Add click event listener to error icon to focus on input
    errorIcon.addEventListener('click', function() {
        input.focus();
    });
}
