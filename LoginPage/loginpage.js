document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");
  const emailInput = document.querySelector("input[type='email']");
  const passwordInput = document.querySelector("input[type='password']");

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
    } else {
      // Example validation (replace with actual authentication logic)
      if (email === "yusuf22086@gmail.com" && password === "18151589") {
        alert("Login successful!");
        window.location.href = "/HomePage/homepage.html";  // Redirect to homepage
      }
      else if (email === "ansarialfisha2006@gmail.com" && password === "123456") {
        alert("Login successful!");
        window.location.href = "/HomePage/homepage.html";  // Redirect to homepage
      }
      else {
        alert("Invalid email or password.");
      }
    }
  });
});
