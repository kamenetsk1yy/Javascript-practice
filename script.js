// 1

const btn = document.getElementById("btn1");
const text = document.getElementById("text");

if (btn && text) {
  btn.addEventListener("click", () => {
    text.style.display = "none";
  });
}

const btn2 = document.getElementById("btn2");
if (btn2 && text) {
  btn2.addEventListener("click", () => {
    text.style.display = "";
  });
}


//2
const nav = document.getElementById("nav");
const nav1 = document.getElementById("nav1");

nav.addEventListener("click", handleclick);
nav1.addEventListener("click", handleclick);

function handleclick(event) {
   console.log(event.target);
   event.target.classList.add("display-none");
}