const url = "https://pokeapi.co/api/v2/pokemon";
let offset = 0;
let limit = 20;
let countCards = 0;
let pokemons = [];

const parentDiv = document.getElementById("container");

const pokemonCards = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const pokemons = data.results;

    pokemons.forEach(async (element) => {
      const divCard = document.createElement("div");
      divCard.className = "Cards";
      const divName = document.createElement("div");
      divName.className = "NameBox";
      const pName = document.createElement("p");
      pName.className = "NameText";
      const iHeart = document.createElement("i");
      iHeart.className = "fa-sharp fa-regular fa-heart";
      const imgCard = document.createElement("div");
      imgCard.className = "divImg";
      const img = document.createElement("img");
      img.className = "CardImg";
      const divFooter = document.createElement("div");
      divFooter.className = "PowerBox";
      const pPower = document.createElement("p");
      pPower.className = "PowerText";
      const btn = document.createElement("button:sumit");
      btn.textContent = "Buy";
      btn.className = "Buttonn";
      const [type1, type2] = await getType(element.url);

      pName.textContent =
        element.name.charAt(0).toUpperCase() +
        element.name.slice(1).toLowerCase();

      countCards++;
      const totalCards = document.querySelector(".cardsCount");
      totalCards.textContent = `${countCards} Cards`;

      const pokemonData = await getPokemonData(element.url);

      img.src = pokemonData.sprites.other["home"].front_default;
      pPower.textContent = `Level: ${pokemonData.base_experience}`;

      divCard.appendChild(divName);
      divName.appendChild(pName);
      divName.appendChild(iHeart);
      divCard.appendChild(imgCard);
      imgCard.appendChild(img);
      divCard.appendChild(divFooter);
      divFooter.appendChild(pPower);
      divFooter.appendChild(btn);
      divCard.setAttribute("data-type1", type1);
      divCard.setAttribute("data-type2", type2);

      parentDiv.appendChild(divCard);

    });
  }
    catch (error) {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = `nombre : ${error.message}`;
    parentDiv.appendChild(errorMsg);
    }
};

const cards = document.querySelectorAll(".Cards");
cards.forEach((card) => {
  const cardType1 = card.getAttribute("data-type1");
  const cardType2 = card.getAttribute("data-type2");
});

const getType = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  const types = data.types.map((typePokemon) => typePokemon.type.name);
  return types;
};

const getPokemonData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

pokemonCards(url);

const filter = document.querySelectorAll(".type");

filter.forEach((filterType) => {
  filterType.addEventListener("click", (event) => {
    event.preventDefault();
    const type = filterType.textContent.toLowerCase();
    filterByType(type);
  });
});

const filterByType = (type) => {
  const cards = document.querySelectorAll(".Cards");
  cards.forEach((card) => {
    const cardType1 = card.getAttribute("data-type1");
    const cardType2 = card.getAttribute("data-type2");

    if (type === "all" || cardType1 === type || cardType2 === type) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

const renderCards = (pokemons) => {
  container.innerHTML = "";

  pokemonCards(url);
}

const btnMore = document.querySelector(".btnMore");
btnMore.addEventListener("click", () => {
  offset += limit
  limit += limit

  renderCards(pokemons.slice(offset, limit))
});
