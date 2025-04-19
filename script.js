// Toggle Light/Dark Mode
const btn = document.getElementById("modeToggle");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Optional: Show today's date in footer (if you want)
const footer = document.querySelector("footer");
const today = new Date();
const dateString = today.toLocaleDateString('en-UK', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const datePara = document.createElement('p');
datePara.textContent = `Today's Date: ${dateString}`;
footer.appendChild(datePara);
