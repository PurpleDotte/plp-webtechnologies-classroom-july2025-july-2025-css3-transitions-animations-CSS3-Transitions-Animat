//Part 2

let clickCount = 0; // global variable

function toggleClass(id, className) {
  let element = document.getElementById(id);
  element.classList.toggle(className);
  return element.classList.contains(className);
}

function resetBox(id) {
  let box = document.getElementById(id);
  box.style.animation = "none";   // Stop animation
  box.offsetHeight; // trigger reflow
  box.style.animation = null;     // Reset animation
  box.style.transform = "translateX(0) scale(1)";
}


function showClickCount() {
  clickCount++; // global
  let msg = "Slide button clicked " + clickCount + " time(s)"; // local
  document.getElementById("click-count").textContent = msg;
  console.log(msg);
}

function slideBox() {
  let isOn = toggleClass("sliding-box", "animate");

  if (!isOn) {
    resetBox("sliding-box");
  }

  showClickCount();
}

document.getElementById("slide-button").addEventListener("click", slideBox);

//Part 3

let modal = document.getElementById("modal");
let openBtn = document.getElementById("open-modal");
let closeBtn = document.getElementById("close-modal");

function openModal() {
  modal.classList.remove("hide");
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
  
  // Wait for fadeOut to finish before hiding
  setTimeout(() => {
    modal.style.display = "none";
  }, 400);
}

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  openModal();
});

closeBtn.addEventListener("click", closeModal);