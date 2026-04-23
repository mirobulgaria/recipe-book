const countryCatalog = [
  { country: "Bulgaria", countryBg: "България", countryCode: "BG", flag: "🇧🇬" },
  { country: "Italy", countryBg: "Италия", countryCode: "IT", flag: "🇮🇹" },
  { country: "Japan", countryBg: "Япония", countryCode: "JP", flag: "🇯🇵" },
  { country: "France", countryBg: "Франция", countryCode: "FR", flag: "🇫🇷" },
  { country: "Mexico", countryBg: "Мексико", countryCode: "MX", flag: "🇲🇽" },
  { country: "India", countryBg: "Индия", countryCode: "IN", flag: "🇮🇳" },
  { country: "Greece", countryBg: "Гърция", countryCode: "GR", flag: "🇬🇷" },
  { country: "Turkey", countryBg: "Турция", countryCode: "TR", flag: "🇹🇷" },
  { country: "China", countryBg: "Китай", countryCode: "CN", flag: "🇨🇳" },
  { country: "Spain", countryBg: "Испания", countryCode: "ES", flag: "🇪🇸" }
];

const baseRecipes = [
  {
    countryCode: "BG",
    name: { en: "Banitsa", bg: "Баница" },
    description: { en: "Layered pastry with eggs and white cheese.", bg: "Традиционна баница с яйца и сирене." },
    prepTime: "20 min",
    cookTime: "35 min",
    servings: 6,
    ingredients: [
      { name: { en: "Phyllo pastry", bg: "Кори за баница" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "White cheese", bg: "Сирене" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "4", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mix eggs and crumbled cheese.", bg: "Смесете яйцата и натрошеното сирене." } },
      { step: 2, instruction: { en: "Layer pastry sheets with filling.", bg: "Редете кори с плънка." } },
      { step: 3, instruction: { en: "Bake until golden.", bg: "Изпечете до златисто." } }
    ]
  },
  {
    countryCode: "BG",
    name: { en: "Shopska Salad", bg: "Шопска салата" },
    description: { en: "Fresh tomato-cucumber salad with white cheese.", bg: "Свежа салата с домати, краставици и сирене." },
    prepTime: "15 min",
    cookTime: "0 min",
    servings: 4,
    ingredients: [
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Cucumber", bg: "Краставица" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "White cheese", bg: "Сирене" }, amount: "150", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Chop vegetables.", bg: "Нарежете зеленчуците." } },
      { step: 2, instruction: { en: "Season with oil and salt.", bg: "Овкусете с олио и сол." } },
      { step: 3, instruction: { en: "Top with grated cheese.", bg: "Поръсете с настъргано сирене." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Carbonara", bg: "Карбонара" },
    description: { en: "Classic pasta with egg, cheese, and pancetta.", bg: "Класическа паста с яйца, сирене и панчета." },
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 4,
    ingredients: [
      { name: { en: "Spaghetti", bg: "Спагети" }, amount: "320", unit: { en: "g", bg: "г" } },
      { name: { en: "Pancetta", bg: "Панчета" }, amount: "120", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "4", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook pasta al dente.", bg: "Сварете пастата ал денте." } },
      { step: 2, instruction: { en: "Cook pancetta until crisp.", bg: "Запържете панчетата до хрупкаво." } },
      { step: 3, instruction: { en: "Mix hot pasta with egg-cheese mixture.", bg: "Смесете горещата паста с яйчено-сирената смес." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Margherita Pizza", bg: "Пица Маргерита" },
    description: { en: "Thin crust pizza with tomato, mozzarella, and basil.", bg: "Тънка пица с домати, моцарела и босилек." },
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Pizza dough", bg: "Тесто за пица" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Tomato sauce", bg: "Доматен сос" }, amount: "180", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Mozzarella", bg: "Моцарела" }, amount: "220", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Stretch dough and spread sauce.", bg: "Разточете тестото и нанесете соса." } },
      { step: 2, instruction: { en: "Add mozzarella and bake hot.", bg: "Добавете моцарела и печете на силна фурна." } },
      { step: 3, instruction: { en: "Finish with basil.", bg: "Добавете босилек накрая." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Ramen", bg: "Рамен" },
    description: { en: "Noodle soup with savory broth and toppings.", bg: "Супа с нудли и ароматен бульон." },
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 4,
    ingredients: [
      { name: { en: "Ramen noodles", bg: "Рамен нудли" }, amount: "4", unit: { en: "portions", bg: "порции" } },
      { name: { en: "Broth", bg: "Бульон" }, amount: "1.2", unit: { en: "l", bg: "л" } },
      { name: { en: "Miso paste", bg: "Мисо паста" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Heat broth and add miso.", bg: "Загрейте бульона и добавете мисо." } },
      { step: 2, instruction: { en: "Cook noodles separately.", bg: "Сварете нудлите отделно." } },
      { step: 3, instruction: { en: "Assemble bowls with toppings.", bg: "Сглобете купите с добавки." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Sushi Rice", bg: "Суши ориз" },
    description: { en: "Seasoned rice base for sushi rolls and bowls.", bg: "Овкусен ориз за суши рулца и купи." },
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 5,
    ingredients: [
      { name: { en: "Japanese rice", bg: "Японски ориз" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Rice vinegar", bg: "Оризов оцет" }, amount: "60", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Rinse and cook rice.", bg: "Измийте и сварете ориза." } },
      { step: 2, instruction: { en: "Mix vinegar, sugar, and salt.", bg: "Смесете оцет, захар и сол." } },
      { step: 3, instruction: { en: "Fold seasoning into warm rice.", bg: "Овкусете топлия ориз внимателно." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Ratatouille", bg: "Рататуй" },
    description: { en: "Stewed vegetables in tomato-herb sauce.", bg: "Задушени зеленчуци в доматен сос с билки." },
    prepTime: "20 min",
    cookTime: "45 min",
    servings: 4,
    ingredients: [
      { name: { en: "Eggplant", bg: "Патладжан" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Zucchini", bg: "Тиквичка" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "4", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Slice all vegetables.", bg: "Нарежете всички зеленчуци." } },
      { step: 2, instruction: { en: "Saute aromatics and add tomatoes.", bg: "Запържете ароматните зеленчуци и добавете домати." } },
      { step: 3, instruction: { en: "Simmer until tender.", bg: "Оставете да къкри до омекване." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Crepes", bg: "Креп" },
    description: { en: "Thin French pancakes served sweet or savory.", bg: "Тънки френски палачинки - сладки или солени." },
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Flour", bg: "Брашно" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Milk", bg: "Мляко" }, amount: "450", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "3", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Whisk batter until smooth.", bg: "Разбийте гладко тесто." } },
      { step: 2, instruction: { en: "Rest batter briefly.", bg: "Оставете тестото да почине." } },
      { step: 3, instruction: { en: "Cook thin crepes in hot pan.", bg: "Изпечете тънки палачинки в горещ тиган." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Tacos", bg: "Такос" },
    description: { en: "Warm tortillas with flavorful fillings.", bg: "Тортили с ароматни плънки." },
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 4,
    ingredients: [
      { name: { en: "Tortillas", bg: "Тортили" }, amount: "10", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Chicken", bg: "Пиле" }, amount: "450", unit: { en: "g", bg: "г" } },
      { name: { en: "Salsa", bg: "Салса" }, amount: "120", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook and season protein.", bg: "Сгответе и овкусете месото." } },
      { step: 2, instruction: { en: "Warm tortillas.", bg: "Затоплете тортилите." } },
      { step: 3, instruction: { en: "Fill and serve with salsa.", bg: "Напълнете и сервирайте със салса." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Guacamole", bg: "Гуакамоле" },
    description: { en: "Creamy avocado dip with lime and onion.", bg: "Кремообразен дип с авокадо, лайм и лук." },
    prepTime: "10 min",
    cookTime: "0 min",
    servings: 4,
    ingredients: [
      { name: { en: "Avocado", bg: "Авокадо" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Lime juice", bg: "Сок от лайм" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Onion", bg: "Лук" }, amount: "0.5", unit: { en: "pc", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mash avocado.", bg: "Намачкайте авокадото." } },
      { step: 2, instruction: { en: "Mix in chopped onion and lime.", bg: "Добавете ситно нарязан лук и лайм." } },
      { step: 3, instruction: { en: "Season and serve fresh.", bg: "Овкусете и сервирайте веднага." } }
    ]
  },
  {
    countryCode: "IN",
    name: { en: "Butter Chicken", bg: "Бътър Чикън" },
    description: { en: "Creamy tomato curry with tender chicken.", bg: "Кремообразно доматено къри с крехко пиле." },
    prepTime: "20 min",
    cookTime: "35 min",
    servings: 4,
    ingredients: [
      { name: { en: "Chicken thighs", bg: "Пилешко бутче без кост" }, amount: "600", unit: { en: "g", bg: "г" } },
      { name: { en: "Tomato puree", bg: "Доматено пюре" }, amount: "300", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Cream", bg: "Сметана" }, amount: "120", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Marinate chicken with spices.", bg: "Мариновайте пилето с подправки." } },
      { step: 2, instruction: { en: "Cook sauce and simmer chicken.", bg: "Пригответе соса и задушете пилето." } },
      { step: 3, instruction: { en: "Finish with butter and cream.", bg: "Завършете с масло и сметана." } }
    ]
  },
  {
    countryCode: "IN",
    name: { en: "Dal", bg: "Дал" },
    description: { en: "Comforting lentil stew with spices.", bg: "Утешителна леща с индийски подправки." },
    prepTime: "10 min",
    cookTime: "30 min",
    servings: 5,
    ingredients: [
      { name: { en: "Red lentils", bg: "Червена леща" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Onion", bg: "Лук" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Turmeric", bg: "Куркума" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Boil lentils until soft.", bg: "Сварете лещата до омекване." } },
      { step: 2, instruction: { en: "Saute onion with spices.", bg: "Запържете лук с подправки." } },
      { step: 3, instruction: { en: "Combine and simmer briefly.", bg: "Смесете и оставете да къкри." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Moussaka", bg: "Мусака" },
    description: { en: "Baked casserole with eggplant, meat, and bechamel.", bg: "Запеканка с патладжан, месо и бешамел." },
    prepTime: "30 min",
    cookTime: "50 min",
    servings: 6,
    ingredients: [
      { name: { en: "Eggplant", bg: "Патладжан" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Ground beef", bg: "Телешка кайма" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Milk", bg: "Мляко" }, amount: "400", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Prepare eggplant slices.", bg: "Подгответе резените патладжан." } },
      { step: 2, instruction: { en: "Cook meat sauce.", bg: "Пригответе месния сос." } },
      { step: 3, instruction: { en: "Layer, top with bechamel, and bake.", bg: "Подредете слоеве, залейте с бешамел и печете." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Tzatziki", bg: "Дзадзики" },
    description: { en: "Yogurt dip with cucumber, garlic, and dill.", bg: "Кисело мляко с краставица, чесън и копър." },
    prepTime: "12 min",
    cookTime: "0 min",
    servings: 4,
    ingredients: [
      { name: { en: "Greek yogurt", bg: "Гръцко кисело мляко" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Cucumber", bg: "Краставица" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "2", unit: { en: "cloves", bg: "скилидки" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Grate and drain cucumber.", bg: "Настържете и отцедете краставицата." } },
      { step: 2, instruction: { en: "Mix with yogurt and garlic.", bg: "Смесете с млякото и чесъна." } },
      { step: 3, instruction: { en: "Chill before serving.", bg: "Охладете преди сервиране." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Kebap", bg: "Кебап" },
    description: { en: "Grilled seasoned meat served with flatbread.", bg: "Овкусено месо на скара, сервирано с хляб." },
    prepTime: "20 min",
    cookTime: "20 min",
    servings: 4,
    ingredients: [
      { name: { en: "Ground lamb", bg: "Агнешка кайма" }, amount: "550", unit: { en: "g", bg: "г" } },
      { name: { en: "Onion", bg: "Лук" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Paprika", bg: "Червен пипер" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mix meat with onion and spices.", bg: "Смесете месото с лук и подправки." } },
      { step: 2, instruction: { en: "Shape and grill.", bg: "Оформете и изпечете на скара." } },
      { step: 3, instruction: { en: "Serve with flatbread.", bg: "Сервирайте с плосък хляб." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Baklava", bg: "Баклава" },
    description: { en: "Sweet layered pastry with nuts and syrup.", bg: "Сладък десерт с кори, ядки и сироп." },
    prepTime: "25 min",
    cookTime: "40 min",
    servings: 8,
    ingredients: [
      { name: { en: "Phyllo pastry", bg: "Фини кори" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Walnuts", bg: "Орехи" }, amount: "250", unit: { en: "g", bg: "г" } },
      { name: { en: "Sugar syrup", bg: "Захарен сироп" }, amount: "300", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Layer pastry and chopped nuts.", bg: "Редете кори и нарязани ядки." } },
      { step: 2, instruction: { en: "Bake until golden brown.", bg: "Печете до златисто." } },
      { step: 3, instruction: { en: "Pour syrup over warm baklava.", bg: "Залейте топлата баклава със сироп." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Fried Rice", bg: "Пържен ориз" },
    description: { en: "Quick wok rice dish with vegetables and egg.", bg: "Бързо уок ястие с ориз, зеленчуци и яйце." },
    prepTime: "12 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Cooked rice", bg: "Сварен ориз" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Mixed vegetables", bg: "Смесени зеленчуци" }, amount: "200", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Scramble eggs in hot wok.", bg: "Разбъркайте яйцата в горещ уок." } },
      { step: 2, instruction: { en: "Add vegetables and stir-fry.", bg: "Добавете зеленчуците и запържете." } },
      { step: 3, instruction: { en: "Add rice and season.", bg: "Добавете ориза и овкусете." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Dumplings", bg: "Дъмплинги" },
    description: { en: "Stuffed dumplings steamed or pan-fried.", bg: "Пълнени кнедли, на пара или запържени." },
    prepTime: "30 min",
    cookTime: "12 min",
    servings: 5,
    ingredients: [
      { name: { en: "Dumpling wrappers", bg: "Кори за дъмплинги" }, amount: "30", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Ground pork", bg: "Свинска кайма" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Cabbage", bg: "Зеле" }, amount: "150", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mix filling ingredients.", bg: "Смесете продуктите за плънката." } },
      { step: 2, instruction: { en: "Fill and seal wrappers.", bg: "Напълнете и затворете корите." } },
      { step: 3, instruction: { en: "Steam or pan-fry until cooked.", bg: "Гответе на пара или в тиган до готовност." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Paella", bg: "Паеля" },
    description: { en: "Saffron rice with seafood and vegetables.", bg: "Ориз със шафран, морски дарове и зеленчуци." },
    prepTime: "20 min",
    cookTime: "35 min",
    servings: 6,
    ingredients: [
      { name: { en: "Paella rice", bg: "Ориз за паеля" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Seafood mix", bg: "Микс морски дарове" }, amount: "350", unit: { en: "g", bg: "г" } },
      { name: { en: "Saffron", bg: "Шафран" }, amount: "1", unit: { en: "pinch", bg: "щипка" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Saute vegetables and rice.", bg: "Запържете зеленчуците и ориза." } },
      { step: 2, instruction: { en: "Add broth, saffron, and seafood.", bg: "Добавете бульон, шафран и морски дарове." } },
      { step: 3, instruction: { en: "Cook until rice absorbs liquid.", bg: "Гответе, докато оризът поеме течността." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Gazpacho", bg: "Гаспачо" },
    description: { en: "Cold tomato soup with cucumber and peppers.", bg: "Студена доматена супа с краставица и чушка." },
    prepTime: "15 min",
    cookTime: "0 min",
    servings: 4,
    ingredients: [
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Cucumber", bg: "Краставица" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Red pepper", bg: "Червена чушка" }, amount: "1", unit: { en: "pc", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Blend all vegetables until smooth.", bg: "Пасирайте зеленчуците до гладкост." } },
      { step: 2, instruction: { en: "Season with oil, vinegar, and salt.", bg: "Овкусете със зехтин, оцет и сол." } },
      { step: 3, instruction: { en: "Chill before serving.", bg: "Охладете преди сервиране." } }
    ]
  }
];

function buildUniqueRecipeDataset() {
  const allRecipes = [];

  for (const countryMeta of countryCatalog) {
    const recipesForCountry = baseRecipes.filter((recipe) => recipe.countryCode === countryMeta.countryCode);

    recipesForCountry.forEach((recipe, index) => {
      allRecipes.push({
        id: `${countryMeta.countryCode}-${index + 1}`,
        country: countryMeta.country,
        countryCode: countryMeta.countryCode,
        flag: countryMeta.flag,
        name: { ...recipe.name },
        description: { ...recipe.description },
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        servings: recipe.servings,
        ingredients: recipe.ingredients.map((ingredient) => ({
          name: { ...ingredient.name },
          amount: ingredient.amount,
          unit: { ...ingredient.unit }
        })),
        steps: recipe.steps.map((stepItem, stepIndex) => ({
          step: stepIndex + 1,
          instruction: { ...stepItem.instruction }
        })),
        image: `https://picsum.photos/seed/${countryMeta.countryCode.toLowerCase()}-${index + 1}/640/420`
      });
    });
  }

  return allRecipes;
}

function normalizeText(value) {
  return String(value).trim().toLowerCase();
}

function recipeContentSignature(recipe) {
  const ingredientsSignature = recipe.ingredients
    .map((ingredient) => [
      normalizeText(ingredient.name.en),
      normalizeText(ingredient.name.bg),
      normalizeText(ingredient.amount),
      normalizeText(ingredient.unit.en),
      normalizeText(ingredient.unit.bg)
    ].join("|"))
    .join(";");

  const stepsSignature = recipe.steps
    .map((step) => `${normalizeText(step.instruction.en)}|${normalizeText(step.instruction.bg)}`)
    .join(";");

  return `${ingredientsSignature}::${stepsSignature}`;
}

function removeDuplicateRecipesByContent(recipesList) {
  const seen = new Set();
  const uniqueRecipes = [];

  recipesList.forEach((recipe) => {
    const signature = recipeContentSignature(recipe);
    if (seen.has(signature)) {
      return;
    }
    seen.add(signature);
    uniqueRecipes.push(recipe);
  });

  return uniqueRecipes;
}

window.countriesData = countryCatalog;
window.recipeData = removeDuplicateRecipesByContent(buildUniqueRecipeDataset());
