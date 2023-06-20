// touches, targetTouches, changedTouches

const topHalf = document.getElementById("top-half");

topHalf.addEventListener("touchstart", (e) => {
  e.preventDefault(); // 줌 x, 스크롤 내리면서 화면 새로고침 x, 클릭 이벤트 발생x

  // console.log("Touches", e.touches.length);
  // console.log("Target Touches", e.targetTouches.length);
  // console.log("Changed Touches", e.changedTouches.length);

  if (e.targetTouches.length >= 2) {
    console.log("More than 2 fingers");
  }
});

document.addEventListener("touchstart", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pageX}px`;
    dot.id = touch.identifier;
    document.body.append(dot);
  });
});

document.addEventListener("touchmove", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pageX}px`;
  });
});

document.addEventListener("touchend", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.remove();
  });
});

document.addEventListener("touchcancel", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.remove();
  });
});

topHalf.addEventListener("pointerdown", (e) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.id = e.pointerId;
  positionDot(e, dot);
  document.body.append(dot);
});

topHalf.addEventListener("pointermove", (e) => {
  const dot = document.getElementById(e.pointerId);
  if (dot == null) return;

  positionDot(e, dot);
});

topHalf.addEventListener("pointerup", (e) => {
  const dot = document.getElementById(e.pointerId);
  if (dot == null) return;
  dot.remove();
});

topHalf.addEventListener("pointercancel", () => {
  const dot = document.getElementById(e.pointerId);
  if (dot == null) return;
  dot.remove();
});

function positionDot(e, dot) {
  dot.style.width = `${e.width * 10}px`;
  dot.style.height = `${e.height * 10}px`;
  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;
}
