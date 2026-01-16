const pages = document.querySelectorAll(".page");
const key = document.getElementById("key");
const lock = document.getElementById("lock");
const body = document.body;

let currentPage = 0;
let unlocked = false;

body.classList.add("key-mode");

document.addEventListener("mousemove", (e) => {
  key.style.left = e.clientX + "px";
  key.style.top = e.clientY + "px";
});

document.addEventListener("click", () => {
  if (!unlocked) {
    unlocked = true;

    key.style.display = "block";
    //body.classList.remove("key-mode");

    lock.style.display = "none";

    return;
  }

  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  } else {
    pages.forEach(page => page.classList.remove("flipped"));
    currentPage = 0;
    unlocked = false;

    key.style.display = "block";
    lock.style.display = "block";

    //body.classList.add("key-mode");
  }
});
