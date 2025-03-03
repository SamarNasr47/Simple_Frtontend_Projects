

function Validation() {
    let valid = true;
    const firstName = document.getElementById('InputFname').value;
    const lastName = document.getElementById('InputLname').value;
    const email = document.getElementById('InputEmail1').value;
    const password = document.getElementById('InputPassword').value;
    const confirmPassword = document.getElementById('InputConfirmPassword').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (firstName.length > 15 || firstName.length < 1) {
        document.getElementById('fnameError').textContent = 'First name should be less than 15 characters'
            + 'and greater than 2';
        valid = false;
    }

    if (lastName.length > 15 || lastName.length < 1) {
        document.getElementById('lnameError').textContent = 'Last name should be less than 15 characters'
            + 'and greater than 2';
        valid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        valid = false;
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least 1 uppercase letter, 1 number, and 1 special character';
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        valid = false;
    }

    if (valid) {
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        console.log(localStorage)
    }
    else {
        alert('Please Enter A valid Data');
    }
    return valid;
}

const userData = JSON.parse(localStorage.getItem('userData'));
if (userData) {
    const FName = userData.firstName;
    const LName = userData.lastName;
    let head = document.querySelector(".hederName");
    if (head) {
        head.textContent = `Welcome, ${FName} ${LName}!`;
    }
} else {
    console.log("No data found.");
}


function storeCourseData(courseName, courseDuration, coursePrice) {
    const courseData = {
        name: courseName,
        duration: courseDuration,
        price: coursePrice
    };
    localStorage.setItem('courseData', JSON.stringify(courseData));
}

window.onload = function () {
    const courseData = JSON.parse(localStorage.getItem('courseData'));
    if (courseData) {
        const courseDetails = `
            <p class="fw-bold">Course Name:${courseData.name}</p>
            <p class="fw-bold">Duration:${courseData.duration}</p>
            <p class="fw-bold">Price:${courseData.price}</p>
        `;
        document.getElementById('courseDetails').innerHTML = courseDetails;
    } else {
        document.getElementById('courseDetails').innerHTML = "<p>No course selected.</p>";
    }
}

function Payment() {
    alert("Payment processed successfully!");
    window.location.href = "thankyou.html";
    return false;
}
