const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formTitle = document.getElementById("project-title").value;
  const formImage = document.getElementById("project-img-link").value;
  const formText = document.getElementById("project-text").value;

  const newProjetCard = createNewProjectCard(formTitle, formImage, formText);

  document.querySelector("#cards").appendChild(newProjetCard);

  resetForm();
});

const createNewProjectCard = (title, image, text) => {
  const newCard = document.createElement("div");
  // cards.appendChild('newCard');
  newCard.classList.add("card");

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card__title");
  cardTitle.innerText = title;
  newCard.appendChild(cardTitle);

  const cardImage = document.createElement("img");
  cardImage.classList.add("card__img");
  cardImage.src = image;
  cardImage.alt = "";
  newCard.appendChild(cardImage);

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card__text");
  cardDescription.innerText = text;
  newCard.appendChild(cardDescription);

  return newCard;
};

const resetForm = () => {
  document.querySelector("#project-title").value = "";
  document.getElementById("project-img-link").value = "";
  document.getElementById("project-text").value = "";
};
