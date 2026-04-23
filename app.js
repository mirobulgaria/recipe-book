const countries = window.countriesData || [];
const recipes = window.recipeData || [];

const uiText = {
  en: {
    appName: "My International Kitchen",
    heroTitle: "Discover Recipes From Around the World",
    heroSubtitle: "Pick a country and search by dish or ingredient.",
    countryLabel: "Country",
    searchLabel: "Search",
    searchPlaceholder: "Dish name or ingredient",
    recipesTitle: "Recipe Collection",
    ingredientsTitle: "Ingredients",
    instructionsTitle: "Instructions",
    allCountries: "All countries",
    details: "View Details",
    noResults: "No recipes found. Try another country or keyword.",
    results: (count) => `${count} recipe${count === 1 ? "" : "s"} found`
  },
  bg: {
    appName: "Моята Интернационална Кухня",
    heroTitle: "Открий Рецепти От Целия Свят",
    heroSubtitle: "Избери държава и търси по ястие или съставка.",
    countryLabel: "Държава",
    searchLabel: "Търсене",
    searchPlaceholder: "Име на ястие или съставка",
    recipesTitle: "Колекция Рецепти",
    ingredientsTitle: "Съставки",
    instructionsTitle: "Инструкции",
    allCountries: "Всички държави",
    details: "Виж Детайли",
    noResults: "Няма намерени рецепти. Опитайте друга държава или ключова дума.",
    results: (count) => `Намерени рецепти: ${count}`
  }
};

let lang = "en";

const countrySelect = document.getElementById("countrySelect");
const searchInput = document.getElementById("searchInput");
const recipesGrid = document.getElementById("recipesGrid");
const resultsInfo = document.getElementById("resultsInfo");
const languageToggle = document.getElementById("languageToggle");

const recipeModal = document.getElementById("recipeModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalCountry = document.getElementById("modalCountry");
const modalDescription = document.getElementById("modalDescription");
const modalIngredients = document.getElementById("modalIngredients");
const modalInstructions = document.getElementById("modalInstructions");

function getCountryByCode(code) {
  return countries.find((country) => country.countryCode === code);
}

function applyTranslations() {
  const text = uiText[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (text[key]) {
      node.textContent = text[key];
    }
  });
  searchInput.placeholder = text.searchPlaceholder;
}

function populateCountryDropdown() {
  const selected = countrySelect.value || "all";
  const allLabel = uiText[lang].allCountries;

  countrySelect.innerHTML = `<option value="all">${allLabel}</option>`;
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.countryCode;
    const countryName = lang === "en" ? country.country : country.countryBg;
    option.textContent = `${country.flag} ${countryName}`;
    countrySelect.appendChild(option);
  });
  countrySelect.value = selected;
}

function matchesQuery(recipe, query) {
  if (!query) {
    return true;
  }
  const q = query.toLowerCase();
  const name = recipe.name[lang].toLowerCase();
  const description = recipe.description[lang].toLowerCase();
  const ingredients = recipe.ingredients
    .map((ingredient) => ingredient.name[lang])
    .join(" ")
    .toLowerCase();
  return name.includes(q) || description.includes(q) || ingredients.includes(q);
}

function getFilteredRecipes() {
  const country = countrySelect.value;
  const query = searchInput.value.trim();
  return recipes.filter((recipe) => {
    const countryMatch = country === "all" || recipe.countryCode === country;
    return countryMatch && matchesQuery(recipe, query);
  });
}

function renderRecipes() {
  const filtered = getFilteredRecipes();
  const text = uiText[lang];

  resultsInfo.textContent = text.results(filtered.length);
  recipesGrid.innerHTML = "";

  if (filtered.length === 0) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.textContent = text.noResults;
    recipesGrid.appendChild(noResults);
    return;
  }

  filtered.forEach((recipe) => {
    const country = getCountryByCode(recipe.countryCode);
    const dishName = recipe.name[lang];
    const description = recipe.description[lang];
    const countryName = lang === "en" ? country.country : country.countryBg;

    const card = document.createElement("article");
    card.className = "recipe-card";
    card.innerHTML = `
      <img class="recipe-image" src="${recipe.image}" alt="${dishName}" loading="lazy" />
      <div class="recipe-meta">
        <h3>${dishName}</h3>
        <span class="country-pill">${recipe.flag} ${countryName}</span>
      </div>
      <p class="recipe-description">${description}</p>
      <button class="details-btn" type="button" data-id="${recipe.id}">${text.details}</button>
    `;
    recipesGrid.appendChild(card);
  });
}

function openRecipeModal(recipeId) {
  const recipe = recipes.find((item) => String(item.id) === String(recipeId));
  if (!recipe) {
    return;
  }
  const country = getCountryByCode(recipe.countryCode);
  const recipeName = recipe.name[lang];
  const countryName = lang === "en" ? country.country : country.countryBg;
  const description = recipe.description[lang];
  const ingredients = recipe.ingredients;
  const steps = recipe.steps;

  modalTitle.textContent = recipeName;
  modalCountry.textContent = `${recipe.flag} ${countryName} • ${recipe.prepTime} prep • ${recipe.cookTime} cook • ${recipe.servings} servings`;
  modalDescription.textContent = description;

  modalIngredients.innerHTML = "";
  ingredients.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.amount} ${item.unit[lang]} ${item.name[lang]}`;
    modalIngredients.appendChild(li);
  });

  modalInstructions.innerHTML = "";
  steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step.instruction[lang];
    modalInstructions.appendChild(li);
  });

  recipeModal.classList.remove("hidden");
}

function closeRecipeModal() {
  recipeModal.classList.add("hidden");
}

languageToggle.addEventListener("click", () => {
  lang = lang === "en" ? "bg" : "en";
  applyTranslations();
  populateCountryDropdown();
  renderRecipes();
});

countrySelect.addEventListener("change", renderRecipes);
searchInput.addEventListener("input", renderRecipes);

recipesGrid.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLElement && target.matches("[data-id]")) {
    openRecipeModal(target.dataset.id);
  }
});

closeModal.addEventListener("click", closeRecipeModal);
recipeModal.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLElement && target.dataset.close === "true") {
    closeRecipeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeRecipeModal();
  }
});

applyTranslations();
populateCountryDropdown();
renderRecipes();
