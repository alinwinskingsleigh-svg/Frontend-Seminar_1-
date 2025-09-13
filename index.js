const body = document.body;
const btn = document.getElementById('themeBtn');

const saved = localStorage.getItem('theme'); 
if (saved === 'light') {
  body.classList.add('light');
}

function setLabel() {
  const light = body.classList.contains('light');
  btn.textContent = light ? '🌙 다크모드' : '☀️ 라이트모드';
}
setLabel();

btn.addEventListener('click', () => {
  body.classList.toggle('light');
  const light = body.classList.contains('light');
  localStorage.setItem('theme', light ? 'light' : 'dark');
  setLabel();
});

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
