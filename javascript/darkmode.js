const toggleCheckbox = document.getElementById("toggle_checkbox");
const mainElement = document.querySelector("main");
var paragrafo = document.getElementById("paragrafo")

toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    // Dark mode ativado
    mainElement.style.backgroundColor = "#333";
    mainElement.style.color = "#fff";
    paragrafo.style.color = '#3455'
    
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