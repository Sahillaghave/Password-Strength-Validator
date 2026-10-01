/* ==========================================================================
   Password Strength Validator - JavaScript Logic
   College CIA Part-B Project | Case Study 11
   Demonstrating Password Requirement Validation using Regular Expressions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
    // ----------------------------------------------------------------------
    // DOM Elements Reference
    // ----------------------------------------------------------------------
    const passwordInput = document.getElementById('passwordInput');
    const togglePasswordBtn = document.getElementById('togglePasswordBtn');

    // Checklist Items
    const reqLength = document.getElementById('req-length');
    const reqUppercase = document.getElementById('req-uppercase');
    const reqLowercase = document.getElementById('req-lowercase');
    const reqNumber = document.getElementById('req-number');
    const reqSpecial = document.getElementById('req-special');
    const reqWhitespace = document.getElementById('req-whitespace');

    // Result Display Card Elements
    const resultCard = document.getElementById('resultCard');
    const resultHeading = document.getElementById('resultHeading');
    const resultSubtext = document.getElementById('resultSubtext');

    // Demonstration Test Case Buttons
    const btnTestStrong = document.getElementById('btnTestStrong');
    const btnTestWeak = document.getElementById('btnTestWeak');
    const tableTryButtons = document.querySelectorAll('.btn-table-try');

    // ----------------------------------------------------------------------
    // Regular Expressions Definitions
    // ----------------------------------------------------------------------
    const uppercaseRegex = /[A-Z]/;        // Matches any uppercase letter (A-Z)
    const lowercaseRegex = /[a-z]/;        // Matches any lowercase letter (a-z)
    const numberRegex = /[0-9]/;           // Matches any numeric digit (0-9)
    const specialCharRegex = /[!@#$%^&*]/; // Matches specified special characters (!@#$%^&*)
    const whitespaceRegex = /\s/;          // Matches any whitespace character (space, tab, etc.)

    /**
     * Main validation function
     * Inspects the input password against all six security requirements.
     */
    function validatePassword() {
        const password = passwordInput.value;

        // Check minimum length (at least 8 characters)
        const isLengthValid = password.length >= 8;

        // Check uppercase letter
        const hasUppercase = uppercaseRegex.test(password);

        // Check lowercase letter
        const hasLowercase = lowercaseRegex.test(password);

        // Check number
        const hasNumber = numberRegex.test(password);

        // Check special character
        const hasSpecialChar = specialCharRegex.test(password);

        // Check whitespace (satisfied when password is entered AND contains no whitespace)
        const hasNoWhitespace = password.length > 0 && !whitespaceRegex.test(password);

        // ------------------------------------------------------------------
        // Update Individual Checklist Items UI
        // ------------------------------------------------------------------
        updateRequirementStatus(reqLength, isLengthValid);
        updateRequirementStatus(reqUppercase, hasUppercase);
        updateRequirementStatus(reqLowercase, hasLowercase);
        updateRequirementStatus(reqNumber, hasNumber);
        updateRequirementStatus(reqSpecial, hasSpecialChar);
        updateRequirementStatus(reqWhitespace, hasNoWhitespace);

        // Check if all six requirements are satisfied
        const isStrongPassword = isLengthValid && 
                                 hasUppercase && 
                                 hasLowercase && 
                                 hasNumber && 
                                 hasSpecialChar && 
                                 hasNoWhitespace;

        // ------------------------------------------------------------------
        // Update Overall Result Display Card
        // ------------------------------------------------------------------
        if (password.length === 0) {
            // Initial state: before typing
            resultCard.className = 'card result-card state-initial';
            resultHeading.textContent = 'Enter a password to check';
            resultSubtext.textContent = '';
        } else if (isStrongPassword) {
            // Valid state: all requirements met
            resultCard.className = 'card result-card state-valid';
            resultHeading.textContent = '✓ Strong Password';
            resultSubtext.textContent = 'All password requirements are satisfied.';
        } else {
            // Invalid state: one or more requirements missing
            resultCard.className = 'card result-card state-invalid';
            resultHeading.textContent = 'Password does not meet all requirements';
            resultSubtext.textContent = 'Complete the remaining requirements above.';
        }
    }

    /**
     * Helper function to update the visual indicator for a single requirement
     * @param {HTMLElement} itemElement - The <li> checklist item element
     * @param {boolean} isSatisfied - True if requirement is met, false otherwise
     */
    function updateRequirementStatus(itemElement, isSatisfied) {
        const iconSpan = itemElement.querySelector('.status-icon');

        if (isSatisfied) {
            itemElement.classList.add('satisfied');
            iconSpan.textContent = '✓';
        } else {
            itemElement.classList.remove('satisfied');
            iconSpan.textContent = '○';
        }
    }

    // ----------------------------------------------------------------------
    // Event Listeners
    // ----------------------------------------------------------------------

    // Live validation on every keypress / input event
    passwordInput.addEventListener('input', validatePassword);

    // Show / Hide Password toggle
    togglePasswordBtn.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordBtn.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            togglePasswordBtn.textContent = 'Show';
        }
    });

    // Demonstration Button: Test Strong Password
    btnTestStrong.addEventListener('click', function () {
        passwordInput.value = 'Abcd@123';
        validatePassword();
        passwordInput.focus();
    });

    // Demonstration Button: Test Weak Password
    btnTestWeak.addEventListener('click', function () {
        passwordInput.value = 'abcdefg';
        validatePassword();
        passwordInput.focus();
    });

    // Demonstration Table "Try" Buttons
    tableTryButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const testPassword = this.getAttribute('data-password');
            if (testPassword) {
                passwordInput.value = testPassword;
                validatePassword();
                passwordInput.focus();
            }
        });
    });

    // Perform initial validation setup on page load
    validatePassword();
});
