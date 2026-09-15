const steps = document.querySelectorAll(".step");
const dots = document.querySelectorAll(".step-dot");
const next = document.querySelectorAll(".next");
const back = document.querySelectorAll(".back");
const success = document.querySelector(".success-page");
let current = 0;
function validate() {
    const inputs = steps[current].querySelectorAll("input");
    let valid = true;
    inputs.forEach(function(input) {
        if (input.nextElementSibling?.classList.contains("error")) {
            input.nextElementSibling.remove();
        }
        input.style.border = "1px solid #d5d8dc";
        if (input.value === "") {
            error(input, "This field is required");
            valid = false;
        }
        else if (input.id === "name" && !/^[A-Za-z ]+$/.test(input.value)) {
            error(input, "Only characters are allowed");
            valid = false;
        }
        else if (input.id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            error(input, "Enter a valid email");
            valid = false;
        }
        else if (input.id === "mobile" && !/^[0-9]{10}$/.test(input.value)) {
            error(input, "Mobile number must be 10 digits");
            valid = false;
        }
        else if (input.id === "city" && !/^[A-Za-z ]+$/.test(input.value)) {
            error(input, "Only characters are allowed");
            valid = false;
        }
        else if (input.id === "pincode" && !/^[0-9]{6}$/.test(input.value)) {
            error(input, "Pin code must be 6 digits");
            valid = false;
        }
    });
    return valid;
}
function error(input, message) {
    input.style.border = "2px solid red";
	input.style.marginBottom = "2px";
    const text = document.createElement("p");
    text.className = "error";
    text.textContent = message;
    text.style.color = "red";
    text.style.fontSize = "12px";
	text.style.marginBottom = "20px";
    input.after(text);
}
next.forEach(function(button) {
    button.onclick = function() {
        if (!validate()) {
            return;
        }
        if (current < 2) {
            steps[current].classList.remove("active");
            dots[current].classList.remove("active");
            current++;
            steps[current].classList.add("active");
            dots[current].classList.add("active");
        } else {
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