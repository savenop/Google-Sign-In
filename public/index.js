let googleBtn = document.querySelectorAll(".oauthButton")[0];
let githubBtn = document.querySelectorAll(".oauthButton")[1];

const errorBox = document.querySelector('.error');
const continueBtn = document.getElementById('continueBtn');

googleBtn.addEventListener("click", (e) => {
  e.preventDefault(); // stop form submission
  setTimeout(() => {
    window.location.href = "acc.html";
  }, 1000); // 3 sec = 3000 ms
});

githubBtn.addEventListener("click", () => {
  window.location.href = "https://github.com/";
});

continueBtn.addEventListener('click', () => {
  errorBox.classList.add('show');
  setTimeout(() => {
    errorBox.classList.remove('show');
  }, 3000);
});
