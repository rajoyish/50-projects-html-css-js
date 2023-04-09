const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const nameEl = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://source.unsplash.com/random/?laptop" alt="laptop" />';
  title.innerHTML = "Iran clicks not wearing hijab";
  excerpt.innerHTML =
    "Police say women seen not covering their hair will receive texts warning them of consequences.";
  profile_img.innerHTML =
    '<img src="https://i.pravatar.cc/300" alt="author" />';
  nameEl.innerHTML = "Rajesh Budhathoki";
  date.innerHTML = "April 7, 2023";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
