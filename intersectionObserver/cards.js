const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "추가된 카드";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
}

const lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0];

  if (!lastCard.isIntersecting) return;
  loadNewCards();

  lastCardObserver.unobserve(lastCard.target);
  lastCardObserver.observe(document.querySelector(".card:last-child"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    rootMargin: "-100px",
  }
);

lastCardObserver.observe(document.querySelector(".card:last-child"));

cards.forEach((card) => {
  observer.observe(card);
});
