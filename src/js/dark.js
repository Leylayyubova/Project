const dark_mode = document.getElementById("dark_mode");
const darkModeButton = dark_mode.querySelector('i');


const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";


function toggleDarkModePreference() {
  if (document.body.classList.contains("dark_mode")) {
    localStorage.setItem("darkModeEnabled", "true");
  } else {
    localStorage.setItem("darkModeEnabled", "false");
  }
}

dark_mode.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");

  
  toggleDarkModePreference();

  if (document.body.classList.contains("dark_mode")) {
    darkModeButton.classList.remove("fa-moon");
    darkModeButton.classList.add("fa-sun");
  } else {
    darkModeButton.classList.remove("fa-sun");
    darkModeButton.classList.add("fa-moon");
  }
});


if (isDarkModeEnabled) {
  document.body.classList.add("dark_mode");
  darkModeButton.classList.remove("fa-moon");
  darkModeButton.classList.add("fa-sun");
} else {
  document.body.classList.remove("dark_mode");
  darkModeButton.classList.remove("fa-sun");
  darkModeButton.classList.add("fa-moon");
}
