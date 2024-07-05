let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');


function validateName(inputElement) {
    var name = inputElement.value;
    var checkIcon = document.getElementById('name-check');
    var errorMessage = document.getElementById('name-error');

    if (name.trim().length > 0){
        checkIcon.style.display = 'inline-block';
        errorMessage.style.display = 'none';
        return true
    } else {
        checkIcon.style.display = 'none';
        errorMessage.style.display = 'block';
        return false
    }
}

function validatePhone(inputElement) {
    var phone = inputElement.value;
    var checkIcon = document.getElementById('phone-check');
    var errorMessage = document.getElementById('phone-error');

    if (phone.trim().length > 9){
        checkIcon.style.display = 'inline-block';
        errorMessage.style.display = 'none';
        return true
    } else {
        checkIcon.style.display = 'none';
        errorMessage.style.display = 'block';
        return false
    }
}

function validateEmail(inputElement) {
    var email = inputElement.value;
    var checkIcon = document.getElementById('email-check');
    var errorMessage = document.getElementById('email-error');

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /*
    The active selection is a regular expression (regex) pattern used to validate email addresses in JavaScript. Let's break down this pattern to understand how it works:

1. **Start and End Anchors (`^` and `$`)**: The `^` symbol at the beginning and the `$` symbol at the end are anchors. The `^` asserts the start of a line, and the `$` asserts the end of a line. These ensure that the entire string must match the pattern from start to finish, not just a part of it.

2. **Negated Character Classes (`[^\s@]`)**: The pattern uses negated character classes `[^\s@]` multiple times. The `[]` denotes a character class, and the `^` inside it negates the class, meaning it matches any character that is not listed. Here, `\s` represents any whitespace character, and `@` is the literal "at" symbol. So, `[^\s@]` matches any character that is not a whitespace or an "at" symbol.

3. **Quantifiers (`+`)**: The `+` quantifier means "one or more" of the preceding element. In this pattern, `[^\s@]+` means one or more characters that are not whitespace or "at" symbols. This part of the pattern is used to match the local part of the email before the "at" symbol, the domain part after the "at" symbol, and the top-level domain (TLD) after the period.

4. **Literal Characters (`@` and [`.`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FRyomen%20Sukuna%2FDesktop%2Fjs%2Ffun-js-projects%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\Ryomen Sukuna\Desktop\js\fun-js-projects"))**: The pattern includes literal characters `@` and [`.`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FRyomen%20Sukuna%2FDesktop%2Fjs%2Ffun-js-projects%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\Ryomen Sukuna\Desktop\js\fun-js-projects"). The `@` symbol is used to match the "at" symbol in email addresses, separating the local part from the domain part. The [`\.`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FRyomen%20Sukuna%2FDesktop%2Fjs%2Ffun-js-projects%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\Ryomen Sukuna\Desktop\js\fun-js-projects") matches a literal period, used here to separate the domain and the top-level domain (TLD) in the email address.

In summary, this regex pattern checks for a string that starts with one or more characters that are not whitespace or "at" symbols, followed by an "at" symbol, then again one or more characters that are not whitespace or "at" symbols, followed by a period, and finally, one or more characters that are not whitespace or "at" symbols. This pattern effectively validates the general structure of an email address, ensuring it has a local part, an "at" symbol, a domain part, a period, and a TLD, without any whitespace characters in between.
    */

    if (emailPattern.test(email.trim())){
        checkIcon.style.display = 'inline-block';
        errorMessage.style.display = 'none';
        return true
    } else {
        checkIcon.style.display = 'none';
        errorMessage.style.display = 'block';
    return false
    }
}

function validateMessage(inputElement) {
    var message = inputElement.value;
    var checkIcon = document.getElementById('message-check');
    var errorMessage = document.getElementById('message-error');

    if(message.trim().length > 0) {
        checkIcon.style.display = 'inline-block';
        errorMessage.style.display = 'none';
        return true
    } else {
        checkIcon.style.display = 'none';
        errorMessage.style.display = 'inline-block';
        return false
    }
}

function validateForm(inputElement) {
    var errorMessage = document.getElementById('submit-error')

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
    })

    if(validateName && validateEmail && validatePhone && validateMessage) {
        document.getElementById('contact-form').submit();
    } else {
        errorMessage.style.display = 'block';
    }
}