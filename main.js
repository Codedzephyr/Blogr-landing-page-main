const navigation = document.getElementById("navigation");
const hamburger_button = document.getElementById("hamburgerr");
const clickable = document.getElementById("click");
const clickable1 = document.getElementById("clicked");
const clickable2 = document.getElementById("clickeded");
const navigationlinks1 = document.getElementById("secondnav");
const navigationlinks2 = document.getElementById("thirdnav");
const navigationlinks = document.getElementById("firstnav");

hamburger_button.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

clickable.addEventListener("click", () => {
  if (navigationlinks.style.display !== "block") {
    navigationlinks.style.display = "block";
    clickable.style.transform = "rotate(0deg)";
  } else {
    clickable.style.transform = "rotate(180deg)";
    navigationlinks.style.display = "none";
  }
});

clickable1.addEventListener("click", () => {
  if (navigationlinks1.style.display !== "block") {
    navigationlinks1.style.display = "block";
    clickable1.style.transform = "rotate(0deg)";
  } else {
    clickable1.style.transform = "rotate(180deg)";
    navigationlinks1.style.display = "none";
  }
});
clickable2.addEventListener("click", () => {
  if (navigationlinks2.style.display !== "block") {
    navigationlinks2.style.display = "block";
    clickable2.style.transform = "rotate(0deg)";
  } else {
    clickable2.style.transform = "rotate(180deg)";
    navigationlinks2.style.display = "none";
  }
});
