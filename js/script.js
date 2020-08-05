const panels = document.querySelectorAll(".panel");
const menu = document.getElementsByClassName("menu");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  // console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

function menuToggle() {
    let dropdown = document.getElementById('dropdown');
    if (dropdown.className === "deactive" || dropdown.className === "") {
        dropdown.className = "active";
    } else {
        dropdown.className = "deactive";
    }
}

menu[0].addEventListener("click", menuToggle);
// menu[0].addEventListener("click", hideMenu);

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
