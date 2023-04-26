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
  
});
