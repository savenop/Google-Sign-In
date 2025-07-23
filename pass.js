let check = document.querySelector(".check");
let inp1 = document.querySelector(".inp1");

check.addEventListener("click", function () {
    if (check.checked) {
        inp1.type = "text";
    } else {
        inp1.type = "password";
    }
});