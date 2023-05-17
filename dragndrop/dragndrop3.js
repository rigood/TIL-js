const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach((draggable) => {
  draggable.addEventListener("dragstart", dragStart);
  // draggable.addEventListener("drag", drag)
  // draggable.addEventListener("dragend", dragEnd)
});

droppableElements.forEach((droppable) => {
  droppable.addEventListener("dragenter", dragEnter);
  droppable.addEventListener("dragover", dragOver);
  droppable.addEventListener("dragleave", dragLeave);
  droppable.addEventListener("drop", drop);
});

// Drag and Drop Functions

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dragEnter(event) {
  if (!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if (!event.target.classList.contains("dropped")) {
    event.preventDefault();
  }
}

function dragLeave(event) {
  if (!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("droppable-hover");

  const draggableElementData = event.dataTransfer.getData("text");
  const droppableElementData = event.target.getAttribute("data-draggable-id");

  if (draggableElementData === droppableElementData) {
    event.target.classList.add("dropped");

    const draggableElement = document.getElementById(draggableElementData);

    event.target.style.backgroundColor = draggableElement.dataset.color;

    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", false);

    event.target.insertAdjacentHTML(
      "afterbegin",
      `<img src="${draggableElementData}.png"/>`
    );
  }
}
