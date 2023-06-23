const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
 var DarkMode = document.body.classList.toggle('dark-mode')
  localStorage.setItem("darkmode", DarkMode)
})

document.addEventListener("DOMContentLoaded", () => {
  var DarkM = localStorage.getItem("darkmode")
  if (DarkM === "true") {
    document.body.classList.add("dark-mode")
}
})
  
