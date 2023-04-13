const toggleCheckbox = document.getElementById('theme-toggle');
const body = document.body;

//Vraca dark/light mode na pocetak
const userPref = localStorage.getItem('theme');

if (userPref === 'dark') {
  toggleCheckbox.checked = true;
  body.classList.add('light-mode');
}

toggleCheckbox.addEventListener('change', function() {
  body.classList.toggle('light');

  // Cuva dark/light mode u local storage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});