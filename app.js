const RECIPES_STORAGE_KEY = "my-international-kitchen-recipes";

let countries = [];
let recipes = [];

const uiText = {
  en: {
    appName: "My International Kitchen",
    recipeBook: "Recipe Book",
    heroTitle: "Discover Recipes from Around the World",
    heroSubtitle: "Choose a country and search by dish or ingredient.",
    countryLabel: "Country",
    searchLabel: "Search",
    searchPlaceholder: "Dish name or ingredient",
    recipesTitle: "Recipe Collection",
    ingredientsTitle: "Ingredients",
    ingredient: "Ingredient",
    unit: "Unit",
    amount: "Amount",
    instructionsTitle: "Instructions",
    prepTime: "Prep",
    cookTime: "Cook",
    servings: "Servings",
    temperature: "Temperature",
    bake: "Bake",
    fry: "Fry",
    boil: "Boil",
    grill: "Grill",
    roast: "Roast",
    simmer: "Simmer",
    steam: "Steam",
    viewDetails: "View Details",
    backToRecipes: "← Back to Recipes",
    noResults: "No results found. Try another country or keyword.",
    results: (count) => `Showing ${count} recipes`
  },
  bg: {
    appName: "Моята международна кухня",
    recipeBook: "Книга с рецепти",
    heroTitle: "Открийте рецепти от целия свят",
    heroSubtitle: "Изберете държава и търсете по ястие или съставка.",
    countryLabel: "Държава",
    searchLabel: "Търсене",
    searchPlaceholder: "Име на ястие или съставка",
    recipesTitle: "Колекция с рецепти",
    ingredientsTitle: "Съставки",
    ingredient: "Съставка",
    unit: "Мярка",
    amount: "Количество",
    instructionsTitle: "Инструкции",
    prepTime: "Приготвяне",
    cookTime: "Готвене",
    servings: "Порции",
    temperature: "Температура",
    bake: "Печене",
    fry: "Пържене",
    boil: "Варене",
    grill: "Печене на грил",
    roast: "Печене",
    simmer: "Задушаване",
    steam: "Загряване на пара",
    viewDetails: "Виж детайли",
    backToRecipes: "← Назад към рецептите",
    noResults: "Няма намерени резултати. Опитай друга държава или ключова дума.",
    results: (count) => `Показани рецепти: ${count}`
  }
};

let lang = "en";
let selectedRecipeId = null;
let currentRecipeId = null;

let countrySelect, searchInput, recipesGrid, resultsInfo, languageToggle;
let gridView, detailView, backToGridBtn, randomRecipeBtn, addRecipeBtn, recipeEditor, recipeForm, cancelEditBtn;
let editorTitle, editRecipeId, editCountryCode, editNameEn, editNameBg, editDescEn, editDescBg;
let editPrepTime, editCookTime, editServings, editImage, editIngredients, editSteps;
let detailImage, detailTitle, detailCountry, detailDescription, detailPrepTime, detailCookTime, detailServings;
let ingredientsTableBody, detailSteps;

function getCountryByCode(code) {
  return countries.find((country) => country.countryCode === code);
}

function getTranslatedCountryName(countryCode) {
  const country = getCountryByCode(countryCode);
  if (!country) return countryCode;
  return lang === 'bg' ? country.countryBg : country.country;
}

function isValidRecipeShape(recipe) {
  return !!(recipe && recipe.countryCode && recipe.name?.en && recipe.name?.bg && Array.isArray(recipe.ingredients) && recipe.ingredients.length && Array.isArray(recipe.steps) && recipe.steps.length && getCountryByCode(recipe.countryCode));
}

function sanitizeRecipe(recipe) {
  const country = getCountryByCode(recipe.countryCode);
  return {
    id: recipe.id,
    name: { en: recipe.name?.en || recipe.name?.bg || "Unknown", bg: recipe.name?.bg || recipe.name?.en || "Неизвестно" },
    description: { en: recipe.description?.en || recipe.description?.bg || "", bg: recipe.description?.bg || recipe.description?.en || "" },
    country: country?.country?.en || recipe.countryCode,
    countryCode: recipe.countryCode,
    flag: country?.flag || "🏳️",
    prepTime: recipe.prepTime || "30 min",
    cookTime: recipe.cookTime || "30 min",
    servings: recipe.servings || 4,
    image: recipe.image || `https://picsum.photos/seed/${recipe.id}/640/420`,
    ingredients: recipe.ingredients,
    steps: recipe.steps
  };
}

