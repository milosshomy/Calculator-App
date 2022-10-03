/* Variables */

const buttonWrapper = document.querySelector(".button-wrapper");
const darkThemeBtn = document.querySelector(".dark-theme-btn");
const lightThemeBtn = document.querySelector(".light-theme-btn");
const purpleThemeBtn = document.querySelector(".purple-theme-btn");
const body = document.querySelector("body");
const texts = document.querySelectorAll(".text");
const buttons = document.querySelectorAll(".buttons");
const result = document.querySelector(".result");
const equalBtn = document.getElementById("equal-btn");
const delBtn = document.getElementById("del-btn");
const resetBtn = document.getElementById("reset-btn");

/* Changing indicator position based on which button is clicked and changing modes */

/* Dark theme btn */

darkThemeBtn.addEventListener("click", () => {
  buttonWrapper.classList.add("start");
  buttonWrapper.classList.remove("center");
  buttonWrapper.classList.remove("end");
  body.classList.remove("light-mode");
  body.classList.remove("purple-mode");
  texts.forEach((text) => {
    text.style.color = "var(--white-clr)";
  });

  equalBtn.style.color = "var(--white-clr)";
});

/* Light theme btn */

lightThemeBtn.addEventListener("click", () => {
  buttonWrapper.classList.add("center");
  buttonWrapper.classList.remove("start");
  buttonWrapper.classList.remove("end");
  body.classList.add("light-mode");
  body.classList.remove("purple-mode");
  texts.forEach((text) => {
    text.style.color = "var(--text-clr)";
  });

  equalBtn.style.color = "var(--white-clr)";
});

/* Purple theme btn */

purpleThemeBtn.addEventListener("click", () => {
  buttonWrapper.classList.add("end");
  buttonWrapper.classList.remove("start");
  buttonWrapper.classList.remove("center");
  body.classList.add("purple-mode");
  body.classList.remove("light-mode");
  texts.forEach((text) => {
    text.style.color = "var(--text-clr)";
  });

  equalBtn.style.color = "var(--equal-text-clr)";
});

// Handling calculator buttons

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText.replace("x", "*");
    if (value === "=") {
      result.textContent = eval(result.textContent);
    } else if (value === "RESET") {
      result.textContent = "";
    } else if (value === "DEL") {
      result.textContent = result.textContent.slice(
        0,
        result.textContent.length - 1
      );
    } else {
      result.textContent += value;
    }
  });
});
