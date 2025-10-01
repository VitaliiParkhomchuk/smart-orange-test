async function fetchData(api) {
  try {
    const res = await fetch(api);
    if (!res.ok) throw new Error("Request error");
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

async function main() {
  const api = "https://test.smarto.agency/smarto_complexes_list.json";
  const data = await fetchData(api);
  if (!data) return;

  const cardsList = document.getElementById("cards-list");
  cardsList.innerText = "";

  const moreButton = document.getElementById("class-list-more");
  let start = 0;
  const add = 6;

  function renderCards() {
    const end = start + add;
    const cardsToRender = data.slice(start, end);

    cardsToRender.forEach((card) => {
      const newCard = document.createElement("div");
      newCard.className = "card";

      newCard.innerHTML = `
        <div class="card__decorate-pin">
          <img src="./imgs/card-pin.png" alt="" />
        </div>
        <div class="card__header">
          <div class="card__year">${card.year}</div>
          <div class="card__type">${card.type}</div>
        </div>
        <div class="card__img-container">
          <img src="${card.img}" alt="building project" />
        </div>
        <h3 class="card__title subtitle">
          ${card.name}
        </h3>
        <div class="card__address">${card.adress}</div>
        <div class="card__specs">
          <div class="card__specs-title">Види робіт:</div>
          <ul class="card__specs-list">
            ${card.tags
              .map((tag) => `<li class="card__specs-item">${tag}</li>`)
              .join("")}
          </ul>
        </div>
        <div class="card__footer">
          <img src="./imgs/card-decorate-el.png" alt="" />
        </div>
      `;

      cardsList.appendChild(newCard);
    });

    start += add;

    if (start >= data.length) {
      moreButton.style.display = "none";
    }
  }

  renderCards();

  moreButton.addEventListener("click", renderCards);
}

main();
