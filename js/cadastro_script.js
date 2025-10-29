const senhaInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

togglePassword.addEventListener("click", () => {
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    // olho aberto
    eyeIcon.innerHTML = `
      <path fill="#00ff66" d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
      <circle fill="#00ff66" cx="12" cy="12" r="2"/>
    `;
  } else {
    senhaInput.type = "password";
    // olho fechado
    eyeIcon.innerHTML = `
      <path fill="#00ff66" d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
      <circle fill="#00ff66" cx="12" cy="12" r="2"/>
      <line x1="4" y1="4" x2="20" y2="20" stroke="#00ff66" stroke-width="2"/>
    `;
  }
});
