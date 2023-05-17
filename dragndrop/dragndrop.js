// DOM Elements
const boxes = document.querySelectorAll(".box");
const img = document.querySelector(".img");

// Loop through each boxes element
boxes.forEach((box) => {
  // When a draggable element dragged over a box element
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.classList.add("hovered");
  });

  // When a draggable element leaves box element
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  // When a draggable element is dropped on a box element
  box.addEventListener("drop", () => {
    box.appendChild(img);
    box.classList.remove("hovered");
  });
});
