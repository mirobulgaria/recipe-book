const RECIPES_STORAGE_KEY = "my-international-kitchen-recipes";

// Get data from window, will be loaded in initialization
let countries = [];
let baseRecipes = [];
let recipes = [];

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
    addRecipe: "Add recipe",
    editRecipe: "Edit recipe",
    saveRecipe: "Save recipe",
    cancel: "Cancel",
    deleteRecipe: "Delete Recipe",
    nameEn: "Name (EN)",
    nameBg: "Name (BG)",
    descEn: "Description (EN)",
    descBg: "Description (BG)",
    image: "Image URL",
    ingredientsFormat: "Ingredients (one per line: amount|unitEn|unitBg|nameEn|nameBg)",
    stepsFormat: "Steps (one per line: instructionEn|instructionBg)",
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
    addRecipe: "Добави рецепта",
    editRecipe: "Редактирай",
    saveRecipe: "Запази рецепта",
    cancel: "Отказ",
    deleteRecipe: "Изтрий Рецепта",
    nameEn: "Име (EN)",
    nameBg: "Име (BG)",
    descEn: "Описание (EN)",
    descBg: "Описание (BG)",
    image: "URL на снимка",
    ingredientsFormat: "Съставки (по един ред: количество|ед.EN|ед.BG|име.EN|име.BG)",
    stepsFormat: "Стъпки (по един ред: инструкция.EN|инструкция.BG)",
    allCountries: "Всички държави",
    details: "Виж Детайли",
    noResults: "Няма намерени резултати. Опитай друга държава или ключова дума.",
    results: (count) => `Показани рецепти: ${count}`
  }
};

let lang = "en";
let selectedRecipeId = null;

// DOM elements - will be initialized in initializeApp()
let countrySelect, searchInput, recipesGrid, resultsInfo, languageToggle;
let gridView, detailView, backToGridBtn, randomRecipeBtn, addRecipeBtn, recipeEditor, recipeForm, cancelEditBtn;
let editorTitle, editRecipeId, editCountryCode, editNameEn, editNameBg, editDescEn, editDescBg;
let editPrepTime, editCookTime, editServings, editImage, editIngredients, editSteps;
let detailImage, detailTitle, detailCountry, detailDescription, detailPrepTime, detailCookTime, detailServings;
let ingredientsTableBody, detailSteps;

function getCountryByCode(code) {
  return countries.find((country) => country.countryCode === code);
}

function isValidRecipeShape(recipe) {
  return !!(recipe && recipe.countryCode && recipe.name?.en && recipe.name?.bg && Array.isArray(recipe.ingredients) && recipe.ingredients.length && Array.isArray(recipe.steps) && recipe.steps.length && getCountryByCode(recipe.countryCode));
}