function mergeBaseWithSavedRecipes(savedRecipes) {
  const baseData = window.recipeData || [];
  const merged = new Map(baseData.map((recipe) => [String(recipe.id), recipe]));
  savedRecipes.forEach((recipe) => merged.set(String(recipe.id), recipe));
  return Array.from(merged.values());
}

function loadRecipes() {
  try {
    // Use window.recipeData as the base recipes source
    const baseData = window.recipeData || [];
    const saved = localStorage.getItem(RECIPES_STORAGE_KEY);
    if (!saved) {
      return [...baseData];
    }
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) {
      return [...baseData];
    }
    const valid = parsed.filter(isValidRecipeShape).map(sanitizeRecipe);
    return valid.length ? mergeBaseWithSavedRecipes(valid) : [...baseData];
  } catch {
    return window.recipeData || [];
  }
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((elem) => {
    const key = elem.getAttribute("data-i18n");
    if (uiText[lang][key]) {
      elem.textContent = uiText[lang][key];
    }
  });
}

function populateCountryDropdown() {
  if (!countrySelect) return;
  
  const currentValue = countrySelect.value;
  countrySelect.innerHTML = `<option value="all" data-en="All countries" data-bg="Всички държави">${lang === 'bg' ? 'Всички държави' : 'All countries'}</option>`;
  
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.countryCode;
    const countryName = lang === 'bg' ? country.countryBg : country.country;
    option.textContent = `${country.flag} ${countryName}`;
    countrySelect.appendChild(option);
  });
  
  countrySelect.value = currentValue;
}

function renderRecipes() {
  if (!recipesGrid || !resultsInfo) return;
  
  const selectedCountry = countrySelect?.value || "all";
  const searchTerm = searchInput?.value?.toLowerCase().trim() || "";
  
  const filtered = recipes.filter((recipe) => {
    const countryMatch = selectedCountry === "all" || recipe.countryCode === selectedCountry;
    const searchMatch = !searchTerm || 
      recipe.name[lang].toLowerCase().includes(searchTerm) ||
      recipe.description[lang].toLowerCase().includes(searchTerm) ||
      recipe.country.toLowerCase().includes(searchTerm);
    return countryMatch && searchMatch;
  });
  
  recipesGrid.innerHTML = "";
  filtered.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.setAttribute("data-country", recipe.countryCode);
    card.innerHTML = `
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.name[lang]}" loading="lazy" />
      <div class="recipe-meta">
        <h3 data-en="${recipe.name.en}" data-bg="${recipe.name.bg}">${recipe.name[lang]}</h3>
        <span class="country-pill">${recipe.flag} ${getTranslatedCountryName(recipe.countryCode)}</span>
      </div>
      <p class="recipe-description" data-en="${recipe.description.en}" data-bg="${recipe.description.bg}">${recipe.description[lang]}</p>
      <div class="editor-actions">
        <button class="details-btn" type="button" data-id="${recipe.id}" data-i18n="viewDetails" onclick="showRecipeDetail('${recipe.id}')">${uiText[lang].viewDetails}</button>
      </div>
    `;
    recipesGrid.appendChild(card);
  });
  
  resultsInfo.textContent = uiText[lang].results(filtered.length);
}

