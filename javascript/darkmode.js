const toggleCheckbox = document.getElementById("toggle_checkbox");
const mainElement = document.querySelector("main");

toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    // Dark mode ativado
    mainElement.style.backgroundColor = "#333";
    mainElement.style.color = "#fff";
    localStorage.setItem("darkMode", "enabled");
  } else {
    // Dark mode desativado
    mainElement.style.backgroundColor = "#fff";
    mainElement.style.color = "#333";
    
    localStorage.setItem("darkMode", "disabled");
    
  }
  
});


window.addEventListener("load", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    toggleCheckbox.checked = true;
    mainElement.style.backgroundColor = "#333";
    mainElement.style.color = "#fff";
    
  }
});