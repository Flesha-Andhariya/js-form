const steps = document.querySelectorAll(".step");
const dots = document.querySelectorAll(".step-dot");
const next = document.querySelectorAll(".next");
const back = document.querySelectorAll(".back");
const success = document.querySelector(".success-page");
const dob = document.querySelector("#dob");
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
dob.max = `${year}-${month}-${day}`;
let current = 0;
$("#stepForm").validate({
    rules: {
        name: {
            required: true,
            pattern: /^[A-Za-z ]+$/
        },
        email: {
            required: true,
            email: true
        },
        mobile: {
            required: true,
            digits: true,
            minlength: 10,
            maxlength: 10
        },
        address: {
            required: true
        },
        city: {
            required: true,
            pattern: /^[A-Za-z ]+$/
        },
        pincode: {
            required: true,
            digits: true,
            minlength: 6,
            maxlength: 6
        },
       dob: {
            required: true,
            max: function() {
            return new Date().toISOString().split("T")[0];
        }
}
    },
    messages: {
        name: {
            required: "Please enter your name",
            pattern: "Only characters are allowed"
        },
        email: {
            required: "Please enter your email",
            email: "Enter a valid email"
        },
        mobile: {
            required: "Please enter your mobile number",
            digits: "Only numbers are allowed",
            minlength: "Mobile number must be 10 digits",
            maxlength: "Mobile number must be 10 digits"
        },
        address: {
            required: "Please enter your address"
        },
        city: {
            required: "Please enter your city",
            pattern: "Only characters are allowed"
        },
        pincode: {
            required: "Please enter your pin code",
            digits: "Only numbers are allowed",
            minlength: "Pin code must be 6 digits",
            maxlength: "Pin code must be 6 digits"
        },
       dob: {
            required: "Please select your date of birth",
            max: "Future dates are not allowed."
        }
    }
});
next.forEach(function(button) {
    button.onclick = function() {
        const inputs = steps[current].querySelectorAll("input");
        let valid = true;
        inputs.forEach(function(input) {
            if (!$(input).valid()) {
                valid = false;
            }
        });
        if (!valid) {
            return;
        }
        if (current < 2) {
            steps[current].classList.remove("active");
            dots[current].classList.remove("active");
            current++;
            steps[current].classList.add("active");
            dots[current].classList.add("active");
        }
        else {
            steps[current].classList.remove("active");
            success.style.display = "block";
        }
    };
});
back.forEach(function(button) {
    button.onclick = function() {
        steps[current].classList.remove("active");
        dots[current].classList.remove("active");
        current--;
        steps[current].classList.add("active");
        dots[current].classList.add("active");
    };
});




