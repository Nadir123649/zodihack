const userImage = document.getElementById("user-image");
const menuContainer = document.getElementById("menu-container");

userImage.addEventListener("click", function () {
  menuContainer.classList.toggle("show");
});

// Close the menu when clicking outside
window.addEventListener("click", function (event) {
  if (
    !userImage.contains(event.target) &&
    !menuContainer.contains(event.target)
  ) {
    menuContainer.classList.remove("show");
  }
});