function renderRecipeDetail(recipeId) {
  const recipe = recipes.find((r) => String(r.id) === String(recipeId));
  if (!recipe) return;
  
  // Store current recipe ID for language switching
  currentRecipeId = recipeId;
  
    
  if (detailTitle) detailTitle.textContent = recipe.name[lang];
  if (detailCountry) detailCountry.textContent = `${recipe.flag} ${getTranslatedCountryName(recipe.countryCode)}`;
  if (detailDescription) detailDescription.textContent = recipe.description[lang];
  if (detailImage) {
    detailImage.src = recipe.image;
    detailImage.alt = recipe.name[lang];
  }
  if (detailPrepTime) detailPrepTime.textContent = `${uiText[lang].prepTime}: ${recipe.prepTime}`;
  if (detailCookTime) detailCookTime.textContent = `${uiText[lang].cookTime}: ${recipe.cookTime}`;
  if (detailServings) detailServings.textContent = `${uiText[lang].servings}: ${recipe.servings}`;
  
  if (ingredientsTableBody) {
    ingredientsTableBody.innerHTML = "";
    recipe.ingredients.forEach((ingredient) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><input type="checkbox" class="ingredients-check" aria-label="Check" /></td>
        <td>${ingredient.amount}</td>
        <td>${ingredient.unit[lang]}</td>
        <td>${ingredient.name[lang]}</td>
      `;
      ingredientsTableBody.appendChild(row);
    });
  }
  
  if (detailSteps) {
    detailSteps.innerHTML = "";
    recipe.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step.instruction[lang];
      detailSteps.appendChild(li);
    });
  }
  
  if (gridView) gridView.classList.add("hidden");
  if (detailView) detailView.classList.remove("hidden");
  
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showGridView() {
  if (detailView) detailView.classList.add("hidden");
  if (gridView) gridView.classList.remove("hidden");
  selectedRecipeId = null;
}

function openRandomRecipe() {
  const availableRecipes = recipes.filter((recipe) => {
    const card = document.querySelector(`[data-id="${recipe.id}"]`);
    return card && card.style.display !== "none";
  });
  
  if (availableRecipes.length === 0) {
    alert(uiText[lang].noResults);
    return;
  }
  
  const randomRecipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];
  renderRecipeDetail(randomRecipe.id);
}

function toggleLanguage() {
  lang = lang === "en" ? "bg" : "en";
  document.documentElement.lang = lang;
  // Make lang available globally for HTML function
  window.lang = lang;
  
    
  if (languageToggle) languageToggle.textContent = lang === "en" ? "BG" : "EN";
  applyTranslations();
  populateCountryDropdown();
  renderRecipes();
  
  // Re-render recipe details if currently viewing a recipe
  if (currentRecipeId && detailView && !detailView.classList.contains('hidden')) {
    showRecipeDetail(currentRecipeId);
  }
}

function initializeApp() {
  countrySelect = document.getElementById("countrySelect");
  searchInput = document.getElementById("searchInput");
  recipesGrid = document.getElementById("recipesGrid");
  resultsInfo = document.getElementById("resultsInfo");
  languageToggle = document.getElementById("languageToggle");
  
  gridView = document.getElementById("gridView");
  detailView = document.getElementById("detailView");
  backToGridBtn = document.getElementById("backToGridBtn");
  randomRecipeBtn = document.getElementById("randomRecipeBtn");
  addRecipeBtn = document.getElementById("addRecipeBtn");
  recipeEditor = document.getElementById("recipeEditor");
  recipeForm = document.getElementById("recipeForm");
  cancelEditBtn = document.getElementById("cancelEditBtn");
  editorTitle = document.getElementById("editorTitle");
  editRecipeId = document.getElementById("editRecipeId");
  editCountryCode = document.getElementById("editCountryCode");
  editNameEn = document.getElementById("editNameEn");
  editNameBg = document.getElementById("editNameBg");
  editDescEn = document.getElementById("editDescEn");
  editDescBg = document.getElementById("editDescBg");
  editPrepTime = document.getElementById("editPrepTime");
  editCookTime = document.getElementById("editCookTime");
  editServings = document.getElementById("editServings");
  editImage = document.getElementById("editImage");
  editIngredients = document.getElementById("editIngredients");
  editSteps = document.getElementById("editSteps");
  detailImage = document.getElementById("detailImage");
  detailTitle = document.getElementById("detailTitle");
  detailCountry = document.getElementById("detailCountry");
  detailDescription = document.getElementById("detailDescription");
  detailPrepTime = document.getElementById("detailPrepTime");
  detailCookTime = document.getElementById("detailCookTime");
  detailServings = document.getElementById("detailServings");
  ingredientsTableBody = document.getElementById("ingredientsTableBody");
  detailSteps = document.getElementById("detailSteps");
  
  countries = window.countriesData || [];
  
  // Initialize global lang variable
  window.lang = lang;
  document.documentElement.lang = lang;
  
  recipes = loadRecipes();
  
  if (countries.length === 0 || recipes.length === 0) {
    console.error("Data not properly loaded!");
    return;
  }
  
  applyTranslations();
  populateCountryDropdown();
  renderRecipes();
  
  if (countrySelect) countrySelect.addEventListener("change", renderRecipes);
  if (searchInput) searchInput.addEventListener("input", renderRecipes);
  if (backToGridBtn) backToGridBtn.addEventListener("click", showGridView);
  if (randomRecipeBtn) randomRecipeBtn.addEventListener("click", openRandomRecipe);
  if (languageToggle) languageToggle.addEventListener("click", toggleLanguage);
}

document.addEventListener("DOMContentLoaded", initializeApp);
