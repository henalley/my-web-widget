document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.getElementById("successMessage");

  // Clear messages
  errorMessage.textContent = "";
  successMessage.textContent = "";

  // Frontend validation
  if (!email || !password) {
    errorMessage.textContent = "Both fields are required.";
    return;
  }

  // Simulate login check
  // Replace this with actual authentication call
  const validEmail = "partner@example.com";
  const validPassword = "secure123";

  if (email === validEmail && password === validPassword) {
    successMessage.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Replace with your actual page
    }, 1500);
  } else {
    errorMessage.textContent = "Invalid email or password.";
  }
});