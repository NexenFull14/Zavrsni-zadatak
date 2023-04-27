document.addEventListener("DOMContentLoaded", (event) => {
  const resetButton = document.querySelector("#reset");
  resetButton.style.opacity = '0';

  resetButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 4000,
    });
  });

  window.addEventListener("scroll", () => {
    if(window.pageYOffset > 300) {
      resetButton.style.display = "block";
      resetButton.style.transition = "all 4s linear";
      resetButton.style.opacity = "1";
    }
    else {
      resetButton.style.display = "none";
      resetButton.style.opacity = "0";
    }
  });
  
});
