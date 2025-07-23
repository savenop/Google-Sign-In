let check = document.querySelector(".check");
let inp1 = document.querySelector(".inp1");
let nextBtn = document.querySelector(".btnx");
let errorMsg = document.querySelector(".error");
let inputWrapper = document.querySelector(".input-wrapper");
let floatingLabel = document.querySelector(".floating-label");
let attempt = 0;

check.addEventListener("click", function () {
    if (check.checked) {
        inp1.type = "text";
    } else {
        inp1.type = "password";
    }
});

nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    attempt++;
    if (attempt === 1) {
        // Show error
        errorMsg.style.display = "flex";
        inp1.style.borderColor = "#F2B8B5";
        if (floatingLabel) {
            floatingLabel.style.color = "#F2B8B5";
        }
    } else {
        // Hide error and reset styles
        errorMsg.style.display = "none";
        inp1.style.borderColor = "#C4C7C5";
        if (floatingLabel) {
            floatingLabel.style.color = "";
        }      
        window.location.href = "final.html";
    }
});