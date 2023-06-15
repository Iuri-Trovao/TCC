function DarkMode() {
    let body = document.body
    body.classList.toggle("dark-mode:")

    var DarkMode = body.classList.contains("dark-mode")
    localStorage.setItem("darkMode", DarkMode)
}

document.addEventListener("DOMContentLoaded", function(){
    var DarkMode = localStorage.getItem("darkMode")
    if (DarkMode === "true") {
        document.body.classList.add("dark-mode")
    }
}) 

  
