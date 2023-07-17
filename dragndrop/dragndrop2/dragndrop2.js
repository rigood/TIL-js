const draggables = document.querySelectorAll(".draggable");
const container = document.querySelector(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

container.addEventListener("dragover", (e) => {
  e.preventDefault();

  const draggable = document.querySelector(".dragging");
  const afterElement = getDragAfterElement(container, e.clientY);

  container.insertBefore(draggable, afterElement);
});

container.addEventListener("drop", () => {
  const correctArray = [
    "회초리",
    "무심세월",
    "송인",
    "가시오",
    "이별편지",
    "서울 가 살자",
  ];

  const draggables = container.querySelectorAll(".draggable");
  const currentArray = [...draggables].map((draggable) => draggable.innerText);

  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  if (equals(correctArray, currentArray)) {
    container.style.backgroundColor = "lavenderblush";
    alert("정답입니다💜");
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
