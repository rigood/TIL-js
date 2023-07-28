const video = document.getElementById("video");
const timeline = document.getElementById("timeline");
const timelineBar = document.getElementById("timeline-bar");

timeline.addEventListener("pointerdown", (e) => {
  timeline.setPointerCapture(e.pointerId);
  setTimelinePosition(e);

  timeline.addEventListener("pointermove", setTimelinePosition);
  timeline.addEventListener(
    "pointerup",
    () => {
      timeline.removeEventListener("pointermove", setTimelinePosition);
    },
    { once: true }
  );
});

function setTimelinePosition(e) {
  const rect = timeline.getBoundingClientRect();
  const handleWidth = (e.clientX / rect.width) * 100;
  timelineBar.style.width = `${handleWidth}%`;
}
