const toggleCheckbox = document.getElementById("toggle_checkbox");
const bodyElement = document.querySelector("body");

toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    // Dark mode ativado
    bodyElement.style.backgroundColor = "#333";
    bodyElement.style.color = "#fff";
    localStorage.setItem("darkMode", "enabled");
  } else {
    // Dark mode desativado
    bodyElement.style.backgroundColor = "#fff";
    bodyElement.style.color = "#333";
    
    localStorage.setItem("darkMode", "disabled");
    
  }
  
});


window.addEventListener("load", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    toggleCheckbox.checked = true;
    bodyElement.style.backgroundColor = "#333";
    bodyElement.style.color = "#fff";
    
  }
});