document.addEventListener("DOMContentLoaded", (event) => {
  const resetButton = document.getElementById("reset");

  resetButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", () => {
    if(window.pageYOffset > 300) {
      resetButton.style.display = "block";
    }
    else {
      resetButton.style.display = "none";
    }
  });

  const toggleCheckbox = document.getElementById("theme-toggle");
  const body = document.body;

  //Vraca dark/light mode na pocetak
  const userPref = localStorage.getItem("theme");

  if (userPref === "dark") {
    toggleCheckbox.checked = true;
    body.classList.add("dark-mode");
  }

  toggleCheckbox.addEventListener("change", function () {
    body.classList.toggle("dark-mode");

    // Cuva dark/light mode u local storage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
