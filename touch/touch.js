const container = document.getElementById("container");

container.addEventListener("touchstart", (e) => {
  // 줌 x, 스크롤 내리면서 화면 새로고침 x, 클릭 이벤트 발생x
  e.preventDefault();

  console.log("Touches", e.touches.length);
  console.log("Target Touches", e.targetTouches.length);
  console.log("Changed Touches", e.changedTouches.length);

  if (e.targetTouches.length >= 2) {
    console.log("More than 2 fingers");
  }
});

document.addEventListener("touchstart", (e) => {
  [...e.changedTouches].forEach((touch) => {
    // 빨간점 생성
    const dot = document.createElement("div");
    dot.classList.add("dot");

    // 위치 잡기
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pageX}px`;

    // id 지정
    dot.id = touch.identifier;

    // DOM에 추가
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
