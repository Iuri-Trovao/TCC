const chk = document.getElementById('chk')
const check = document.getElementById('ball')
const label = document.getElementById('label')
const main = document.getElementById('main')

chk.addEventListener('change', () => {
 var DarkMode = main.classList.toggle('dark-mode')
  localStorage.setItem("darkmode", DarkMode)
  if(DarkMode === true) {
    check.style.transform = "translateX(24px)"
  } else {
    check.style.transform = "translateX(0px)"
  }
})

document.addEventListener("DOMContentLoaded", () => {
  var isDarkMode = localStorage.getItem("darkmode") === "true"
  if(isDarkMode) {
    document.body.classList.add("dark-mode")
    check.style.transform = "translateX(24px)"
  } else {
    document.body.classList.remove("dark-mode")
    check.style.transform = "translateX(0px)"
  }
})
