# 🔐 Password Strength Validator

### College CIA Part-B Project — Case Study 11

A simple and interactive **Password Strength Validator** developed using **HTML, CSS, and JavaScript**. The project demonstrates how **Regular Expressions (Regex)** can be used to validate password requirements and provide real-time feedback to users.

---

## 📌 Project Overview

Passwords are an important part of protecting user accounts and digital resources. Weak passwords can make accounts vulnerable to unauthorized access.

This project provides a simple web-based password validation system that checks whether a password satisfies multiple security requirements.

The validator provides **real-time feedback** while the user enters a password and clearly indicates which requirements are satisfied.

---

## 🎯 Objectives

* To understand password validation using JavaScript.
* To demonstrate the use of **Regular Expressions (Regex)**.
* To implement real-time form validation.
* To provide visual feedback for each password requirement.
* To determine whether a password satisfies all defined security requirements.
* To understand basic DOM manipulation and JavaScript event handling.

---

## ✅ Password Requirements

The password is considered strong only when all six requirements are satisfied:

| Requirement          | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| 🔢 Minimum Length    | Password must contain at least 8 characters                     |
| 🔠 Uppercase         | Must contain at least one uppercase letter (`A-Z`)              |
| 🔡 Lowercase         | Must contain at least one lowercase letter (`a-z`)              |
| 🔢 Number            | Must contain at least one digit (`0-9`)                         |
| 🔣 Special Character | Must contain at least one special character (`! @ # $ % ^ & *`) |
| 🚫 No Whitespace     | Password must not contain spaces or other whitespace            |

---

## 🛠️ Technologies Used

* **HTML5** — Structure of the webpage
* **CSS3** — Styling and user interface
* **JavaScript** — Password validation and DOM manipulation
* **Regular Expressions (Regex)** — Pattern-based password checking

---

## 🔍 Regular Expressions Used

### Uppercase Letter

```javascript
/[A-Z]/
```

Checks whether the password contains at least one uppercase letter.

### Lowercase Letter

```javascript
/[a-z]/
```

Checks whether the password contains at least one lowercase letter.

### Number

```javascript
/[0-9]/
```

Checks whether the password contains at least one numeric digit.

### Special Character

```javascript
/[!@#$%^&*]/
```

Checks whether the password contains at least one specified special character.

### Whitespace

```javascript
/\s/
```

Checks whether the password contains whitespace such as spaces or tabs.

---

## ⚙️ How It Works

The application follows these basic steps:

```text
User enters password
        ↓
JavaScript receives the input
        ↓
Password length is checked
        ↓
Regular Expressions check:
 ├── Uppercase
 ├── Lowercase
 ├── Number
 ├── Special Character
 └── Whitespace
        ↓
All requirements are evaluated
        ↓
Checklist is updated
        ↓
Overall password strength is displayed
```

---

## ✨ Features

* ✅ Real-time password validation
* ✅ Six individual password requirements
* ✅ Regular Expression based validation
* ✅ Visual checkmarks for satisfied requirements
* ✅ Strong/Invalid password result display
* ✅ Show/Hide password functionality
* ✅ Test Strong Password button
* ✅ Test Weak Password button
* ✅ Sample password "Try" buttons
* ✅ Simple and user-friendly interface

---

## 🧪 Example Test Cases

### Strong Password

```text
Abcd@123
```

Expected result:

```text
✓ Strong Password
All password requirements are satisfied.
```

### Weak Password

```text
abcdefg
```

Expected result:

```text
Password does not meet all requirements
```

---

## 📂 Project Structure

```text
Password-Strength-Validator/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots/
    └── password-validator.png
```

---

## 🚀 How to Run the Project

### Method 1 — Open Directly

1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html`.
4. The application will open in your web browser.

### Method 2 — Using VS Code

1. Open the project folder in Visual Studio Code.
2. Open `index.html`.
3. Use **Live Server** if installed.
4. Open the displayed local URL in your browser.

---

## 💻 GitHub Setup

Clone the repository using:

```bash
git clone https://github.com/YOUR-USERNAME/Password-Strength-Validator.git
```

Move into the project directory:

```bash
cd Password-Strength-Validator
```

Then open the project in your preferred code editor.

---

## 📸 Screenshots

```markdown
Added in screenshots folder
```

---

## 📚 Concepts Demonstrated

This project demonstrates the following programming concepts:

* Regular Expressions
* JavaScript Functions
* Variables and Constants
* Conditional Statements
* Logical Operators
* DOM Manipulation
* Event Listeners
* `querySelector()` / `querySelectorAll()`
* `getElementById()`
* `classList`
* `textContent`
* String properties
* Form/input validation

---

## 🔮 Future Scope

The project can be enhanced in the future by adding:

* Password strength meter
* Password entropy calculation
* Common-password detection
* Password breach checking
* Password generator
* Improved accessibility
* Mobile-responsive enhancements
* Additional password security policies

---

## 🎓 Academic Information

**Project:** Password Strength Validator
**Type:** College CIA Part-B Project
**Case Study:** 11
**Domain:** Web Development / Cybersecurity / Theory Of Computation
**Core Concept:** Password Requirement Validation using Regular Expressions

---

## 👨‍💻 Author

**Sahil Laghave**
**Shreya Unde**
**Sakshi Gunjal**
**Sraddha Kotme**

Computer Engineering Students

---

## 📄 License

This project was developed for educational and academic purposes.
