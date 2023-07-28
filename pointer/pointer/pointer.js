const container = document.getElementById("container");

container.addEventListener("pointerdown", (e) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  dot.id = e.pointerId;
  positionDot(e, dot);

  document.body.append(dot);
});

container.addEventListener("pointermove", (e) => {
  const dot = document.getElementById(e.pointerId);

  if (dot == null) return;

  positionDot(e, dot);
});

container.addEventListener("pointerup", (e) => {
  const dot = document.getElementById(e.pointerId);

  if (dot == null) return;

  dot.remove();
});

container.addEventListener("pointercancel", (e) => {
  const dot = document.getElementById(e.pointerId);

  if (dot == null) return;

  dot.remove();
});

function positionDot(e, dot) {
  dot.style.width = `${e.width}px`;
  dot.style.height = `${e.height}px`;
  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;
}
