const countries = window.countriesData || [];
const recipes = window.recipeData || [];

const uiText = {
  en: {
    appName: "My International Kitchen",
    heroTitle: "Discover Recipes from Around the World",
    heroSubtitle: "Choose a country and search by dish or ingredient.",
    countryLabel: "Country",
    searchLabel: "Search",
    searchPlaceholder: "Dish name or ingredient",
    recipesTitle: "Recipe Collection",
    ingredientsTitle: "Ingredients",
    instructionsTitle: "Instructions",
    prepTime: "Prep",
    cookTime: "Cook",
    servings: "Servings",
    check: "Check",
    qty: "Qty",
    unit: "Unit",
    ingredient: "Ingredient",
    backToRecipes: "Back to recipes",
    randomRecipe: "Random recipe",
    allCountries: "All countries",
    details: "View Details",
    noResults: "No results found. Try another country or keyword.",
    results: (count) => `Showing ${count} recipe${count === 1 ? "" : "s"}`
  },
  bg: {
    appName: "Моята интернационална кухня",
    heroTitle: "Открий рецепти от цял свят",
    heroSubtitle: "Избери държава и търси по ястие или съставка.",
    countryLabel: "Държава",
    searchLabel: "Търсене",
    searchPlaceholder: "Име на ястие или съставка",
    recipesTitle: "Колекция Рецепти",
    ingredientsTitle: "Съставки",
    instructionsTitle: "Инструкции",
    prepTime: "Подготовка",
    cookTime: "Готвене",
    servings: "Порции",
    check: "Отметка",
    qty: "Количество",
    unit: "Мярка",
    ingredient: "Съставка",
    backToRecipes: "Назад към рецептите",
    randomRecipe: "Случайна рецепта",
    allCountries: "Всички държави",
    details: "Виж Детайли",
    noResults: "Няма намерени резултати. Опитай друга държава или ключова дума.",
    results: (count) => `Показани рецепти: ${count}`
  }
};

let lang = "en";
let selectedRecipeId = null;

const countrySelect = document.getElementById("countrySelect");
const searchInput = document.getElementById("searchInput");
const recipesGrid = document.getElementById("recipesGrid");
const resultsInfo = document.getElementById("resultsInfo");
const languageToggle = document.getElementById("languageToggle");
const gridView = document.getElementById("gridView");
const detailView = document.getElementById("detailView");
const backToGridBtn = document.getElementById("backToGridBtn");
const randomRecipeBtn = document.getElementById("randomRecipeBtn");

const detailImage = document.getElementById("detailImage");
const detailTitle = document.getElementById("detailTitle");
const detailCountry = document.getElementById("detailCountry");
const detailDescription = document.getElementById("detailDescription");
const detailPrepTime = document.getElementById("detailPrepTime");
const detailCookTime = document.getElementById("detailCookTime");
const detailServings = document.getElementById("detailServings");
const ingredientsTableBody = document.getElementById("ingredientsTableBody");
const detailSteps = document.getElementById("detailSteps");

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
  if (selectedRecipeId) {
    renderRecipeDetail(selectedRecipeId);
  }
}

function populateCountryDropdown() {
  const selected = countrySelect.value || "all";
  countrySelect.innerHTML = `<option value="all">${uiText[lang].allCountries}</option>`;
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.countryCode;
    option.textContent = `${country.flag} ${lang === "en" ? country.country : country.countryBg}`;
    countrySelect.appendChild(option);
  });
  countrySelect.value = selected;
}

function matchesQuery(recipe, query) {
  if (!query) {
    return true;
  }
  const q = query.toLowerCase();
  const name = `${recipe.name.en} ${recipe.name.bg}`.toLowerCase();
  const ingredients = recipe.ingredients
    .map((ingredient) => `${ingredient.name.en} ${ingredient.name.bg}`)
    .join(" ")
    .toLowerCase();
  return name.includes(q) || ingredients.includes(q);
}

function getFilteredRecipes() {
  const selectedCountry = countrySelect.value;
  const query = searchInput.value.trim();
  return recipes.filter((recipe) => {
    const countryMatch = selectedCountry === "all" || recipe.countryCode === selectedCountry;
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

function renderRecipeDetail(recipeId) {
  const recipe = recipes.find((item) => String(item.id) === String(recipeId));
  if (!recipe) {
    return;
  }
  selectedRecipeId = recipe.id;

  const country = getCountryByCode(recipe.countryCode);
  const recipeName = recipe.name[lang];
  const countryName = lang === "en" ? country.country : country.countryBg;

  detailImage.src = recipe.image;
  detailImage.alt = recipeName;
  detailTitle.textContent = recipeName;
  detailCountry.textContent = `${recipe.flag} ${countryName}`;
  detailDescription.textContent = recipe.description[lang];
  detailPrepTime.textContent = recipe.prepTime;
  detailCookTime.textContent = recipe.cookTime;
  detailServings.textContent = String(recipe.servings);

  ingredientsTableBody.innerHTML = "";
  recipe.ingredients.forEach((ingredient) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="checkbox" class="ingredients-check" aria-label="${uiText[lang].check}" /></td>
      <td>${ingredient.amount}</td>
      <td>${ingredient.unit[lang]}</td>
      <td>${ingredient.name[lang]}</td>
    `;
    ingredientsTableBody.appendChild(row);
  });

  detailSteps.innerHTML = "";
  recipe.steps.forEach((stepObj) => {
    const li = document.createElement("li");
    li.textContent = stepObj.instruction[lang];
    detailSteps.appendChild(li);
  });

  gridView.classList.add("hidden");
  detailView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showGridView() {
  detailView.classList.add("hidden");
  gridView.classList.remove("hidden");
  selectedRecipeId = null;
}

function openRandomRecipe() {
  const pool = getFilteredRecipes();
  if (pool.length === 0) {
    return;
  }
  const randomIndex = Math.floor(Math.random() * pool.length);
  renderRecipeDetail(pool[randomIndex].id);
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
    renderRecipeDetail(target.dataset.id);
  }
});

ingredientsTableBody.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement) || !target.classList.contains("ingredients-check")) {
    return;
  }
  const row = target.closest("tr");
  if (row) {
    row.classList.toggle("ingredient-checked", target.checked);
  }
});

backToGridBtn.addEventListener("click", showGridView);
randomRecipeBtn.addEventListener("click", openRandomRecipe);

applyTranslations();
populateCountryDropdown();
renderRecipes();