function sanitizeRecipe(recipe) {
  const country = getCountryByCode(recipe.countryCode);
  return {
    id: recipe.id || `custom-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    country: recipe.country || country.country,
    countryCode: country.countryCode,
    flag: recipe.flag || country.flag,
    name: { en: String(recipe.name?.en || "").trim(), bg: String(recipe.name?.bg || "").trim() },
    description: { en: String(recipe.description?.en || "").trim(), bg: String(recipe.description?.bg || "").trim() },
    prepTime: String(recipe.prepTime || "").trim(),
    cookTime: String(recipe.cookTime || "").trim(),
    servings: Number(recipe.servings || 1),
    ingredients: recipe.ingredients.map((item) => ({
      amount: String(item.amount || "").trim(),
      unit: { en: String(item.unit?.en || "").trim(), bg: String(item.unit?.bg || "").trim() },
      name: { en: String(item.name?.en || "").trim(), bg: String(item.name?.bg || "").trim() }
    })),
    steps: recipe.steps.map((item, index) => ({
      step: index + 1,
      instruction: { en: String(item.instruction?.en || "").trim(), bg: String(item.instruction?.bg || "").trim() }
    })),
    image: String(recipe.image || "").trim() || "https://picsum.photos/seed/fallback/640/420"
  };
}

function mergeBaseWithSavedRecipes(savedRecipes) {
  const merged = new Map(baseRecipes.map((recipe) => [String(recipe.id), recipe]));
  savedRecipes.forEach((recipe) => merged.set(String(recipe.id), recipe));
  return Array.from(merged.values());
}

function loadRecipes() {
  try {
    const saved = localStorage.getItem(RECIPES_STORAGE_KEY);
    if (!saved) {
      return [...baseRecipes];
    }
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) {
      return [...baseRecipes];
    }
    const valid = parsed.filter(isValidRecipeShape).map(sanitizeRecipe);
    return valid.length ? mergeBaseWithSavedRecipes(valid) : [...baseRecipes];
  } catch {
    return [...baseRecipes];
  }
}

function persistRecipes() {
  localStorage.setItem(RECIPES_STORAGE_KEY, JSON.stringify(recipes));
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
  if (editorTitle && editRecipeId) {
    editorTitle.textContent = editRecipeId.value ? text.editRecipe : text.addRecipe;
  }
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
  populateEditorCountryDropdown();
}

function populateEditorCountryDropdown() {
  if (!editCountryCode) {
    return;
  }
  const selected = editCountryCode.value || countries[0]?.countryCode || "";
  editCountryCode.innerHTML = "";
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.countryCode;
    option.textContent = `${country.flag} ${lang === "en" ? country.country : country.countryBg}`;
    editCountryCode.appendChild(option);
  });
  editCountryCode.value = selected;
}

function matchesQuery(recipe, query) {
  if (!query) {
    return true;
  }
  const q = query.toLowerCase();
  const name = `${recipe.name.en} ${recipe.name.bg}`.toLowerCase();
  const ingredients = recipe.ingredients.map((i) => `${i.name.en} ${i.name.bg}`).join(" ").toLowerCase();
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
  if (!filtered.length) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.textContent = text.noResults;
    recipesGrid.appendChild(noResults);
    return;
  }
  filtered.forEach((recipe) => {
    const country = getCountryByCode(recipe.countryCode);
    if (!country) {
      return;
    }
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.innerHTML = `
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.name[lang]}" loading="lazy" />
      <div class="recipe-meta">
        <h3>${recipe.name[lang]}</h3>
        <span class="country-pill">${recipe.flag} ${lang === "en" ? country.country : country.countryBg}</span>
      </div>
      <p class="recipe-description">${recipe.description[lang]}</p>
      <div class="editor-actions">
        <button class="details-btn" type="button" data-id="${recipe.id}">${text.details}</button>
        <button class="back-btn edit-btn" type="button" data-edit-id="${recipe.id}">${text.editRecipe}</button>
      </div>
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
  detailImage.src = recipe.image;
  detailImage.alt = recipe.name[lang];
  detailTitle.textContent = recipe.name[lang];
  detailCountry.textContent = `${recipe.flag} ${lang === "en" ? country.country : country.countryBg}`;
  detailDescription.textContent = recipe.description[lang];
  detailPrepTime.textContent = recipe.prepTime;
  detailCookTime.textContent = recipe.cookTime;
  detailServings.textContent = String(recipe.servings);
  ingredientsTableBody.innerHTML = "";
  recipe.ingredients.forEach((ingredient) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td><input type="checkbox" class="ingredients-check" aria-label="${uiText[lang].check}" /></td><td>${ingredient.amount}</td><td>${ingredient.unit[lang]}</td><td>${ingredient.name[lang]}</td>`;
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

function openEditor(recipe = null) {
  if (!recipeEditor || !recipeForm || !editRecipeId) {
    return;
  }
  if (recipe) {
    editRecipeId.value = recipe.id;
    editCountryCode.value = recipe.countryCode;
    editNameEn.value = recipe.name.en;
    editNameBg.value = recipe.name.bg;
    editDescEn.value = recipe.description.en;
    editDescBg.value = recipe.description.bg;
    editPrepTime.value = recipe.prepTime;
    editCookTime.value = recipe.cookTime;
    editServings.value = String(recipe.servings);
    editImage.value = recipe.image;
    editIngredients.value = recipe.ingredients.map((item) => `${item.amount}|${item.unit.en}|${item.unit.bg}|${item.name.en}|${item.name.bg}`).join("\n");
    editSteps.value = recipe.steps.map((step) => `${step.instruction.en}|${step.instruction.bg}`).join("\n");
  } else {
    editRecipeId.value = "";
    recipeForm.reset();
    populateEditorCountryDropdown();
  }
  editorTitle.textContent = recipe ? uiText[lang].editRecipe : uiText[lang].addRecipe;
  recipeEditor.classList.remove("hidden");
  recipeEditor.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeEditor() {
  if (!recipeEditor) {
    return;
  }
  recipeEditor.classList.add("hidden");
}

function parseIngredients(inputText) {
  return inputText.split("\n").map((line) => line.trim()).filter(Boolean).map((line) => {
    const [amount, unitEn, unitBg, nameEn, nameBg] = line.split("|").map((x) => (x || "").trim());
    return { amount, unit: { en: unitEn, bg: unitBg }, name: { en: nameEn, bg: nameBg } };
  });
}

function parseSteps(inputText) {
  return inputText.split("\n").map((line) => line.trim()).filter(Boolean).map((line, index) => {
    const [en, bg] = line.split("|").map((x) => (x || "").trim());
    return { step: index + 1, instruction: { en, bg } };
  });
}

function buildRecipeFromForm() {
  const country = getCountryByCode(editCountryCode.value);
  const ingredients = parseIngredients(editIngredients.value);
  const steps = parseSteps(editSteps.value);
  if (!ingredients.length || !steps.length) {
    throw new Error("Please provide at least one ingredient and one step.");
  }
  return {
    id: editRecipeId.value || `custom-${Date.now()}`,
    country: country.country,
    countryCode: country.countryCode,
    flag: country.flag,
    name: { en: editNameEn.value.trim(), bg: editNameBg.value.trim() },
    description: { en: editDescEn.value.trim(), bg: editDescBg.value.trim() },
    prepTime: editPrepTime.value.trim(),
    cookTime: editCookTime.value.trim(),
    servings: Number(editServings.value),
    ingredients,
    steps,
    image: editImage.value.trim()
  };
}

function openRandomRecipe() {
  const pool = getFilteredRecipes();
  if (!pool.length) {
    return;
  }
  const randomIndex = Math.floor(Math.random() * pool.length);
  renderRecipeDetail(pool[randomIndex].id);
}

// ===== Event Listeners =====
// Test if language toggle exists and add debugging
if (languageToggle) {
  console.log("🔍 Language toggle element found:", languageToggle);
  languageToggle.addEventListener("click", () => {
    console.log("🔄 Language toggle clicked! Current lang:", lang);
    lang = lang === "en" ? "bg" : "en";
    console.log("🔄 New lang:", lang);
    console.log("🔄 Applying translations...");
    applyTranslations();
    console.log("🔄 Populating country dropdown...");
    populateCountryDropdown();
    console.log("🔄 Rendering recipes...");
    renderRecipes();
    console.log("✅ Language switch completed!");
  });
} else {
  console.error("❌ Language toggle element not found!");
}

// Event listeners will be attached in initializeApp after DOM elements are ready

if (recipeForm) {
  recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      const recipe = buildRecipeFromForm();
      const index = recipes.findIndex((item) => String(item.id) === String(recipe.id));
      if (index >= 0) {
        recipes[index] = recipe;
      } else {
        recipes.unshift(recipe);
      }
      persistRecipes();
      closeEditor();
      renderRecipes();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Invalid recipe data.");
    }
  });
}

// ===== APP INITIALIZATION =====
function initializeApp() {
  // Initialize DOM elements
  countrySelect = document.getElementById("countrySelect");
  searchInput = document.getElementById("searchInput");
  recipesGrid = document.getElementById("recipesGrid");
  resultsInfo = document.getElementById("resultsInfo");
  languageToggle = document.getElementById("languageToggle");
  
  // Initialize detail view elements
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
  
  // Load data from window (recipes-data.js should have set these)
  countries = window.countriesData || [];
  // baseRecipes is already populated from recipes-data.js
  
  recipes = loadRecipes();
  
  if (countries.length === 0 || recipes.length === 0) {
    console.error("Data not properly loaded!");
    return;
  }
  
  applyTranslations();
  populateCountryDropdown();
  renderRecipes();
  
  // Attach event listeners after DOM elements are ready
  countrySelect.addEventListener("change", renderRecipes);
  searchInput.addEventListener("input", renderRecipes);

  recipesGrid.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.matches("[data-id]")) {
      renderRecipeDetail(target.dataset.id);
      return;
    }
    if (target instanceof HTMLElement && target.matches("[data-edit-id]")) {
      const recipe = recipes.find((item) => String(item.id) === String(target.dataset.editId));
      if (recipe) {
        openEditor(recipe);
      }
    }
  });

  backToGridBtn.addEventListener("click", showGridView);
  randomRecipeBtn.addEventListener("click", openRandomRecipe);

  if (addRecipeBtn) {
    addRecipeBtn.addEventListener("click", () => openEditor());
  }

  if (cancelEditBtn) {
    cancelEditBtn.addEventListener("click", closeEditor);
  }
}

// Wait for DOM to be ready, then initialize
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  // DOM is already ready
  initializeApp();
}

// Also try to initialize immediately as backup
setTimeout(() => {
  if (recipes.length === 0) {
    console.log("⚠️ Backup initialization triggered");
    initializeApp();
  }
}, 500);
