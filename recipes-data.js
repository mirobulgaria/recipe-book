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
  },
  {
    countryCode: "BG",
    name: { en: "Tarator", bg: "Таратор" },
    description: { en: "Cold yogurt soup with cucumber, garlic, and dill.", bg: "Студена супа с кисело мляко, краставица, чесън и копър." },
    prepTime: "10 min",
    cookTime: "0 min",
    servings: 4,
    ingredients: [
      { name: { en: "Yogurt", bg: "Кисело мляко" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Cucumber", bg: "Краставица" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "2", unit: { en: "cloves", bg: "скилидки" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Dice cucumber and crush garlic.", bg: "Нарежете краставицата и счукайте чесъна." } },
      { step: 2, instruction: { en: "Mix with yogurt and cold water.", bg: "Смесете с киселото мляко и студена вода." } },
      { step: 3, instruction: { en: "Season and chill before serving.", bg: "Овкусете и охладете преди сервиране." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Minestrone", bg: "Минестроне" },
    description: { en: "Hearty vegetable soup with beans and pasta.", bg: "Питателна зеленчукова супа с боб и паста." },
    prepTime: "15 min",
    cookTime: "35 min",
    servings: 5,
    ingredients: [
      { name: { en: "Mixed vegetables", bg: "Смесени зеленчуци" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Cannellini beans", bg: "Бял боб" }, amount: "250", unit: { en: "g", bg: "г" } },
      { name: { en: "Small pasta", bg: "Дребна паста" }, amount: "120", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Saute vegetables in olive oil.", bg: "Запържете зеленчуците в зехтин." } },
      { step: 2, instruction: { en: "Add beans, broth, and simmer.", bg: "Добавете боба, бульон и оставете да къкри." } },
      { step: 3, instruction: { en: "Cook pasta in the soup and serve.", bg: "Сварете пастата в супата и сервирайте." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Chicken Teriyaki", bg: "Пиле Терияки" },
    description: { en: "Glazed chicken with sweet-salty teriyaki sauce.", bg: "Пиле с глазура от сладко-солен сос терияки." },
    prepTime: "12 min",
    cookTime: "18 min",
    servings: 4,
    ingredients: [
      { name: { en: "Chicken thighs", bg: "Пилешко бутче без кост" }, amount: "600", unit: { en: "g", bg: "г" } },
      { name: { en: "Soy sauce", bg: "Соев сос" }, amount: "80", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Mirin", bg: "Мирин" }, amount: "60", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Sear chicken skin-side down.", bg: "Запечатайте пилето откъм кожата." } },
      { step: 2, instruction: { en: "Add sauce ingredients and simmer.", bg: "Добавете соса и оставете да къкри." } },
      { step: 3, instruction: { en: "Reduce to glaze and serve with rice.", bg: "Редуцирайте до глазура и сервирайте с ориз." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Nicoise Salad", bg: "Салата Нисоаз" },
    description: { en: "French salad with tuna, eggs, and green beans.", bg: "Френска салата с риба тон, яйца и зелен фасул." },
    prepTime: "20 min",
    cookTime: "10 min",
    servings: 4,
    ingredients: [
      { name: { en: "Tuna", bg: "Риба тон" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Green beans", bg: "Зелен фасул" }, amount: "200", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Boil eggs and blanch beans.", bg: "Сварете яйцата и бланширайте фасула." } },
      { step: 2, instruction: { en: "Arrange vegetables and tuna on plate.", bg: "Подредете зеленчуците и рибата тон." } },
      { step: 3, instruction: { en: "Dress with olive oil and lemon.", bg: "Овкусете със зехтин и лимон." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Quesadilla", bg: "Кесадиля" },
    description: { en: "Grilled tortilla filled with melted cheese.", bg: "Запечена тортила с разтопено сирене." },
    prepTime: "8 min",
    cookTime: "10 min",
    servings: 2,
    ingredients: [
      { name: { en: "Tortillas", bg: "Тортили" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Cheese", bg: "Кашкавал" }, amount: "180", unit: { en: "g", bg: "г" } },
      { name: { en: "Butter", bg: "Масло" }, amount: "15", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Fill tortillas with grated cheese.", bg: "Напълнете тортилите с настъргано сирене." } },
      { step: 2, instruction: { en: "Cook in pan with little butter.", bg: "Изпечете в тиган с малко масло." } },
      { step: 3, instruction: { en: "Slice and serve hot.", bg: "Нарежете и сервирайте горещо." } }
    ]
  },
  {
    countryCode: "IN",
    name: { en: "Palak Paneer", bg: "Палак Панир" },
    description: { en: "Spinach curry with paneer cubes.", bg: "Къри със спанак и кубчета панир." },
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    ingredients: [
      { name: { en: "Spinach", bg: "Спанак" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Paneer", bg: "Панир" }, amount: "250", unit: { en: "g", bg: "г" } },
      { name: { en: "Onion", bg: "Лук" }, amount: "1", unit: { en: "pc", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Blanch spinach and blend smooth.", bg: "Бланширайте спанака и пасирайте." } },
      { step: 2, instruction: { en: "Cook onion with spices.", bg: "Сгответе лука с подправки." } },
      { step: 3, instruction: { en: "Add spinach and paneer, simmer briefly.", bg: "Добавете спанака и панира, оставете да покъкри." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Souvlaki", bg: "Сувлаки" },
    description: { en: "Greek skewers with marinated grilled meat.", bg: "Гръцки шишчета с мариновано месо на скара." },
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Pork", bg: "Свинско месо" }, amount: "600", unit: { en: "g", bg: "г" } },
      { name: { en: "Olive oil", bg: "Зехтин" }, amount: "30", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Lemon juice", bg: "Лимонов сок" }, amount: "25", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Marinate pork cubes.", bg: "Мариновайте кубчетата свинско." } },
      { step: 2, instruction: { en: "Thread onto skewers.", bg: "Нанижете на шишчета." } },
      { step: 3, instruction: { en: "Grill and serve with pita.", bg: "Изпечете и сервирайте с пита." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Menemen", bg: "Менемен" },
    description: { en: "Scrambled eggs with tomato and peppers.", bg: "Яйца с домати и чушки по турски." },
    prepTime: "10 min",
    cookTime: "12 min",
    servings: 3,
    ingredients: [
      { name: { en: "Eggs", bg: "Яйца" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Green peppers", bg: "Зелени чушки" }, amount: "2", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook chopped peppers and tomatoes.", bg: "Сгответе нарязаните чушки и домати." } },
      { step: 2, instruction: { en: "Add beaten eggs.", bg: "Добавете разбитите яйца." } },
      { step: 3, instruction: { en: "Stir gently until set.", bg: "Разбърквайте внимателно до готовност." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Mapo Tofu", bg: "Мапо Тофу" },
    description: { en: "Spicy tofu with minced meat in savory sauce.", bg: "Пикантно тофу с кайма в ароматен сос." },
    prepTime: "12 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Tofu", bg: "Тофу" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Minced pork", bg: "Свинска кайма" }, amount: "180", unit: { en: "g", bg: "г" } },
      { name: { en: "Chili bean paste", bg: "Пикантна бобена паста" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Brown minced pork in wok.", bg: "Запържете каймата в уок." } },
      { step: 2, instruction: { en: "Add sauce and tofu cubes.", bg: "Добавете соса и кубчетата тофу." } },
      { step: 3, instruction: { en: "Simmer briefly and serve.", bg: "Оставете да покъкри и сервирайте." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Tortilla Espanola", bg: "Тортиля Еспаньола" },
    description: { en: "Spanish omelette with potatoes and onions.", bg: "Испански омлет с картофи и лук." },
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 4,
    ingredients: [
      { name: { en: "Potatoes", bg: "Картофи" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Onion", bg: "Лук" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "6", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook sliced potatoes and onion.", bg: "Сгответе нарязаните картофи и лук." } },
      { step: 2, instruction: { en: "Mix with beaten eggs.", bg: "Смесете с разбитите яйца." } },
      { step: 3, instruction: { en: "Cook both sides until golden.", bg: "Изпечете от двете страни до златисто." } }
    ]
  },
  {
    countryCode: "BG",
    name: { en: "Kavarma", bg: "Каварма" },
    description: { en: "Traditional Bulgarian stew with meat and vegetables.", bg: "Традиционна българска яхния с месо и зеленчуци." },
    prepTime: "20 min",
    cookTime: "45 min",
    servings: 6,
    ingredients: [
      { name: { en: "Pork", bg: "Свинско месо" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Paprika", bg: "Червен пипер" }, amount: "2", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "3", unit: { en: "cloves", bg: "скилидки" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cut pork into cubes and brown in pot.", bg: "Нарежете свинско на кубчета и запържете в тенджера." } },
      { step: 2, instruction: { en: "Add chopped onions and garlic.", bg: "Добавете нарязан лук и чесън." } },
      { step: 3, instruction: { en: "Add tomatoes and spices, simmer covered.", bg: "Добавете домати и подправки, задушете с капак." } }
    ]
  },
  {
    countryCode: "BG",
    name: { en: "Sarmi", bg: "Сарми" },
    description: { en: "Cabbage rolls stuffed with meat and rice.", bg: "Зелеви сарми с плънка от ориз и месо." },
    prepTime: "30 min",
    cookTime: "60 min",
    servings: 8,
    ingredients: [
      { name: { en: "Cabbage", bg: "Зеле" }, amount: "1", unit: { en: "head", bg: "главо" } },
      { name: { en: "Ground meat", bg: "Кайма" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Rice", bg: "Ориз" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Carrots", bg: "Моркови" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Dill", bg: "Джоджен" }, amount: "1", unit: { en: "bunch", bg: "връзка" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Boil cabbage leaves until tender.", bg: "Сварете зелевите листа докато омекнат." } },
      { step: 2, instruction: { en: "Mix meat with rice and seasonings.", bg: "Смесете каймата с ориз и подправки." } },
      { step: 3, instruction: { en: "Roll filling in cabbage leaves and cook.", bg: "Завийте плънката в зелеви листа и сварете." } }
    ]
  },
  {
    countryCode: "BG",
    name: { en: "Kyopolou", bg: "Кьопоулу" },
    description: { en: "Smoked eggplant relish with peppers and tomatoes.", bg: "Рецепта от пушени патладжани с чушки и домати." },
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 4,
    ingredients: [
      { name: { en: "Eggplant", bg: "Патладжан" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Red peppers", bg: "Чушки" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "4", unit: { en: "cloves", bg: "скилидки" } },
      { name: { en: "Parsley", bg: "Магданоз" }, amount: "1", unit: { en: "bunch", bg: "връзка" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Grill vegetables until charred.", bg: "Изпечете зеленчуците докато почернят." } },
      { step: 2, instruction: { en: "Peel and chop grilled vegetables.", bg: "Обелете и нарежете изпечените зеленчуци." } },
      { step: 3, instruction: { en: "Mix with garlic and parsley, season.", bg: "Смесете с чесън и магданоз, овкусете." } }
    ]
  },
  {
    countryCode: "BG",
    name: { en: "Meshana Skara", bg: "Мешана скара" },
    description: { en: "Mixed grill of various meats.", bg: "Смес от различни месни продукти на скара." },
    prepTime: "20 min",
    cookTime: "25 min",
    servings: 4,
    ingredients: [
      { name: { en: "Pork kebabs", bg: "Принзози" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Chicken fillet", bg: "Пилешко месо" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Sausages", bg: "Наденица" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Lamb chops", bg: "Агнешко котле" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Spices", bg: "Подправки" }, amount: "1", unit: { en: "mix", bg: "смес" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Season all meats with spices.", bg: "Овкусете всички меса с подправки." } },
      { step: 2, instruction: { en: "Grill on charcoal until done.", bg: "Изпечете на въгли до готовност." } },
      { step: 3, instruction: { en: "Serve with shopska salad and bread.", bg: "Сервирайте с шопска салата и хляб." } }
    ]
  },
  {
    countryCode: "BG",
    name: { en: "Punjeni Papriki", bg: "Пълнени чушки" },
    description: { en: "Stuffed peppers with meat and rice filling.", bg: "Пълнени чушки с плънка от месо и ориз." },
    prepTime: "25 min",
    cookTime: "40 min",
    servings: 6,
    ingredients: [
      { name: { en: "Bell peppers", bg: "Пиперки" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Ground beef", bg: "Телешка кайма" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Rice", bg: "Ориз" }, amount: "150", unit: { en: "g", bg: "г" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Cheese", bg: "Сирене" }, amount: "100", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cut tops off peppers and remove seeds.", bg: "Отрежете капачите на чушките и извадете семките." } },
      { step: 2, instruction: { en: "Mix meat with rice and fill peppers.", bg: "Смесете месото с ориз и напълнете чушките." } },
      { step: 3, instruction: { en: "Bake in oven until tender.", bg: "Изпечете във фурна докато омекнат." } }
    ]
  },
  {
    countryCode: "BG",
    name: { en: "Lukanka", bg: "Луканка" },
    description: { en: "Traditional Bulgarian dry cured sausage.", bg: "Традиционна българска суха наденица." },
    prepTime: "480 min",
    cookTime: "0 min",
    servings: 8,
    ingredients: [
      { name: { en: "Pork meat", bg: "Свинско месо" }, amount: "1", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Beef meat", bg: "Телешко месо" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Pork fat", bg: "Свинска мас" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Spices", bg: "Подправки" }, amount: "50", unit: { en: "g", bg: "г" } },
      { name: { en: "Salt", bg: "Сол" }, amount: "30", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mince meats and mix with spices.", bg: "Смелете меса и смесете с подправки." } },
      { step: 2, instruction: { en: "Stuff into casings and dry for 3 days.", bg: "Напълнете в черва и подсушете за 3 дни." } },
      { step: 3, instruction: { en: "Cold smoke and age for 2 weeks.", bg: "Студено пушете и оставете да зрее 2 седмици." } }
    ]
  },
  {
    countryCode: "BG",
    name: { en: "Moussaka", bg: "Мусака" },
    description: { en: "Layered potato and meat dish with béchamel.", bg: "Ястие от слоеве картоф и месо с бешамел." },
    prepTime: "30 min",
    cookTime: "45 min",
    servings: 6,
    ingredients: [
      { name: { en: "Potatoes", bg: "Картофи" }, amount: "1", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Ground meat", bg: "Кайма" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Milk", bg: "Мляко" }, amount: "500", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "2", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Slice potatoes and brown meat with onions.", bg: "Нарежете картофите и запържете месото с лук." } },
      { step: 2, instruction: { en: "Layer potatoes and meat in baking dish.", bg: "Редете картофи и месо в тава за печене." } },
      { step: 3, instruction: { en: "Pour béchamel sauce and bake until golden.", bg: "Залейте с бешамел и печете до златисто." } }
    ]
  },
  {
    countryCode: "BG",
    name: { en: "Kiselo Zelk", bg: "Кисело зеле" },
    description: { en: "Traditional Bulgarian sauerkraut soup.", bg: "Традиционна българска супа от кисело зеле." },
    prepTime: "15 min",
    cookTime: "40 min",
    servings: 6,
    ingredients: [
      { name: { en: "Sauerkraut", bg: "Кисело зеле" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Pork ribs", bg: "Свински ребра" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Paprika", bg: "Червен пипер" }, amount: "2", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Carrots", bg: "Моркови" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Bay leaves", bg: "Лавров лист" }, amount: "2", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Brown pork ribs in pot.", bg: "Запържете свинските ребра в тенджера." } },
      { step: 2, instruction: { en: "Add sauerkraut and vegetables, simmer.", bg: "Добавете кисело зеле и зеленчуци, варете." } },
      { step: 3, instruction: { en: "Season and serve hot with bread.", bg: "Овкусете и сервирайте горещо с хляб." } }
    ]
  },
  {
    countryCode: "BG",
    name: { en: "Shkembe Chorba", bg: "Шкембе чорба" },
    description: { en: "Traditional Bulgarian tripe soup.", bg: "Традиционна българска супа от шкембе." },
    prepTime: "30 min",
    cookTime: "120 min",
    servings: 6,
    ingredients: [
      { name: { en: "Tripe", bg: "Шкембе" }, amount: "800", unit: { en: "g", bg: "г" } },
      { name: { en: "Milk", bg: "Мляко" }, amount: "200", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "4", unit: { en: "cloves", bg: "скилидки" } },
      { name: { en: "Vinegar", bg: "Оцет" }, amount: "50", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Paprika", bg: "Червен пипер" }, amount: "2", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Clean and boil tripe until tender.", bg: "Изчистете и сварете шкембето докато омекне." } },
      { step: 2, instruction: { en: "Cut into strips and return to broth.", bg: "Нарежете на ленти и върнете в бульона." } },
      { step: 3, instruction: { en: "Season with garlic, milk, and vinegar.", bg: "Овкусете с чесън, мляко и оцет." } }
    ]
  },
  {
    countryCode: "BG",
    name: { en: "Bob Chorba", bg: "Боб чорба" },
    description: { en: "Hearty Bulgarian bean soup.", bg: "Питателна българска бобена супа." },
    prepTime: "20 min",
    cookTime: "60 min",
    servings: 6,
    ingredients: [
      { name: { en: "Dry beans", bg: "Сух боб" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Carrots", bg: "Моркови" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Mint", bg: "Джоджен" }, amount: "1", unit: { en: "bunch", bg: "връзка" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Soak beans overnight, cook until tender.", bg: "Накиснете боба през нощта, сварете докато омекне." } },
      { step: 2, instruction: { en: "Add vegetables and simmer.", bg: "Добавете зеленчуци и оставете да къкри." } },
      { step: 3, instruction: { en: "Season with mint and serve hot.", bg: "Овкусете с джоджен и сервирайте горещо." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Osso Buco", bg: "Осо Буко" },
    description: { en: "Braised veal shanks with vegetables and white wine.", bg: "Задушени телешки бутчета със зеленчуци и бяло вино." },
    prepTime: "30 min",
    cookTime: "120 min",
    servings: 6,
    ingredients: [
      { name: { en: "Veal shanks", bg: "Телешки бутчета" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Carrots", bg: "Моркови" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Celery", bg: "Целина" }, amount: "2", unit: { en: "stalks", bg: "стръка" } },
      { name: { en: "White wine", bg: "Бяло вино" }, amount: "1", unit: { en: "cup", bg: "чаша" } },
      { name: { en: "Tomato paste", bg: "Доматено пюре" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Brown veal shanks in olive oil.", bg: "Запържете телешките бутчета в зехтин." } },
      { step: 2, instruction: { en: "Add vegetables, wine and simmer covered.", bg: "Добавете зеленчуци, вино и задушете с капак." } },
      { step: 3, instruction: { en: "Cook until meat is tender, serve with gremolata.", bg: "Гответе докато месото омекне, сервирайте с гремолата." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Risotto Milanese", bg: "Ризото Миланезе" },
    description: { en: "Creamy saffron risotto with parmesan cheese.", bg: "Кремообразно ризото със шафран и пармезан." },
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 4,
    ingredients: [
      { name: { en: "Arborio rice", bg: "Ориз Арборио" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Saffron", bg: "Шафран" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "White wine", bg: "Бяло вино" }, amount: "100", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Parmesan", bg: "Пармезан" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Butter", bg: "Масло" }, amount: "50", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Toast rice in butter until translucent.", bg: "Запържете ориз в масло докато стане прозрачен." } },
      { step: 2, instruction: { en: "Add wine and saffron, gradually add broth.", bg: "Добавете вино и шафран, постепенно добавяйте бульон." } },
      { step: 3, instruction: { en: "Stir in parmesan and butter before serving.", bg: "Разбъркайте пармезан и масло преди сервиране." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Saltimbocca", bg: "Салтимбока" },
    description: { en: "Veal scallops with prosciutto and sage.", bg: "Телешки панички с прошуто и салвия." },
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Veal cutlets", bg: "Телешки панички" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Prosciutto", bg: "Прошуто" }, amount: "8", unit: { en: "slices", bg: "парчета" } },
      { name: { en: "Sage leaves", bg: "Листа салвия" }, amount: "8", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "White wine", bg: "Бяло вино" }, amount: "100", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Butter", bg: "Масло" }, amount: "30", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Pound veal thin and top with prosciutto and sage.", bg: "Разбийте телешкото тънко и сложете прошуто и салвия." } },
      { step: 2, instruction: { en: "Sear in butter until golden.", bg: "Запържете в масло докато златисто." } },
      { step: 3, instruction: { en: "Deglaze with wine and serve immediately.", bg: "Разредете с вино и сервирайте веднага." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Gnocchi di Patate", bg: "Ньоки от картофи" },
    description: { en: "Potato dumplings served with sage butter.", bg: "Картофени кнедли със масло и салвия." },
    prepTime: "45 min",
    cookTime: "10 min",
    servings: 4,
    ingredients: [
      { name: { en: "Potatoes", bg: "Картофи" }, amount: "1", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Flour", bg: "Брашно" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Egg", bg: "Яйце" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Sage", bg: "Салвия" }, amount: "10", unit: { en: "leaves", bg: "листа" } },
      { name: { en: "Butter", bg: "Масло" }, amount: "100", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Boil and mash potatoes, mix with flour and egg.", bg: "Сварете и намачкайте картофите, смесете с брашно и яйце." } },
      { step: 2, instruction: { en: "Roll into ropes and cut into gnocchi.", bg: "Оформете на въженца и нарежете на ньоки." } },
      { step: 3, instruction: { en: "Cook in boiling water, toss with sage butter.", bg: "Сварете във вряща вода, залейте с масло и салвия." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Bottarga", bg: "Ботарга" },
    description: { en: "Cured fish roe served with pasta.", bg: "Солена рибна хайверна паста със спагети." },
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Spaghetti", bg: "Спагети" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Bottarga", bg: "Ботарга" }, amount: "50", unit: { en: "g", bg: "г" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "2", unit: { en: "cloves", bg: "скилидки" } },
      { name: { en: "Olive oil", bg: "Зехтин" }, amount: "50", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Parsley", bg: "Магданоз" }, amount: "1", unit: { en: "bunch", bg: "връзка" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook spaghetti al dente.", bg: "Сварете спагети ал денте." } },
      { step: 2, instruction: { en: "Sauté garlic in olive oil.", bg: "Запържете чесъна в зехтин." } },
      { step: 3, instruction: { en: "Toss pasta with bottarga and parsley.", bg: "Разбъркайте пастата с ботарга и магданоз." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Caponata", bg: "Капоната" },
    description: { en: "Sicilian eggplant and tomato stew.", bg: "Сицилианска яхния от патладжани и домати." },
    prepTime: "30 min",
    cookTime: "45 min",
    servings: 6,
    ingredients: [
      { name: { en: "Eggplant", bg: "Патладжан" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Celery", bg: "Целина" }, amount: "3", unit: { en: "stalks", bg: "стръка" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Olives", bg: "Маслини" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Capers", bg: "Каперси" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Salt and fry eggplant cubes.", bg: "Осолете и запържете патладжаните на кубчета." } },
      { step: 2, instruction: { en: "Sauté celery and tomatoes.", bg: "Запържете целина и домати." } },
      { step: 3, instruction: { en: "Combine with olives and capers, simmer.", bg: "Смесете с маслини и каперси, задушете." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Focaccia Genovese", bg: "Фокача Геновезе" },
    description: { en: "Flat bread with olive oil and sea salt.", bg: "Плосък хляб със зехтин и морска сол." },
    prepTime: "120 min",
    cookTime: "20 min",
    servings: 8,
    ingredients: [
      { name: { en: "Flour", bg: "Брашно" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Yeast", bg: "Мая" }, amount: "7", unit: { en: "g", bg: "г" } },
      { name: { en: "Olive oil", bg: "Зехтин" }, amount: "100", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Sea salt", bg: "Морска сол" }, amount: "10", unit: { en: "g", bg: "г" } },
      { name: { en: "Rosemary", bg: "Розмарин" }, amount: "2", unit: { en: "sprigs", bg: "клончета" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mix dough and let rise for 1 hour.", bg: "Замесете тесто и оставете да втаса 1 час." } },
      { step: 2, instruction: { en: "Press dough into pan, dimple with fingers.", bg: "Разпънете тестото в тава, натиснете с пръсти." } },
      { step: 3, instruction: { en: "Drizzle with oil, add salt and rosemary, bake.", bg: "Полейте с масло, добавете сол и розмарин, печете." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Panna Cotta", bg: "Пана Кота" },
    description: { en: "Silky cream dessert with vanilla.", bg: "Кремообразен десерт с ванилия." },
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 6,
    ingredients: [
      { name: { en: "Heavy cream", bg: "Тежка сметана" }, amount: "500", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Gelatin", bg: "Желатин" }, amount: "10", unit: { en: "g", bg: "г" } },
      { name: { en: "Vanilla", bg: "Ванилия" }, amount: "1", unit: { en: "bean", bg: "шушулка" } },
      { name: { en: "Berries", bg: "Плодове" }, amount: "200", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Heat cream with sugar and vanilla.", bg: "Загрейте сметаната със захар и ванилия." } },
      { step: 2, instruction: { en: "Dissolve gelatin and mix into cream.", bg: "Разтворете желатина и смесете в сметаната." } },
      { step: 3, instruction: { en: "Pour into molds, chill 4 hours, serve with berries.", bg: "Изсипете в форми, охладете 4 часа, сервирайте с плодове." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Bistecca alla Fiorentina", bg: "Бистека Фиорентина" },
    description: { en: "Grilled T-bone steak Florentine style.", bg: "Пържено Т-боне котле флорентински стил." },
    prepTime: "30 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "T-bone steak", bg: "Т-боне котле" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Rosemary", bg: "Розмарин" }, amount: "4", unit: { en: "sprigs", bg: "клончета" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "4", unit: { en: "cloves", bg: "скилидки" } },
      { name: { en: "Olive oil", bg: "Зехтин" }, amount: "50", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Sea salt", bg: "Морска сол" }, amount: "20", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Bring steak to room temperature, season generously.", bg: "Оставете котлетата на стайна температура, овкусете обилно." } },
      { step: 2, instruction: { en: "Grill on hot charcoal, rosemary and garlic.", bg: "Изпечете на горещи въглища, розмарин и чесън." } },
      { step: 3, instruction: { en: "Rest 10 minutes, slice and serve.", bg: "Оставете 10 минути, нарежете и сервирайте." } }
    ]
  },
  {
    countryCode: "IT",
    name: { en: "Tiramisu", bg: "Тирамису" },
    description: { en: "Coffee-flavored dessert with mascarpone.", bg: "Десерт с кафе и маскарпоне." },
    prepTime: "30 min",
    cookTime: "0 min",
    servings: 8,
    ingredients: [
      { name: { en: "Ladyfingers", bg: "Бишкоти" }, amount: "24", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Mascarpone", bg: "Маскарпоне" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Espresso", bg: "Еспресо" }, amount: "300", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Cocoa powder", bg: "Какао на прах" }, amount: "30", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Beat egg yolks with sugar until thick.", bg: "Разбийте жълтъците със захар докато се сгъстят." } },
      { step: 2, instruction: { en: "Fold in mascarpone, dip ladyfingers in coffee.", bg: "Смесете маскарпоне, потопете бишкотите в кафе." } },
      { step: 3, instruction: { en: "Layer in dish, chill 4 hours, dust with cocoa.", bg: "Редете в чиния, охладете 4 часа, поръсете с какао." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Tempura", bg: "Темпура" },
    description: { en: "Light and crispy battered seafood and vegetables.", bg: "Лека и хрупна панирана риба и зеленчуци." },
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Shrimp", bg: "Шримп" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggplant", bg: "Патладжан" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Sweet potato", bg: "Сладък картоф" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Tempura flour", bg: "Темпура брашно" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Ice water", bg: "Ледена вода" }, amount: "200", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mix flour with ice water for light batter.", bg: "Разбъркайте брашно с ледена вода за лека панировка." } },
      { step: 2, instruction: { en: "Dip ingredients in batter and fry at 180°C.", bg: "Потопете съставките в панировка и пържете на 180°C." } },
      { step: 3, instruction: { en: "Serve with dipping sauce and daikon radish.", bg: "Сервирайте със сос за потапане и дайкон." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Sushi Platter", bg: "Суши празник" },
    description: { en: "Assorted fresh fish and rice rolls.", bg: "Асортимент от прясна риба и рулца с ориз." },
    prepTime: "60 min",
    cookTime: "0 min",
    servings: 6,
    ingredients: [
      { name: { en: "Sushi rice", bg: "Суши ориз" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Salmon", bg: "Сьомга" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Tuna", bg: "Туна" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Nori sheets", bg: "Листа нори" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Wasabi", bg: "Васаби" }, amount: "20", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook and season sushi rice with vinegar.", bg: "Сварете и овкусете суши ориз с оцет." } },
      { step: 2, instruction: { en: "Slice fish thinly and prepare rolls.", bg: "Нарежете рибата на тънко и пригответе рулца." } },
      { step: 3, instruction: { en: "Arrange beautifully, serve with wasabi and ginger.", bg: "Подредете красиво, сервирайте с васаби и джинджифил." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Yakitori", bg: "Якитори" },
    description: { en: "Grilled chicken skewers with sweet soy glaze.", bg: "Пилешки шишчета на скара със сладък соев сос." },
    prepTime: "30 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Chicken thighs", bg: "Пилешки бутчета" }, amount: "600", unit: { en: "g", bg: "г" } },
      { name: { en: "Soy sauce", bg: "Соев сос" }, amount: "100", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Mirin", bg: "Мирин" }, amount: "50", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Green onions", bg: "Зелен лук" }, amount: "4", unit: { en: "stalks", bg: "стръка" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cut chicken into bite-sized pieces and skewer.", bg: "Нарежете пилешкото на парчета и нанижете на шишчета." } },
      { step: 2, instruction: { en: "Grill and brush with sweet soy glaze.", bg: "Печете и мажете със сладък соев сос." } },
      { step: 3, instruction: { en: "Serve with Japanese mustard and lemon.", bg: "Сервирайте с японска горчица и лимон." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Miso Soup", bg: "Мисо супа" },
    description: { en: "Traditional soybean paste soup with tofu and seaweed.", bg: "Традиционна супа от соево пюре с тофу и водорасли." },
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Miso paste", bg: "Мисо пюре" }, amount: "4", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Dashi stock", bg: "Даши бульон" }, amount: "1", unit: { en: "L", bg: "л" } },
      { name: { en: "Silken tofu", bg: "Меко тофу" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Wakame seaweed", bg: "Вакаме водорасли" }, amount: "10", unit: { en: "g", bg: "г" } },
      { name: { en: "Green onions", bg: "Зелен лук" }, amount: "2", unit: { en: "stalks", bg: "стръка" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Heat dashi stock but do not boil.", bg: "Загрейте даши бульон без да завира." } },
      { step: 2, instruction: { en: "Dissolve miso paste, add tofu and wakame.", bg: "Разтворете мисо пюре, добавете тофу и вакаме." } },
      { step: 3, instruction: { en: "Garnish with green onions and serve hot.", bg: "Поръсете със зелен лук и сервирайте горещо." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Katsudon", bg: "Кацудон" },
    description: { en: "Breaded pork cutlet with egg over rice.", bg: "Панирано свинско котле с яйце върху ориз." },
    prepTime: "25 min",
    cookTime: "20 min",
    servings: 4,
    ingredients: [
      { name: { en: "Pork cutlets", bg: "Свински котлети" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Panko breadcrumbs", bg: "Пanko галета" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Rice", bg: "Ориз" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "2", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Bread and fry pork cutlets until golden.", bg: "Панирайте и пържете свинските котлети до златисто." } },
      { step: 2, instruction: { en: "Sauté onions, add eggs and broth.", bg: "Запържете лука, добавете яйца и бульон." } },
      { step: 3, instruction: { en: "Serve cutlet over rice with egg mixture.", bg: "Сервирайте котлет върху ориз с яйчена смес." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Gyoza", bg: "Гьоза" },
    description: { en: "Pan-fried dumplings filled with pork and vegetables.", bg: "Пържени кнедли с плънка от свинско и зеленчуци." },
    prepTime: "45 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Gyoza wrappers", bg: "Гьоза кори" }, amount: "24", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Ground pork", bg: "Кайма" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Cabbage", bg: "Зеле" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "3", unit: { en: "cloves", bg: "скилидки" } },
      { name: { en: "Ginger", bg: "Джинджифил" }, amount: "20", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mix filling ingredients and wrap in gyoza skins.", bg: "Смесете плънката и завийте в гьоза кори." } },
      { step: 2, instruction: { en: "Pan-fry until golden, add water and steam.", bg: "Пържете в тава до златисто, добавете вода и задушете." } },
      { step: 3, instruction: { en: "Serve with dipping sauce and chili oil.", bg: "Сервирайте със сос за потапане и люто масло." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Tonkatsu", bg: "Тонкацу" },
    description: { en: "Deep-fried breaded pork cutlet with cabbage.", bg: "Пържено панирано свинско котле със зеле." },
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Pork loin", bg: "Свински врат" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Panko breadcrumbs", bg: "Пanko галета" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Cabbage", bg: "Зеле" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Tonkatsu sauce", bg: "Тонкацу сос" }, amount: "100", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Lemon", bg: "Лимон" }, amount: "1", unit: { en: "pc", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Pound pork thin, coat with panko.", bg: "Разбийте свинското тънко, оваляйте с пanko." } },
      { step: 2, instruction: { en: "Deep fry at 170°C until crispy.", bg: "Пържете в дълбок мазнина на 170°C докато хрупне." } },
      { step: 3, instruction: { en: "Slice and serve with cabbage and tonkatsu sauce.", bg: "Нарежете и сервирайте със зеле и тонкацу сос." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Chawanmushi", bg: "Чаванмуши" },
    description: { en: "Savory steamed egg custard with mushrooms and shrimp.", bg: "Задушено солено яйце с гъби и шримп." },
    prepTime: "20 min",
    cookTime: "20 min",
    servings: 4,
    ingredients: [
      { name: { en: "Eggs", bg: "Яйца" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Dashi stock", bg: "Даши бульон" }, amount: "400", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Shrimp", bg: "Шримп" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Shiitake mushrooms", bg: "Шиитаке гъби" }, amount: "50", unit: { en: "g", bg: "г" } },
      { name: { en: "Green onions", bg: "Зелен лук" }, amount: "2", unit: { en: "stalks", bg: "стръка" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Beat eggs with dashi and strain.", bg: "Разбийте яйцата с даши и прецедете." } },
      { step: 2, instruction: { en: "Add shrimp and mushrooms to cups.", bg: "Добавете шримп и гъби в чаши." } },
      { step: 3, instruction: { en: "Pour egg mixture and steam for 15 minutes.", bg: "Изсипете яйчена смес и задушете 15 минути." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Matcha Ice Cream", bg: "Мача сладолед" },
    description: { en: "Japanese green tea ice cream with subtle bitterness.", bg: "Японски зелен чай сладолед с лека горчивина." },
    prepTime: "30 min",
    cookTime: "0 min",
    servings: 6,
    ingredients: [
      { name: { en: "Heavy cream", bg: "Тежка сметана" }, amount: "500", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Matcha powder", bg: "Мача на прах" }, amount: "20", unit: { en: "g", bg: "г" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "150", unit: { en: "g", bg: "г" } },
      { name: { en: "Egg yolks", bg: "Яйчени жълтъци" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Red bean paste", bg: "Червено бобово пюре" }, amount: "100", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Whisk matcha with hot cream, cool completely.", bg: "Разбъркайте мача с гореща сметана, охладете напълно." } },
      { step: 2, instruction: { en: "Cook egg yolks with sugar, combine with cream.", bg: "Сварете жълтъците със захар, комбинирайте със сметана." } },
      { step: 3, instruction: { en: "Churn in ice cream maker, serve with red beans.", bg: "Разбийте в сладоледена машина, сервирайте с червени бобове." } }
    ]
  },
  {
    countryCode: "JP",
    name: { en: "Sukiyaki", bg: "Сукияки" },
    description: { en: "Hot pot dish with thinly sliced beef and vegetables.", bg: "Ястие в тенджера с тънко нарязано говеждо и зеленчуци." },
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    ingredients: [
      { name: { en: "Beef sirloin", bg: "Телешки гърб" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Tofu", bg: "Тофу" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Napa cabbage", bg: "Китайско зеле" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Shirataki noodles", bg: "Ширатаке юфка" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Soy sauce", bg: "Соев сос" }, amount: "80", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Brown beef in hot pot, add vegetables.", bg: "Запържете говеждото в тенджера, добавете зеленчуци." } },
      { step: 2, instruction: { en: "Add soy sauce, mirin and sugar.", bg: "Добавете соев сос, мирин и захар." } },
      { step: 3, instruction: { en: "Simmer and serve with raw egg for dipping.", bg: "Задушете и сервирайте със сурово яйце за потапяне." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Coq au Vin", bg: "Кок аен Вин" },
    description: { en: "Classic French chicken braised in red wine with mushrooms.", bg: "Класическо френско пиле, задушено в червено вино с гъби." },
    prepTime: "25 min",
    cookTime: "90 min",
    servings: 6,
    ingredients: [
      { name: { en: "Chicken", bg: "Пиле" }, amount: "1.5", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Red wine", bg: "Червено вино" }, amount: "750", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Mushrooms", bg: "Гъби" }, amount: "250", unit: { en: "g", bg: "г" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Bacon", bg: "Бекон" }, amount: "150", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Brown chicken pieces in bacon fat.", bg: "Запържете парчетата пиле в мазнината от бекона." } },
      { step: 2, instruction: { en: "Add wine and simmer until chicken is tender.", bg: "Добавете вино и задушете докато пилето омекне." } },
      { step: 3, instruction: { en: "Add mushrooms and onions, cook until thick.", bg: "Добавете гъби и лук, гответе докато се сгъсти." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Boeuf Bourguignon", bg: "Бьоф Бургиньон" },
    description: { en: "Beef stew braised in Burgundy red wine with vegetables.", bg: "Телешко гювеч, задушено в бургундско червено вино със зеленчуци." },
    prepTime: "30 min",
    cookTime: "120 min",
    servings: 8,
    ingredients: [
      { name: { en: "Beef chuck", bg: "Телешко месо" }, amount: "2", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Burgundy wine", bg: "Бургундско вино" }, amount: "1", unit: { en: "L", bg: "л" } },
      { name: { en: "Carrots", bg: "Моркови" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Pearl onions", bg: "Перлен лук" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Bacon", bg: "Бекон" }, amount: "200", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Brown beef in bacon fat, set aside.", bg: "Запържете телешкото в мазнина от бекон, оставете настрана." } },
      { step: 2, instruction: { en: "Sauté vegetables, return beef and add wine.", bg: "Запържете зеленчуците, върнете телешкото и добавете вино." } },
      { step: 3, instruction: { en: "Simmer covered for 2 hours until tender.", bg: "Задушете с капак 2 часа докато омекне." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Soufflé au Fromage", bg: "Суфле Фромаж" },
    description: { en: "Light and fluffy cheese soufflé with Gruyère.", bg: "Леко и пухкаво сиренно суфле с Груиер." },
    prepTime: "20 min",
    cookTime: "25 min",
    servings: 4,
    ingredients: [
      { name: { en: "Gruyère cheese", bg: "Сирене Груиер" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Milk", bg: "Мляко" }, amount: "300", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Butter", bg: "Масло" }, amount: "30", unit: { en: "g", bg: "г" } },
      { name: { en: "Flour", bg: "Брашно" }, amount: "30", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make béchamel sauce with butter, flour, milk.", bg: "Направете бешамел сос с масло, брашно, мляко." } },
      { step: 2, instruction: { en: "Add cheese and egg yolks, cool slightly.", bg: "Добавете сирене и яйчени жълтъци, леко охладете." } },
      { step: 3, instruction: { en: "Fold in beaten egg whites, bake until risen.", bg: "Смесете с разбити на пяна белтъци, печете докато се надуе." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Cassoulet", bg: "Касуле" },
    description: { en: "Hearty bean casserole with duck confit and sausages.", bg: "Питателен гювеч с боб, пати конфит и наденици." },
    prepTime: "30 min",
    cookTime: "180 min",
    servings: 8,
    ingredients: [
      { name: { en: "White beans", bg: "Боб" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Duck confit", bg: "Пати конфит" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Toulouse sausage", bg: "Тулузка наденица" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "4", unit: { en: "cloves", bg: "скилидки" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Soak and cook beans until tender.", bg: "Накиснете и сварете боба докато омекне." } },
      { step: 2, instruction: { en: "Layer beans with duck and sausage in pot.", bg: "Редете боб с пати и наденица в тенджера." } },
      { step: 3, instruction: { en: "Bake covered for 3 hours, uncover to crust.", bg: "Печете с капак 3 часа, отворете да се корира." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Bouillabaisse", bg: "Буйабес" },
    description: { en: "Traditional Provençal fish stew with saffron and herbs.", bg: "Традиционна провансалска рибена супа с шафран и билки." },
    prepTime: "45 min",
    cookTime: "60 min",
    servings: 6,
    ingredients: [
      { name: { en: "Mixed fish", bg: "Разна риба" }, amount: "1.5", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Shellfish", bg: "Миди" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Saffron", bg: "Шафран" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "6", unit: { en: "cloves", bg: "скилидки" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make fish stock with heads and bones.", bg: "Направете рибен бульон от глави и кости." } },
      { step: 2, instruction: { en: "Sauté garlic, add tomatoes and saffron.", bg: "Запържете чесън, добавете домати и шафран." } },
      { step: 3, instruction: { en: "Add fish and shellfish, simmer briefly.", bg: "Добавете риба и миди, задушете кратко." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Quiche Lorraine", bg: "Киш Лорен" },
    description: { en: "Classic French tart with bacon and egg custard.", bg: "Класическа френска тарта с бекон и яйчена смес." },
    prepTime: "30 min",
    cookTime: "45 min",
    servings: 6,
    ingredients: [
      { name: { en: "Pie crust", bg: "Тесто за пита" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Bacon", bg: "Бекон" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Heavy cream", bg: "Тежка сметана" }, amount: "400", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Gruyère cheese", bg: "Сирене Груиер" }, amount: "100", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Bake pie crust partially, add bacon.", bg: "Изпечете тестото частично, добавете бекон." } },
      { step: 2, instruction: { en: "Mix eggs, cream and cheese, pour into crust.", bg: "Разбъркайте яйца, сметана и сирене, изсипете в тестото." } },
      { step: 3, instruction: { en: "Bake until set and golden brown.", bg: "Печете докато се втвърди и покафенее." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Confit de Canard", bg: "Конфи дьо Канар" },
    description: { en: "Duck legs slowly cooked in their own fat with garlic.", bg: "Пати бутчета бавно сготвени в собствената си мазнина с чесън." },
    prepTime: "15 min",
    cookTime: "240 min",
    servings: 4,
    ingredients: [
      { name: { en: "Duck legs", bg: "Пати бутчета" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Duck fat", bg: "Пати мазнина" }, amount: "1", unit: { en: "L", bg: "л" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "8", unit: { en: "cloves", bg: "скилидки" } },
      { name: { en: "Thyme", bg: "Мащерка" }, amount: "4", unit: { en: "sprigs", bg: "клончета" } },
      { name: { en: "Bay leaves", bg: "Лавров лист" }, amount: "2", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Season duck legs, place in dish with herbs.", bg: "Овкусете пати бутчетата, сложете в чиния с билки." } },
      { step: 2, instruction: { en: "Cover with duck fat, bake at 150°C for 4 hours.", bg: "Залейте с пати мазнина, печете на 150°C 4 часа." } },
      { step: 3, instruction: { en: "Cool in fat, then pan-fry to crisp skin.", bg: "Охладете в мазнина, после запържете до хрупкава коричка." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Pot-au-Feu", bg: "Пот о Фьо" },
    description: { en: "Traditional French boiled beef dinner with vegetables.", bg: "Традиционна френска вечеря със сварено говеждо и зеленчуци." },
    prepTime: "20 min",
    cookTime: "180 min",
    servings: 8,
    ingredients: [
      { name: { en: "Beef chuck", bg: "Телешко месо" }, amount: "2", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Bone marrow", bg: "Костен мозък" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Cabbage", bg: "Зеле" }, amount: "1", unit: { en: "head", bg: "главо" } },
      { name: { en: "Carrots", bg: "Моркови" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Leeks", bg: "Праз" }, amount: "4", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Simmer beef and marrow in water for 3 hours.", bg: "Варете говеждо и мозък във вода 3 часа." } },
      { step: 2, instruction: { en: "Add vegetables and cook until tender.", bg: "Добавете зеленчуци и гответе докато омекнат." } },
      { step: 3, instruction: { en: "Serve with broth, mustard, and coarse salt.", bg: "Сервирайте с бульон, горчица и едра сол." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Tarte Tatin", bg: "Тарт Татен" },
    description: { en: "Upside-down caramelized apple tart with puff pastry.", bg: "Обърната карамелизирана ябълкова тарта с тесто фило." },
    prepTime: "30 min",
    cookTime: "40 min",
    servings: 6,
    ingredients: [
      { name: { en: "Apples", bg: "Ябълки" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Butter", bg: "Масло" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Puff pastry", bg: "Тесто фило" }, amount: "1", unit: { en: "sheet", bg: "лист" } },
      { name: { en: "Vanilla", bg: "Ванилия" }, amount: "1", unit: { en: "bean", bg: "шушулка" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Caramelize sugar and butter in pan, add apples.", bg: "Карамелизирайте захар и масло в тава, добавете ябълки." } },
      { step: 2, instruction: { en: "Cook apples until soft, top with pastry.", bg: "Гответе ябълките докато омекнат, сложете отгоре тесто." } },
      { step: 3, instruction: { en: "Bake until golden, invert onto serving plate.", bg: "Печете докато златисто, обърнете върху сервизна чиния." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Croque Monsieur", bg: "Крок Мосю" },
    description: { en: "Classic French ham and cheese sandwich with béchamel.", bg: "Класическа френска сандвич със шунка и сирене и бешамел." },
    prepTime: "15 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Bread", bg: "Хляб" }, amount: "8", unit: { en: "slices", bg: "парчета" } },
      { name: { en: "Ham", bg: "Шунка" }, amount: "8", unit: { en: "slices", bg: "парчета" } },
      { name: { en: "Gruyère cheese", bg: "Сирене Груиер" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Butter", bg: "Масло" }, amount: "60", unit: { en: "g", bg: "г" } },
      { name: { en: "Béchamel sauce", bg: "Бешамел сос" }, amount: "200", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Layer bread, ham, and cheese.", bg: "Редете хляб, шунка и сирене." } },
      { step: 2, instruction: { en: "Top with béchamel and more cheese.", bg: "Залейте с бешамел и още сирене." } },
      { step: 3, instruction: { en: "Grill until golden and bubbly.", bg: "Печете на грил докато златисто и мехуркащо." } }
    ]
  },
  {
    countryCode: "FR",
    name: { en: "Madeleines", bg: "Мадлен" },
    description: { en: "Delicate shell-shaped sponge cakes with butter and lemon.", bg: "Нежни гъбести сладки с форма на черупка с масло и лимон." },
    prepTime: "20 min",
    cookTime: "12 min",
    servings: 24,
    ingredients: [
      { name: { en: "Flour", bg: "Брашно" }, amount: "150", unit: { en: "g", bg: "г" } },
      { name: { en: "Butter", bg: "Масло" }, amount: "120", unit: { en: "g", bg: "г" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "120", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Lemon zest", bg: "Лимонова кора" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Melt butter, mix with sugar and eggs.", bg: "Разтопете масло, смесете със захар и яйца." } },
      { step: 2, instruction: { en: "Fold in flour and lemon zest, chill batter.", bg: "Смесете брашно и лимонова кора, охладете сместа." } },
      { step: 3, instruction: { en: "Bake in madeleine pans until golden hump forms.", bg: "Печете във форми за мадлен докато се образува златиста гърбица." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Chiles Rellenos", bg: "Чилес Реньос" },
    description: { en: "Stuffed poblano peppers with cheese and meat filling.", bg: "Пълнени чушки поблано със сирене и месна плънка." },
    prepTime: "40 min",
    cookTime: "25 min",
    servings: 6,
    ingredients: [
      { name: { en: "Poblano peppers", bg: "Чушки поблано" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Ground beef", bg: "Кайма" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Oaxaca cheese", bg: "Сирене Оахака" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "2", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Roast and peel peppers, stuff with meat and cheese.", bg: "Изпечете и обелете чушките, напълнете с месо и сирене." } },
      { step: 2, instruction: { en: "Dip in egg batter and fry until golden.", bg: "Потопете в яйчена смес и пържете до златисто." } },
      { step: 3, instruction: { en: "Serve with tomato sauce and rice.", bg: "Сервирайте с доматен сос и ориз." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Mole Poblano", bg: "Моле Поблано" },
    description: { en: "Rich dark sauce with chilies, chocolate, and spices.", bg: "Богат тъмен сос с чушки, шоколад и подправки." },
    prepTime: "30 min",
    cookTime: "90 min",
    servings: 8,
    ingredients: [
      { name: { en: "Chicken", bg: "Пиле" }, amount: "1.5", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Mulato chilies", bg: "Чушки мулато" }, amount: "8", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Dark chocolate", bg: "Тъмен шоколад" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Peanuts", bg: "Фъстъци" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Raisins", bg: "Сушени грозде" }, amount: "50", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Toast chilies and spices, blend with nuts.", bg: "Запечете чушки и подправки, смесете с ядки." } },
      { step: 2, instruction: { en: "Cook chicken separately, prepare mole sauce.", bg: "Сварете пилето отделно, пригответте моле сос." } },
      { step: 3, instruction: { en: "Combine chicken with mole, simmer 20 minutes.", bg: "Смесете пиле с моле, задушете 20 минути." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Enchiladas Verdes", bg: "Енчиладас Вердес" },
    description: { en: "Corn tortillas rolled with chicken and green salsa.", bg: "Тортили от царевица, навити с пиле и зелен сос." },
    prepTime: "25 min",
    cookTime: "20 min",
    servings: 6,
    ingredients: [
      { name: { en: "Corn tortillas", bg: "Тортили от царевица" }, amount: "12", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Chicken breast", bg: "Пилешки гърди" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Tomatillos", bg: "Томатилос" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Green chilies", bg: "Зелени чушки" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Sour cream", bg: "Заквасена сметана" }, amount: "200", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook and shred chicken, make green salsa.", bg: "Сварете и накъсайте пиле, направете зелен сос." } },
      { step: 2, instruction: { en: "Roll chicken in tortillas, place in baking dish.", bg: "Навийте пиле в тортили, сложете в тава за печене." } },
      { step: 3, instruction: { en: "Cover with salsa and cheese, bake until bubbly.", bg: "Залейте със сос и сирене, печете докато мехуркащо." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Pozole Rojo", bg: "Позоле Рохо" },
    description: { en: "Traditional hominy soup with pork and red chilies.", bg: "Традиционна супа от хомини със свинско и червени чушки." },
    prepTime: "30 min",
    cookTime: "150 min",
    servings: 8,
    ingredients: [
      { name: { en: "Pork shoulder", bg: "Свинско рамо" }, amount: "1.5", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Hominy", bg: "Хомини" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Guajillo chilies", bg: "Чушки гуахильо" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Radishes", bg: "Репички" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Lettuce", bg: "Маруля" }, amount: "1", unit: { en: "head", bg: "главо" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook pork with chilies until tender.", bg: "Сварете свинско с чушки докато омекне." } },
      { step: 2, instruction: { en: "Add hominy and simmer for 2 hours.", bg: "Добавете хомини и задушете 2 часа." } },
      { step: 3, instruction: { en: "Serve with radishes, lettuce, and lime.", bg: "Сервирайте с репички, маруля и лимон." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Carnitas", bg: "Карнитас" },
    description: { en: "Slow-cooked pork crispy on edges, tender inside.", bg: "Бавно сготвено свинско, хрупкаво отстрани, крехко отвътре." },
    prepTime: "20 min",
    cookTime: "180 min",
    servings: 8,
    ingredients: [
      { name: { en: "Pork butt", bg: "Свинско бут" }, amount: "2", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Orange juice", bg: "Портокалов сок" }, amount: "500", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Limes", bg: "Лайм" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "8", unit: { en: "cloves", bg: "скилидки" } },
      { name: { en: "Cumin", bg: "Кимион" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Simmer pork in orange juice and spices for 3 hours.", bg: "Задушете свинско в портокалов сок и подправки 3 часа." } },
      { step: 2, instruction: { en: "Shred pork, crisp on flat griddle.", bg: "Накъсайте свинско, запържете на плоска тава." } },
      { step: 3, instruction: { en: "Serve in tortillas with cilantro and onions.", bg: "Сервирайте в тортили с кориандър и лук." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Tamales", bg: "Тамалес" },
    description: { en: "Steamed corn dough with pork filling in corn husks.", bg: "Задушено тесто от царевица със свинска плънка в царевични листа." },
    prepTime: "60 min",
    cookTime: "90 min",
    servings: 12,
    ingredients: [
      { name: { en: "Masa harina", bg: "Маса харина" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Pork shoulder", bg: "Свинско рамо" }, amount: "1", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Corn husks", bg: "Царевични листа" }, amount: "24", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Lard", bg: "Свинска мас" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Red chilies", bg: "Червени чушки" }, amount: "6", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Prepare masa with lard and broth.", bg: "Пригответе маса със мас и бульон." } },
      { step: 2, instruction: { en: "Cook pork with chilies, shred for filling.", bg: "Сварете свинско с чушки, накъсайте за плънка." } },
      { step: 3, instruction: { en: "Spread masa on husks, add filling, steam 1 hour.", bg: "Разстелете маса по листата, добавете плънка, задушете 1 час." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Ceviche de Camarón", bg: "Севиче де Камарон" },
    description: { en: "Fresh shrimp cured in lime juice with vegetables.", bg: "Пресни шримпове мариновани в лимонов сок със зеленчуци." },
    prepTime: "30 min",
    cookTime: "30 min",
    servings: 6,
    ingredients: [
      { name: { en: "Shrimp", bg: "Шримп" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Limes", bg: "Лайм" }, amount: "8", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Cilantro", bg: "Кориандър" }, amount: "1", unit: { en: "bunch", bg: "връзка" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook shrimp briefly, cool and chop.", bg: "Сварете шримпове кратко, охладете и нарежете." } },
      { step: 2, instruction: { en: "Marinate with lime juice, add vegetables.", bg: "Мариновайте с лимонов сок, добавете зеленчуци." } },
      { step: 3, instruction: { en: "Chill 30 minutes, serve with tortilla chips.", bg: "Охладете 30 минути, сервирайте с чипсове." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Barbacoa", bg: "Барбакоа" },
    description: { en: "Slow-cooked lamb wrapped in maguey leaves.", bg: "Бавно сготвено агнешко, увито в листа от мавей." },
    prepTime: "45 min",
    cookTime: "240 min",
    servings: 8,
    ingredients: [
      { name: { en: "Lamb shoulder", bg: "Агнешко рамо" }, amount: "2", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Maguey leaves", bg: "Листа мавей" }, amount: "8", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Avocado leaves", bg: "Листа от авокадо" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Guajillo chilies", bg: "Чушки гуахильо" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Cumin", bg: "Кимион" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Marinate lamb with spices and chilies.", bg: "Мариновайте агнето с подправки и чушки." } },
      { step: 2, instruction: { en: "Wrap in maguey leaves, cook underground 4 hours.", bg: "Увийте в листа мавей, гответе под земя 4 часа." } },
      { step: 3, instruction: { en: "Shred meat, serve with tortillas and salsa.", bg: "Накъсайте месо, сервирайте с тортили и сос." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Sopa de Lima", bg: "Сопа де Лима" },
    description: { en: "Yucatan-style lime soup with chicken and tortilla strips.", bg: "Супа от лайм в стил Юкатан с пиле и лентички тортила." },
    prepTime: "25 min",
    cookTime: "45 min",
    servings: 6,
    ingredients: [
      { name: { en: "Chicken breast", bg: "Пилешки гърди" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Limes", bg: "Лайм" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Corn tortillas", bg: "Тортили от царевица" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Chicken broth", bg: "Пилешки бульон" }, amount: "1.5", unit: { en: "L", bg: "л" } },
      { name: { en: "Habenero chilies", bg: "Чушки хабанеро" }, amount: "2", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook chicken, shred and return to broth.", bg: "Сварете пиле, накъсайте и върнете в бульон." } },
      { step: 2, instruction: { en: "Add lime juice and fried tortilla strips.", bg: "Добавете лимонов сок и пържени лентички тортила." } },
      { step: 3, instruction: { en: "Serve with lime wedges and avocado.", bg: "Сервирайте с резени лайм и авокадо." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Chilaquiles", bg: "Чилакилес" },
    description: { en: "Breakfast dish with tortilla chips in green salsa.", bg: "Закуска с чипсове тортила в зелен сос." },
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Tortilla chips", bg: "Чипсове тортила" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Tomatillos", bg: "Томатилос" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Queso fresco", bg: "Кесо фреско" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Crema", bg: "Крема" }, amount: "100", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make green salsa with tomatillos and chilies.", bg: "Направете зелен сос с томатилос и чушки." } },
      { step: 2, instruction: { en: "Toss tortilla chips in salsa, top with eggs.", bg: "Разбъркайте чипсове в сос, сложете отгоре яйца." } },
      { step: 3, instruction: { en: "Garnish with cheese, crema, and onions.", bg: "Поръсете със сирене, крема и лук." } }
    ]
  },
  {
    countryCode: "MX",
    name: { en: "Flan de Naranja", bg: "Флан де Наранха" },
    description: { en: "Orange-infused caramel custard dessert.", bg: "Десерт карамел с аромат на портокал." },
    prepTime: "20 min",
    cookTime: "45 min",
    servings: 8,
    ingredients: [
      { name: { en: "Eggs", bg: "Яйца" }, amount: "5", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Sweetened condensed milk", bg: "Подсладено кондензирано мляко" }, amount: "400", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Evaporated milk", bg: "Изпарено мляко" }, amount: "200", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Orange zest", bg: "Портокалова кора" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make caramel with sugar, pour into mold.", bg: "Направете карамел от захар, изсипете във форма." } },
      { step: 2, instruction: { en: "Mix eggs, milks, and orange zest.", bg: "Разбъркайте яйца, мляка и портокалова кора." } },
      { step: 3, instruction: { en: "Bake in water bath until set, cool and invert.", bg: "Печете на водна баня докато се втвърди, охладете и обърнете." } }
    ]
  },
  {
    countryCode: "IN",
    name: { en: "Chicken Tikka Masala", bg: "Пиле Тика Масала" },
    description: { en: "Tender chicken in creamy tomato-based curry sauce.", bg: "Крехко пиле в кремообразен доматен сос къри." },
    prepTime: "30 min",
    cookTime: "45 min",
    servings: 6,
    ingredients: [
      { name: { en: "Chicken breast", bg: "Пилешки гърди" }, amount: "800", unit: { en: "g", bg: "г" } },
      { name: { en: "Yogurt", bg: "Кисело мляко" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Heavy cream", bg: "Тежка сметана" }, amount: "200", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Garam masala", bg: "Гарам масала" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Marinate chicken in yogurt and spices for 2 hours.", bg: "Мариновайте пиле в кисело мляко и подправки 2 часа." } },
      { step: 2, instruction: { en: "Grill chicken until charred, set aside.", bg: "Печете пиле на скара докато се опари, оставете настрана." } },
      { step: 3, instruction: { en: "Make curry sauce, add chicken and cream, simmer.", bg: "Направете сос къри, добавете пиле и сметана, задушете." } }
    ]
  },
    {
    countryCode: "IN",
    name: { en: "Biryani", bg: "Биряни" },
    description: { en: "Fragrant rice dish with spiced meat and vegetables.", bg: "Ароматно оризово ястие с подправено месо и зеленчуци." },
    prepTime: "45 min",
    cookTime: "60 min",
    servings: 8,
    ingredients: [
      { name: { en: "Basmati rice", bg: "Ориз басмати" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Chicken", bg: "Пиле" }, amount: "1", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Yogurt", bg: "Кисело мляко" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Saffron", bg: "Шафран" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Mint leaves", bg: "Листа мента" }, amount: "1", unit: { en: "cup", bg: "чаша" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Marinate chicken in yogurt and spices overnight.", bg: "Мариновайте пиле в кисело мляко и подправки за една нощ." } },
      { step: 2, instruction: { en: "Cook rice until 70% done, drain and cool.", bg: "Сварете ориз 70%, отцедете и охладете." } },
      { step: 3, instruction: { en: "Layer rice and chicken, cook covered on low heat.", bg: "Редете ориз и пиле, гответе с капак на слаб огън." } }
    ]
  },
  {
    countryCode: "IN",
    name: { en: "Samosas", bg: "Самоси" },
    description: { en: "Crispy triangular pastries filled with spiced potatoes.", bg: "Хрупкави триъгълни тестени изделия с пълнеж от подправени картофи." },
    prepTime: "60 min",
    cookTime: "25 min",
    servings: 12,
    ingredients: [
      { name: { en: "Potatoes", bg: "Картофи" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Peas", bg: "Грах" }, amount: "150", unit: { en: "g", bg: "г" } },
      { name: { en: "Flour", bg: "Брашно" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Cumin seeds", bg: "Семена кимион" }, amount: "2", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Coriander", bg: "Корандър" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make dough, rest for 30 minutes.", bg: "Направете тесто, оставете за 30 минути." } },
      { step: 2, instruction: { en: "Cook potatoes with peas and spices for filling.", bg: "Сварете картофи с грах и подправки за плънка." } },
      { step: 3, instruction: { en: "Fill and fold samosas, fry until golden.", bg: "Напълнете и сгънете самоси, пържете докато златисти." } }
    ]
  },
  {
    countryCode: "IN",
    name: { en: "Rogan Josh", bg: "Роган Джош" },
    description: { en: "Kashmiri lamb curry with aromatic spices.", bg: "Кашмирско агнешко къри с ароматни подправки." },
    prepTime: "30 min",
    cookTime: "90 min",
    servings: 6,
    ingredients: [
      { name: { en: "Lamb shoulder", bg: "Агнешко рамо" }, amount: "1.5", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Yogurt", bg: "Кисело мляко" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Kashmiri chilies", bg: "Кашмирски чушки" }, amount: "8", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Ginger", bg: "Джинджифил" }, amount: "3", unit: { en: "inches", bg: "инча" } },
      { name: { en: "Fennel powder", bg: "Смес от копър" }, amount: "2", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Marinate lamb in yogurt and spices for 2 hours.", bg: "Мариновайте агнешко в кисело мляко и подправки 2 часа." } },
      { step: 2, instruction: { en: "Brown meat, add water and simmer until tender.", bg: "Запържете месо, добавете вода и задушете докато омекне." } },
      { step: 3, instruction: { en: "Add Kashmiri chilies paste, cook until thick.", bg: "Добавете паста от кашмирски чушки, гответе докато се сгъсти." } }
    ]
  },
  {
    countryCode: "IN",
    name: { en: "Masala Dosa", bg: "Масала Доса" },
    description: { en: "Crispy fermented rice crepes with potato filling.", bg: "Хрупкави ферментирали оризови палачинки с картофена плънка." },
    prepTime: "480 min",
    cookTime: "30 min",
    servings: 8,
    ingredients: [
      { name: { en: "Rice", bg: "Ориз" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Urad dal", bg: "Урад дал" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Potatoes", bg: "Картофи" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Mustard seeds", bg: "Семена синап" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Soak rice and dal, ferment for 8 hours.", bg: "Накиснете ориз и дал, ферментирайте 8 часа." } },
      { step: 2, instruction: { en: "Make potato masala filling with spices.", bg: "Направете картофена масала плънка с подправки." } },
      { step: 3, instruction: { en: "Cook thin dosas, fill with potato, fold and serve.", bg: "Печете тънки доси, напълнете с картофи, сгънете и сервирайте." } }
    ]
  },
  {
    countryCode: "IN",
    name: { en: "Chole Bhature", bg: "Чоле Бхатуре" },
    description: { en: "Spiced chickpea curry with fluffy fried bread.", bg: "Подправено къри от нахут с пухкав пърж хляб." },
    prepTime: "240 min",
    cookTime: "45 min",
    servings: 6,
    ingredients: [
      { name: { en: "Chickpeas", bg: "Нахут" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Flour", bg: "Брашно" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Yogurt", bg: "Кисело мляко" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Ginger", bg: "Джинджифил" }, amount: "2", unit: { en: "inches", bg: "инча" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Soak chickpeas overnight, cook until tender.", bg: "Накиснете нахут за една нощ, сварете докато омекне." } },
      { step: 2, instruction: { en: "Make dough with yogurt, rest for 2 hours.", bg: "Направете тесто с кисело мляко, оставете 2 часа." } },
      { step: 3, instruction: { en: "Cook chickpea curry, fry bhature and serve.", bg: "Сварете къри от нахут, пържете бхатуре и сервирайте." } }
    ]
  },
  {
    countryCode: "IN",
    name: { en: "Vindaloo", bg: "Виндалу" },
    description: { en: "Spicy Goan curry with vinegar and garlic.", bg: "Остра гованско къри с оцет и чесън." },
    prepTime: "30 min",
    cookTime: "60 min",
    servings: 6,
    ingredients: [
      { name: { en: "Pork", bg: "Свинско" }, amount: "1", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Vinegar", bg: "Оцет" }, amount: "100", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Red chilies", bg: "Червени чушки" }, amount: "10", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "15", unit: { en: "cloves", bg: "скилидки" } },
      { name: { en: "Cumin", bg: "Кимион" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make vindaloo paste with chilies and vinegar.", bg: "Направете паста виндалу с чушки и оцет." } },
      { step: 2, instruction: { en: "Marinate pork in paste overnight.", bg: "Мариновайте свинско в пастата за една нощ." } },
      { step: 3, instruction: { en: "Cook pork with marinade until tender and spicy.", bg: "Сварете свинско с марината докато омекне и стане лютиво." } }
    ]
  },
  {
    countryCode: "IN",
    name: { en: "Korma", bg: "Корма" },
    description: { en: "Mild creamy curry with nuts and aromatic spices.", bg: "Леко кремообразно къри с ядки и ароматни подправки." },
    prepTime: "25 min",
    cookTime: "50 min",
    servings: 6,
    ingredients: [
      { name: { en: "Chicken", bg: "Пиле" }, amount: "800", unit: { en: "g", bg: "г" } },
      { name: { en: "Cashews", bg: "Кашу" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Yogurt", bg: "Кисело мляко" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Coconut milk", bg: "Кокосово мляко" }, amount: "400", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Cardamom", bg: "Кардамон" }, amount: "8", unit: { en: "pods", bg: "кутии" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Soak cashews, blend to smooth paste.", bg: "Накиснете кашу, смесете до гладка паста." } },
      { step: 2, instruction: { en: "Brown chicken, add yogurt and spices.", bg: "Запържете пиле, добавете кисело мляко и подправки." } },
      { step: 3, instruction: { en: "Add cashew paste and coconut milk, simmer gently.", bg: "Добавете паста от кашу и кокосово мляко, задушете внимателно." } }
    ]
  },
  {
    countryCode: "IN",
    name: { en: "Gulab Jamun", bg: "Гулаб Джамун" },
    description: { en: "Soft milk solids balls soaked in rose syrup.", bg: "Меки топчета от мляко, накиснати в розов сироп." },
    prepTime: "30 min",
    cookTime: "25 min",
    servings: 12,
    ingredients: [
      { name: { en: "Milk powder", bg: "Мляко на прах" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "All-purpose flour", bg: "Брашно" }, amount: "50", unit: { en: "g", bg: "г" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Rose water", bg: "Розова вода" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Cardamom powder", bg: "Кардаон на прах" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make dough with milk powder and flour.", bg: "Направете тесто от мляко на прах и брашно." } },
      { step: 2, instruction: { en: "Shape balls, fry until golden brown.", bg: "Оформете топчета, пържете докато златистокафяви." } },
      { step: 3, instruction: { en: "Make rose syrup, soak fried balls until soft.", bg: "Направете розов сироп, накиснете пържени топчета докато омекнат." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Pastitsio", bg: "Пастицио" },
    description: { en: "Baked pasta with meat sauce and béchamel topping.", bg: "Печена паста с месен сос и бешамел отгоре." },
    prepTime: "45 min",
    cookTime: "60 min",
    servings: 8,
    ingredients: [
      { name: { en: "Penne pasta", bg: "Паста пене" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Ground beef", bg: "Кайма" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Béchamel sauce", bg: "Бешамел сос" }, amount: "500", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Parmesan cheese", bg: "Сирене пармезан" }, amount: "150", unit: { en: "g", bg: "г" } },
      { name: { en: "Cinnamon", bg: "Канела" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook pasta, make meat sauce with cinnamon.", bg: "Сварете паста, направете месен сос с канела." } },
      { step: 2, instruction: { en: "Layer pasta, meat sauce, and béchamel.", bg: "Редете паста, месен сос и бешамел." } },
      { step: 3, instruction: { en: "Top with cheese, bake until golden brown.", bg: "Поръсете със сирене, печете докато покафенее." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Spanakopita", bg: "Спанакопита" },
    description: { en: "Spinach and feta cheese pie with phyllo pastry.", bg: "Пита със спанак и сирене фета с тесто фило." },
    prepTime: "40 min",
    cookTime: "45 min",
    servings: 8,
    ingredients: [
      { name: { en: "Spinach", bg: "Спанак" }, amount: "1", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Feta cheese", bg: "Сирене фета" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Phyllo pastry", bg: "Тесто фило" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Dill", bg: "Копър" }, amount: "3", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Sauté spinach and onions, mix with feta and herbs.", bg: "Запържете спанак и лук, смесете с фета и билки." } },
      { step: 2, instruction: { en: "Layer phyllo with filling, brush with butter.", bg: "Редете фило с плънка, намажете с масло." } },
      { step: 3, instruction: { en: "Bake until golden and crisp, cut into squares.", bg: "Печете докато златисто и хрупкаво, нарежете на квадрати." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Greek Salad", bg: "Гръцка Салата" },
    description: { en: "Fresh salad with feta, olives, and olive oil dressing.", bg: "Свежа салата с фета, маслини и дресинг със зехтин." },
    prepTime: "20 min",
    cookTime: "0 min",
    servings: 6,
    ingredients: [
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Cucumber", bg: "Краставица" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Red onion", bg: "Червен лук" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Kalamata olives", bg: "Маслини каламата" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Feta cheese", bg: "Сирене фета" }, amount: "200", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Chop vegetables, add olives and feta chunks.", bg: "Нарежете зеленчуци, добавете маслини и парчета фета." } },
      { step: 2, instruction: { en: "Make dressing with olive oil, lemon, and oregano.", bg: "Направете дресинг със зехтин, лимон и риган." } },
      { step: 3, instruction: { en: "Toss salad, let flavors meld 30 minutes.", bg: "Разбъркайте салата, оставете вкусовете да се слеят 30 минути." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Gyro", bg: "Гиро" },
    description: { en: "Rotisserie meat served in pita with tomatoes and onions.", bg: "Месо на вертел, сервирано в пита с домати и лук." },
    prepTime: "60 min",
    cookTime: "120 min",
    servings: 8,
    ingredients: [
      { name: { en: "Pork leg", bg: "Свински бут" }, amount: "2", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Pita bread", bg: "Пита хляб" }, amount: "8", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Paprika", bg: "Паприка" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Marinate pork with spices overnight.", bg: "Мариновайте свинско с подправки за една нощ." } },
      { step: 2, instruction: { en: "Cook on rotisserie for 2 hours until tender.", bg: "Гответе на вертел 2 часа докато омекне." } },
      { step: 3, instruction: { en: "Slice meat, serve in pita with vegetables.", bg: "Нарежете месо, сервирайте в пита със зеленчуци." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Baklava", bg: "Баклава" },
    description: { en: "Sweet pastry with layers of nuts and honey syrup.", bg: "Сладко тесто с кори от ядки и меден сироп." },
    prepTime: "45 min",
    cookTime: "50 min",
    servings: 12,
    ingredients: [
      { name: { en: "Phyllo pastry", bg: "Тесто фило" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Walnuts", bg: "Орехи" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Honey", bg: "Мед" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Cinnamon", bg: "Канела" }, amount: "2", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Chop nuts with cinnamon, layer with phyllo.", bg: "Нарежете ядки с канела, редете с фило." } },
      { step: 2, instruction: { en: "Brush layers with butter, score diamond pattern.", bg: "Намажете корите с масло, нарежете диамантена мрежа." } },
      { step: 3, instruction: { en: "Bake until golden, pour hot honey syrup over.", bg: "Печете докато златисто, залейте с горещ меден сироп." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Dolmades", bg: "Долмадес" },
    description: { en: "Stuffed grape leaves with rice and herbs.", bg: "Напълнени лозови листа с ориз и билки." },
    prepTime: "60 min",
    cookTime: "45 min",
    servings: 8,
    ingredients: [
      { name: { en: "Grape leaves", bg: "Лозови листа" }, amount: "50", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Rice", bg: "Ориз" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Dill", bg: "Копър" }, amount: "4", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Mint", bg: "Мента" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Lemon", bg: "Лимон" }, amount: "2", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Blanch grape leaves, cook rice with herbs.", bg: "Бланширайте лозови листа, сварете ориз с билки." } },
      { step: 2, instruction: { en: "Place filling on leaves, roll tightly.", bg: "Сложете плънка върху листа, навийте плътно." } },
      { step: 3, instruction: { en: "Layer in pot, add lemon juice, steam 45 minutes.", bg: "Редете в тенджера, добавете лимонов сок, задушете 45 минути." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Fasolada", bg: "Фасолада" },
    description: { en: "Traditional white bean soup with vegetables.", bg: "Традиционна супа от бял боб със зеленчуци." },
    prepTime: "30 min",
    cookTime: "90 min",
    servings: 8,
    ingredients: [
      { name: { en: "White beans", bg: "Бял боб" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Carrots", bg: "Моркови" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Celery", bg: "Целина" }, amount: "2", unit: { en: "stalks", bg: "стръка" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Olive oil", bg: "Зехтин" }, amount: "100", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Soak beans overnight, cook until tender.", bg: "Накиснете боб за една нощ, сварете докато омекне." } },
      { step: 2, instruction: { en: "Sauté vegetables, add tomatoes and beans.", bg: "Запържете зеленчуци, добавете домати и боб." } },
      { step: 3, instruction: { en: "Simmer 1 hour, finish with olive oil and herbs.", bg: "Задушете 1 час, завършете със зехтин и билки." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Saganaki", bg: "Саганаки" },
    description: { en: "Fried cheese with lemon and honey drizzle.", bg: "Пържено сирене с лимон и мед." },
    prepTime: "10 min",
    cookTime: "10 min",
    servings: 4,
    ingredients: [
      { name: { en: "Kasseri cheese", bg: "Сирене касери" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Flour", bg: "Брашно" }, amount: "50", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Lemon", bg: "Лимон" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Honey", bg: "Мед" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cut cheese into slices, coat with flour and egg.", bg: "Нарежете сирене на парчета, оваляйте с брашно и яйце." } },
      { step: 2, instruction: { en: "Fry in hot oil until golden and crispy.", bg: "Пържете в горещо масло докато златисто и хрупкаво." } },
      { step: 3, instruction: { en: "Serve immediately with lemon wedges and honey.", bg: "Сервирайте веднага с резени лимон и мед." } }
    ]
  },
  {
    countryCode: "GR",
    name: { en: "Loukoumades", bg: "Лукумадес" },
    description: { en: "Deep-fried dough balls soaked in honey syrup.", bg: "Пържени топчета тесто, накиснати в меден сироп." },
    prepTime: "90 min",
    cookTime: "20 min",
    servings: 12,
    ingredients: [
      { name: { en: "Flour", bg: "Брашно" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Yeast", bg: "Мая" }, amount: "10", unit: { en: "g", bg: "г" } },
      { name: { en: "Honey", bg: "Мед" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Cinnamon", bg: "Канела" }, amount: "2", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make yeast dough, let rise 1 hour.", bg: "Направете тесто с мая, оставете да втасне 1 час." } },
      { step: 2, instruction: { en: "Shape small balls, fry until golden brown.", bg: "Оформете малки топчета, пържете докато златистокафяви." } },
      { step: 3, instruction: { en: "Soak in warm honey syrup, sprinkle with cinnamon.", bg: "Накиснете в топъл меден сироп, поръсете с канела." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Kebab", bg: "Кебап" },
    description: { en: "Grilled marinated meat with vegetables and flatbread.", bg: "Печено мариновано месо със зеленчуци и плосък хляб." },
    prepTime: "30 min",
    cookTime: "20 min",
    servings: 6,
    ingredients: [
      { name: { en: "Lamb shoulder", bg: "Агнешко рамо" }, amount: "1", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Yogurt", bg: "Кисело мляко" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Pita bread", bg: "Пита хляб" }, amount: "6", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Marinate lamb in yogurt and spices overnight.", bg: "Мариновайте агнешко в кисело мляко и подправки за една нощ." } },
      { step: 2, instruction: { en: "Thread meat on skewers with vegetables, grill.", bg: "Нанижете месо и зеленчуци на шишчета, печете на скара." } },
      { step: 3, instruction: { en: "Serve in pita with grilled vegetables.", bg: "Сервирайте в пита с печени зеленчуци." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Baklava", bg: "Баклава" },
    description: { en: "Layered pastry with pistachios and honey syrup.", bg: "Слоесто тесто с фъстъци и меден сироп." },
    prepTime: "60 min",
    cookTime: "45 min",
    servings: 12,
    ingredients: [
      { name: { en: "Phyllo pastry", bg: "Тесто фило" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Pistachios", bg: "Фъстъци" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Butter", bg: "Масло" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Honey", bg: "Мед" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "200", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Chop pistachios, layer with buttered phyllo.", bg: "Нарежете фъстъци, редете с намазано с масло фило." } },
      { step: 2, instruction: { en: "Cut into diamonds, bake until golden.", bg: "Нарежете на диаманти, печете докато златисто." } },
      { step: 3, instruction: { en: "Pour hot honey syrup over, let cool.", bg: "Залейте с горещ меден сироп, оставете да се охлади." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Meze Platter", bg: "Мезе Плато" },
    description: { en: "Assortment of small appetizers with dips and spreads.", bg: "Асортимент от малки предястия с дипове и пастети." },
    prepTime: "45 min",
    cookTime: "30 min",
    servings: 8,
    ingredients: [
      { name: { en: "Hummus", bg: "Хумус" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggplant", bg: "Патладжан" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Olives", bg: "Маслини" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Feta cheese", bg: "Сирене фета" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Pita bread", bg: "Пита хляб" }, amount: "8", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make hummus and baba ghanoush.", bg: "Направете хумус и баба гануш." } },
      { step: 2, instruction: { en: "Arrange dips with olives and cheese.", bg: "Подредете дипове с маслини и сирене." } },
      { step: 3, instruction: { en: "Serve with warm pita bread.", bg: "Сервирайте с топла пита." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Lahmacun", bg: "Лахмаджун" },
    description: { en: "Thin flatbread topped with minced meat and vegetables.", bg: "Тънък хляб с кайма и зеленчуци отгоре." },
    prepTime: "60 min",
    cookTime: "15 min",
    servings: 6,
    ingredients: [
      { name: { en: "Ground lamb", bg: "Агнешка кайма" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Flour", bg: "Брашно" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Parsley", bg: "Магданоз" }, amount: "1", unit: { en: "bunch", bg: "връзка" } },
      { name: { en: "Lemon", bg: "Лимон" }, amount: "2", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make thin dough, let rest 30 minutes.", bg: "Направете тънко тесто, оставете 30 минути." } },
      { step: 2, instruction: { en: "Top with meat mixture, bake until crisp.", bg: "Покрийте с месна смес, печете докато хрупкаво." } },
      { step: 3, instruction: { en: "Roll with vegetables and lemon.", bg: "Навийте със зеленчуци и лимон." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Turkish Coffee", bg: "Турско Кафе" },
    description: { en: "Strong coffee brewed in cezve with foam.", bg: "Силно кафе, сварено в джезве с пяна." },
    prepTime: "5 min",
    cookTime: "10 min",
    servings: 4,
    ingredients: [
      { name: { en: "Turkish coffee", bg: "Турско кафе" }, amount: "4", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Water", bg: "Вода" }, amount: "400", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "4", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Cardamom", bg: "Кардамон" }, amount: "1", unit: { en: "pod", bg: "кутия" } },
      { name: { en: "Turkish delight", bg: "Турски delight" }, amount: "100", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mix coffee, water, and sugar in cezve.", bg: "Смесете кафе, вода и захар в джезве." } },
      { step: 2, instruction: { en: "Heat slowly until foam forms.", bg: "Загрейте бавно докато се образува пяна." } },
      { step: 3, instruction: { en: "Pour into cups, serve with Turkish delight.", bg: "Изсипете в чаши, сервирайте с турски delight." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Imam Bayildi", bg: "Имам Байълди" },
    description: { en: "Stuffed eggplant with tomatoes and olive oil.", bg: "Напълнен патладжан с домати и зехтин." },
    prepTime: "30 min",
    cookTime: "60 min",
    servings: 6,
    ingredients: [
      { name: { en: "Eggplant", bg: "Патладжан" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "6", unit: { en: "cloves", bg: "скилидки" } },
      { name: { en: "Olive oil", bg: "Зехтин" }, amount: "200", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Hollow eggplants, fry until golden.", bg: "Извадете сърцевината на патладжани, пържете докато златисти." } },
      { step: 2, instruction: { en: "Sauté vegetables, stuff eggplants.", bg: "Запържете зеленчуци, напълнете патладжани." } },
      { step: 3, instruction: { en: "Bake covered until tender.", bg: "Печете с капак докато омекнат." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Simit", bg: "Симит" },
    description: { en: "Sesame seed bread rings with chewy texture.", bg: "Хлябени пръстени със семена сусам и дъвкава текстура." },
    prepTime: "120 min",
    cookTime: "20 min",
    servings: 8,
    ingredients: [
      { name: { en: "Flour", bg: "Брашно" }, amount: "600", unit: { en: "g", bg: "г" } },
      { name: { en: "Yeast", bg: "Мая" }, amount: "10", unit: { en: "g", bg: "г" } },
      { name: { en: "Sesame seeds", bg: "Семена сусам" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Molasses", bg: "Меласа" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Salt", bg: "Сол" }, amount: "2", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make yeast dough, let rise 1 hour.", bg: "Направете тесто с мая, оставете да втасне 1 час." } },
      { step: 2, instruction: { en: "Shape rings, dip in molasses and sesame.", bg: "Оформете пръстени, потопете в меласа и сусам." } },
      { step: 3, instruction: { en: "Bake until golden brown.", bg: "Печете докато златистокафяво." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Menemen", bg: "Менемен" },
    description: { en: "Scrambled eggs with tomatoes and peppers.", bg: "Разбъркани яйца с домати и чушки." },
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 4,
    ingredients: [
      { name: { en: "Eggs", bg: "Яйца" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Green peppers", bg: "Зелени чушки" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Feta cheese", bg: "Сирене фета" }, amount: "100", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Sauté vegetables until soft.", bg: "Запържете зеленчуци докато омекнат." } },
      { step: 2, instruction: { en: "Add eggs and scramble gently.", bg: "Добавете яйца и разбъркайте внимателно." } },
      { step: 3, instruction: { en: "Top with feta, serve with bread.", bg: "Поръсете с фета, сервирайте с хляб." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Salep", bg: "Салеп" },
    description: { en: "Hot milky drink with orchid root powder.", bg: "Топла млечна напитка с прах от орхидея." },
    prepTime: "5 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Salep powder", bg: "Прах салеп" }, amount: "20", unit: { en: "g", bg: "г" } },
      { name: { en: "Milk", bg: "Мляко" }, amount: "1", unit: { en: "L", bg: "л" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "60", unit: { en: "g", bg: "г" } },
      { name: { en: "Cinnamon", bg: "Канела" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Rose water", bg: "Розова вода" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mix salep powder with cold milk.", bg: "Смесете прах салеп със студено мляко." } },
      { step: 2, instruction: { en: "Heat gently, stirring constantly until thick.", bg: "Загрейте внимателно, разбърквайте постоянно докато се сгъсти." } },
      { step: 3, instruction: { en: "Add sugar and rose water, serve with cinnamon.", bg: "Добавете захар и розова вода, сервирайте с канела." } }
    ]
  },
  {
    countryCode: "TR",
    name: { en: "Revani", bg: "Ревани" },
    description: { en: "Semolina cake soaked in lemon syrup.", bg: "Торта от грис, накисната в лимонов сироп." },
    prepTime: "20 min",
    cookTime: "40 min",
    servings: 8,
    ingredients: [
      { name: { en: "Semolina", bg: "Грис" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Yogurt", bg: "Кисело мляко" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Lemon", bg: "Лимон" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Coconut", bg: "Кокос" }, amount: "100", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mix semolina, yogurt, and sugar.", bg: "Смесете грис, кисело мляко и захар." } },
      { step: 2, instruction: { en: "Bake until golden, make lemon syrup.", bg: "Печете докато златисто, направете лимонов сироп." } },
      { step: 3, instruction: { en: "Pour hot syrup over cake, top with coconut.", bg: "Залейте горещ сироп върху тортата, поръсете с кокос." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Kung Pao Chicken", bg: "Кунг Пао Пиле" },
    description: { en: "Spicy stir-fried chicken with peanuts and chili.", bg: "Люто пържено пиле с фъстъци и чушки." },
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Chicken breast", bg: "Пилешки гърди" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Peanuts", bg: "Фъстъци" }, amount: "100", unit: { en: "g", bg: "г" } },
      { name: { en: "Dried chilies", bg: "Сушени чушки" }, amount: "8", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Soy sauce", bg: "Соев сос" }, amount: "3", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Rice wine", bg: "Оризово вино" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Marinate chicken, stir-fry with chilies.", bg: "Мариновайте пиле, запържете с чушки." } },
      { step: 2, instruction: { en: "Add sauce and peanuts, toss quickly.", bg: "Добавете сос и фъстъци, разбъркайте бързо." } },
      { step: 3, instruction: { en: "Serve over rice.", bg: "Сервирайте върху ориз." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Sweet and Sour Pork", bg: "Сладко-кисело Свинско" },
    description: { en: "Crispy pork with pineapple and sweet sour sauce.", bg: "Хрупкаво свинско с ананас и сладко-кисел сос." },
    prepTime: "30 min",
    cookTime: "20 min",
    servings: 6,
    ingredients: [
      { name: { en: "Pork loin", bg: "Свинско филе" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Pineapple", bg: "Ананас" }, amount: "1", unit: { en: "cup", bg: "чаша" } },
      { name: { en: "Bell peppers", bg: "Пиперки" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Rice vinegar", bg: "Оризов оцет" }, amount: "3", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "4", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Fry pork pieces until crispy.", bg: "Пържете парчета свинско докато хрупкави." } },
      { step: 2, instruction: { en: "Make sweet and sour sauce.", bg: "Направете сладко-кисел сос." } },
      { step: 3, instruction: { en: "Toss pork with vegetables and sauce.", bg: "Разбъркайте свинско със зеленчуци и сос." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Mapo Tofu", bg: "Мапо Тоуфу" },
    description: { en: "Silky tofu in spicy chili bean sauce.", bg: "Кадифено тофу в люти сос от чушки и боб." },
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      { name: { en: "Silken tofu", bg: "Кадифено тофу" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Ground pork", bg: "Свинска кайма" }, amount: "150", unit: { en: "g", bg: "г" } },
      { name: { en: "Chili bean paste", bg: "Паста от чушки и боб" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Sichuan peppercorns", bg: "Сичуански черен пипер" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Green onions", bg: "Зелен лук" }, amount: "3", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Brown pork with chili paste.", bg: "Запържете кайма с паста от чушки." } },
      { step: 2, instruction: { en: "Add tofu gently, simmer 5 minutes.", bg: "Добавете тофу внимателно, задушете 5 минути." } },
      { step: 3, instruction: { en: "Garnish with green onions and peppercorns.", bg: "Поръсете със зелен лук и черен пипер." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Dumplings", bg: "Кнедли" },
    description: { en: "Steamed or fried dumplings with pork and vegetable filling.", bg: "Задушени или пържени кнедли със свинска и зеленчукова плънка." },
    prepTime: "60 min",
    cookTime: "20 min",
    servings: 8,
    ingredients: [
      { name: { en: "Dumpling wrappers", bg: "Кори за кнедли" }, amount: "40", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Ground pork", bg: "Свинска кайма" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Cabbage", bg: "Зеле" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Ginger", bg: "Джинджифил" }, amount: "2", unit: { en: "inches", bg: "инча" } },
      { name: { en: "Soy sauce", bg: "Соев сос" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mix filling ingredients, season well.", bg: "Смесете съставки за плънка, овкусете добре." } },
      { step: 2, instruction: { en: "Fill wrappers, seal edges.", bg: "Напълнете кори, запечатайте ръбовете." } },
      { step: 3, instruction: { en: "Steam or fry until cooked.", bg: "Задушете или пържете докато сготвят." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Hot and Sour Soup", bg: "Люто-кисела Супа" },
    description: { en: "Spicy tangy soup with mushrooms, tofu, and bamboo shoots.", bg: "Люто-кисела супа с гъби, тофу и бамбукови кълчи." },
    prepTime: "20 min",
    cookTime: "25 min",
    servings: 6,
    ingredients: [
      { name: { en: "Mushrooms", bg: "Гъби" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Tofu", bg: "Тофу" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Bamboo shoots", bg: "Бамбукови кълчи" }, amount: "150", unit: { en: "g", bg: "г" } },
      { name: { en: "Rice vinegar", bg: "Оризов оцет" }, amount: "3", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "White pepper", bg: "Бял пипер" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Sauté mushrooms, add broth and bamboo.", bg: "Запържете гъби, добавете бульон и бамбук." } },
      { step: 2, instruction: { en: "Add tofu, season with vinegar and pepper.", bg: "Добавете тофу, овкусете с оцет и пипер." } },
      { step: 3, instruction: { en: "Thicken with cornstarch, add egg ribbons.", bg: "Сгъстете с нишесте, добавете яйчни ленти." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Peking Duck", bg: "Пекинска Патица" },
    description: { en: "Crispy roasted duck with pancakes and hoisin sauce.", bg: "Хрупкава печена патица с палачинки и сос хойсин." },
    prepTime: "24 hours",
    cookTime: "90 min",
    servings: 8,
    ingredients: [
      { name: { en: "Whole duck", bg: "Цяла патица" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Pancakes", bg: "Палачинки" }, amount: "16", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Hoisin sauce", bg: "Сос хойсин" }, amount: "200", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Scallions", bg: "Праз" }, amount: "8", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Cucumber", bg: "Краставица" }, amount: "2", unit: { en: "pcs", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Air dry duck 24 hours, roast at 200°C.", bg: "Охладете патица 24 часа, печете на 200°C." } },
      { step: 2, instruction: { en: "Carve duck, serve with pancakes and sauce.", bg: "Нарежете патица, сервирайте с палачинки и сос." } },
      { step: 3, instruction: { en: "Roll with scallions and cucumber.", bg: "Навийте с праз и краставица." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Fried Rice", bg: "Пържени Ориз" },
    description: { en: "Wok-fried rice with eggs, vegetables, and soy sauce.", bg: "Ориз, пържен в уок с яйца, зеленчуци и соев сос." },
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 4,
    ingredients: [
      { name: { en: "Cooked rice", bg: "Сварен ориз" }, amount: "3", unit: { en: "cups", bg: "чаши" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Frozen peas", bg: "Замразен грах" }, amount: "1", unit: { en: "cup", bg: "чаша" } },
      { name: { en: "Soy sauce", bg: "Соев сос" }, amount: "3", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Sesame oil", bg: "Сусамово масло" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Scramble eggs in hot wok, set aside.", bg: "Разбъркайте яйца в горещ уок, оставете настрана." } },
      { step: 2, instruction: { en: "Stir-fry rice with vegetables.", bg: "Разбъркайте ориз със зеленчуци." } },
      { step: 3, instruction: { en: "Add eggs and soy sauce, toss well.", bg: "Добавете яйца и соев сос, разбъркайте добре." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Wonton Soup", bg: "Супа Уонтон" },
    description: { en: "Clear broth with pork-filled wonton dumplings.", bg: "Бистър бульон с кнедли уонтон, пълнени със свинско." },
    prepTime: "45 min",
    cookTime: "15 min",
    servings: 6,
    ingredients: [
      { name: { en: "Wonton wrappers", bg: "Кори уонтон" }, amount: "30", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Ground pork", bg: "Свинска кайма" }, amount: "250", unit: { en: "g", bg: "г" } },
      { name: { en: "Chicken broth", bg: "Пилешки бульон" }, amount: "2", unit: { en: "L", bg: "л" } },
      { name: { en: "Green onions", bg: "Зелен лук" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Ginger", bg: "Джинджифил" }, amount: "1", unit: { en: "inch", bg: "инч" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Fill wontons with pork mixture.", bg: "Напълнете уонтони със свинска смес." } },
      { step: 2, instruction: { en: "Cook wontons in boiling broth.", bg: "Сварете уонтони във врящ бульон." } },
      { step: 3, instruction: { en: "Garnish with green onions.", bg: "Поръсете със зелен лук." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Spring Rolls", bg: "Пролетни рулца" },
    description: { en: "Crispy fried rolls with vegetable and pork filling.", bg: "Хрупкави пържени рулца със зеленчукова и свинска плънка." },
    prepTime: "40 min",
    cookTime: "15 min",
    servings: 8,
    ingredients: [
      { name: { en: "Spring roll wrappers", bg: "Кори за пролетни рулца" }, amount: "16", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Cabbage", bg: "Зеле" }, amount: "300", unit: { en: "g", bg: "г" } },
      { name: { en: "Carrots", bg: "Моркови" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Ground pork", bg: "Свинска кайма" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Bean sprouts", bg: "Сояови кълчи" }, amount: "150", unit: { en: "g", bg: "г" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Stir-fry filling ingredients, cool completely.", bg: "Запържете съставки за плънка, охладете напълно." } },
      { step: 2, instruction: { en: "Roll filling in wrappers, seal edges.", bg: "Навийте плънка в кори, запечатайте ръбовете." } },
      { step: 3, instruction: { en: "Fry until golden and crispy.", bg: "Пържете докато златисти и хрупкави." } }
    ]
  },
  {
    countryCode: "CN",
    name: { en: "Char Siu", bg: "Чар Сиу" },
    description: { en: "Barbecued pork with sweet glaze and red coloring.", bg: "Печено свинско със сладка глазура и червен цвят." },
    prepTime: "20 min",
    cookTime: "45 min",
    servings: 6,
    ingredients: [
      { name: { en: "Pork shoulder", bg: "Свинско рамо" }, amount: "800", unit: { en: "g", bg: "г" } },
      { name: { en: "Hoisin sauce", bg: "Сос хойсин" }, amount: "4", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Honey", bg: "Мед" }, amount: "3", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Red food coloring", bg: "Червена боя" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Five-spice powder", bg: "Петте подправки" }, amount: "2", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Mix glaze ingredients, marinate pork 2 hours.", bg: "Смесете съставки за глазура, мариновайте свинско 2 часа." } },
      { step: 2, instruction: { en: "Roast at 200°C, glaze every 10 minutes.", bg: "Печете на 200°C, глазирайте на всеки 10 минути." } },
      { step: 3, instruction: { en: "Slice thinly, serve with rice.", bg: "Нарежете на тънко, сервирайте с ориз." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Paella", bg: "Паеля" },
    description: { en: "Traditional rice dish with seafood and saffron.", bg: "Традиционно оризово ястие с морски дарове и шафран." },
    prepTime: "30 min",
    cookTime: "45 min",
    servings: 8,
    ingredients: [
      { name: { en: "Bomba rice", bg: "Ориз бомба" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Mixed seafood", bg: "Смес от морски дарове" }, amount: "600", unit: { en: "g", bg: "г" } },
      { name: { en: "Saffron", bg: "Шафран" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "4", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Chicken broth", bg: "Пилешки бульон" }, amount: "1.5", unit: { en: "L", bg: "л" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Sauté seafood, set aside.", bg: "Запържете морски дарове, оставете настрана." } },
      { step: 2, instruction: { en: "Cook sofrito, add rice and saffron.", bg: "Сварете софрито, добавете ориз и шафран." } },
      { step: 3, instruction: { en: "Add broth, arrange seafood, cook until done.", bg: "Добавете бульон, подредете морски дарове, гответе докато готово." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Tapas Variety", bg: "Разнообразие от Тапас" },
    description: { en: "Assortment of small Spanish appetizers.", bg: "Асортимент от малки испански предястия." },
    prepTime: "45 min",
    cookTime: "30 min",
    servings: 8,
    ingredients: [
      { name: { en: "Chorizo", bg: "Чоризо" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Manchego cheese", bg: "Сирене манчего" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Olives", bg: "Маслини" }, amount: "150", unit: { en: "g", bg: "г" } },
      { name: { en: "Bread", bg: "Хляб" }, amount: "1", unit: { en: "baguette", bg: "багета" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "4", unit: { en: "cloves", bg: "скилидки" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Prepare garlic bread and fried chorizo.", bg: "Пригответе чеснов хляб и пържено чоризо." } },
      { step: 2, instruction: { en: "Arrange cheese and olives.", bg: "Подредете сирене и маслини." } },
      { step: 3, instruction: { en: "Serve on small plates with wine.", bg: "Сервирайте на малки чинии с вино." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Gazpacho", bg: "Газпачо" },
    description: { en: "Cold tomato soup with vegetables and olive oil.", bg: "Студена доматена супа със зеленчуци и зехтин." },
    prepTime: "20 min",
    cookTime: "0 min",
    servings: 6,
    ingredients: [
      { name: { en: "Tomatoes", bg: "Домати" }, amount: "1", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Cucumber", bg: "Краставица" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Bell peppers", bg: "Пиперки" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Garlic", bg: "Чесън" }, amount: "3", unit: { en: "cloves", bg: "скилидки" } },
      { name: { en: "Olive oil", bg: "Зехтин" }, amount: "100", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Blend all vegetables until smooth.", bg: "Смесете всички зеленчуци до гладка смес." } },
      { step: 2, instruction: { en: "Add olive oil and vinegar, season.", bg: "Добавете зехтин и оцет, овкусете." } },
      { step: 3, instruction: { en: "Chill 4 hours, serve cold with croutons.", bg: "Охладете 4 часа, сервирайте студено с крутони." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Tortilla Española", bg: "Испанска Тортиля" },
    description: { en: "Thick omelette with potatoes and onions.", bg: "Плътен омлет с картофи и лук." },
    prepTime: "20 min",
    cookTime: "25 min",
    servings: 6,
    ingredients: [
      { name: { en: "Potatoes", bg: "Картофи" }, amount: "600", unit: { en: "g", bg: "г" } },
      { name: { en: "Eggs", bg: "Яйца" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Onions", bg: "Лук" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Olive oil", bg: "Зехтин" }, amount: "150", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Salt", bg: "Сол" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Cook potatoes and onions in oil until soft.", bg: "Сварете картофи и лук в олио докато омекнат." } },
      { step: 2, instruction: { en: "Beat eggs, mix with potatoes.", bg: "Разбийте яйца, смесете с картофи." } },
      { step: 3, instruction: { en: "Cook in pan, flip to finish.", bg: "Сварете в тиган, обърнете да се довърши." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Churros con Chocolate", bg: "Чурос с Шоколад" },
    description: { en: "Fried dough sticks with thick hot chocolate.", bg: "Пържени тестени пръчки с гъст горещ шоколад." },
    prepTime: "30 min",
    cookTime: "20 min",
    servings: 8,
    ingredients: [
      { name: { en: "Flour", bg: "Брашно" }, amount: "250", unit: { en: "g", bg: "г" } },
      { name: { en: "Water", bg: "Вода" }, amount: "250", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Dark chocolate", bg: "Тъмен шоколад" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Oil for frying", bg: "Олио за пържене" }, amount: "1", unit: { en: "L", bg: "л" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Make dough, pipe into hot oil.", bg: "Направете тесто, изстискайте в горещо олио." } },
      { step: 2, instruction: { en: "Fry until golden, coat with sugar.", bg: "Пържете докато златисти, поръсете със захар." } },
      { step: 3, instruction: { en: "Make thick chocolate for dipping.", bg: "Направете гъст шоколад за потапяне." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Fabada Asturiana", bg: "Фабада Астуриана" },
    description: { en: "Hearty bean stew with pork and sausages.", bg: "Засищаща бобова яхния със свинско и наденици." },
    prepTime: "8 hours",
    cookTime: "120 min",
    servings: 8,
    ingredients: [
      { name: { en: "White beans", bg: "Бял боб" }, amount: "500", unit: { en: "g", bg: "г" } },
      { name: { en: "Pork belly", bg: "Свинско коремче" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Chorizo", bg: "Чоризо" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Morcilla", bg: "Морсия" }, amount: "200", unit: { en: "g", bg: "г" } },
      { name: { en: "Saffron", bg: "Шафран" }, amount: "1", unit: { en: "tsp", bg: "ч.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Soak beans overnight, cook with meats.", bg: "Накиснете боб за една нощ, сварете с меса." } },
      { step: 2, instruction: { en: "Simmer 2 hours until beans are tender.", bg: "Задушете 2 часа докато бобът омекне." } },
      { step: 3, instruction: { en: "Serve in bowls with bread.", bg: "Сервирайте в купички с хляб." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Crema Catalana", bg: "Крема Каталана" },
    description: { en: "Custard dessert with caramelized sugar topping.", bg: "Десерт крем с карамелизирана захар отгоре." },
    prepTime: "30 min",
    cookTime: "45 min",
    servings: 6,
    ingredients: [
      { name: { en: "Milk", bg: "Мляко" }, amount: "1", unit: { en: "L", bg: "л" } },
      { name: { en: "Egg yolks", bg: "Яйчни жълтъци" }, amount: "6", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "150", unit: { en: "g", bg: "г" } },
      { name: { en: "Cinnamon stick", bg: "Пръчка канела" }, amount: "1", unit: { en: "pc", bg: "бр" } },
      { name: { en: "Lemon peel", bg: "Лимонова кора" }, amount: "1", unit: { en: "strip", bg: "парче" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Heat milk with cinnamon and lemon.", bg: "Загрейте мляко с канела и лимон." } },
      { step: 2, instruction: { en: "Whisk yolks with sugar, add hot milk.", bg: "Разбийте жълтъци със захар, добавете горещо мляко." } },
      { step: 3, instruction: { en: "Bake, caramelize sugar topping with torch.", bg: "Печете, карамелизирайте захарта отгоре с горелка." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Pimientos de Padrón", bg: "Пимиентос де Падрон" },
    description: { en: "Small green peppers fried with sea salt.", bg: "Малки зелени чушки, пържени с морска сол." },
    prepTime: "10 min",
    cookTime: "10 min",
    servings: 4,
    ingredients: [
      { name: { en: "Padrón peppers", bg: "Чушки падрон" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Olive oil", bg: "Зехтин" }, amount: "50", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Sea salt", bg: "Морска сол" }, amount: "2", unit: { en: "tsp", bg: "ч.л." } },
      { name: { en: "Lemon", bg: "Лимон" }, amount: "1", unit: { en: "pc", bg: "бр" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Wash and dry peppers thoroughly.", bg: "Измийте и подсушете чушките добре." } },
      { step: 2, instruction: { en: "Fry in hot oil until blistered.", bg: "Пържете в горещо олио докато се образуват мехурчета." } },
      { step: 3, instruction: { en: "Sprinkle with sea salt, serve with lemon.", bg: "Поръсете с морска сол, сервирайте с лимон." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Sangria", bg: "Сангрия" },
    description: { en: "Red wine punch with fruits and brandy.", bg: "Пунч от червено вино с плодове и коняк." },
    prepTime: "20 min",
    cookTime: "0 min",
    servings: 8,
    ingredients: [
      { name: { en: "Red wine", bg: "Червено вино" }, amount: "750", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Oranges", bg: "Портокали" }, amount: "3", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Lemons", bg: "Лимони" }, amount: "2", unit: { en: "pcs", bg: "бр" } },
      { name: { en: "Brandy", bg: "Коняк" }, amount: "100", unit: { en: "ml", bg: "мл" } },
      { name: { en: "Sugar", bg: "Захар" }, amount: "3", unit: { en: "tbsp", bg: "с.л." } }
    ],
    steps: [
      { step: 1, instruction: { en: "Slice citrus fruits, add to wine.", bg: "Нарежете цитрусови плодове, добавете към виното." } },
      { step: 2, instruction: { en: "Add brandy and sugar, stir well.", bg: "Добавете коняк и захар, разбъркайте добре." } },
      { step: 3, instruction: { en: "Chill 2 hours, serve over ice.", bg: "Охладете 2 часа, сервирайте с лед." } }
    ]
  },
  {
    countryCode: "ES",
    name: { en: "Polbo á Feira", bg: "Полбо а Фейра" },
    description: { en: "Galician-style boiled octopus with paprika.", bg: "Октопус на галски стил с паприка." },
    prepTime: "20 min",
    cookTime: "60 min",
    servings: 6,
    ingredients: [
      { name: { en: "Octopus", bg: "Октопус" }, amount: "1.5", unit: { en: "kg", bg: "кг" } },
      { name: { en: "Potatoes", bg: "Картофи" }, amount: "400", unit: { en: "g", bg: "г" } },
      { name: { en: "Sea salt", bg: "Морска сол" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Paprika", bg: "Паприка" }, amount: "2", unit: { en: "tbsp", bg: "с.л." } },
      { name: { en: "Olive oil", bg: "Зехтин" }, amount: "100", unit: { en: "ml", bg: "мл" } }
    ],
    steps: [
      { step: 1, instruction: { en: "Boil octopus until tender, slice.", bg: "Сварете октопус докато омекне, нарежете на резени." } },
      { step: 2, instruction: { en: "Cook potatoes, slice and arrange on plates.", bg: "Сварете картофи, нарежете и подредете на чинии." } },
      { step: 3, instruction: { en: "Top with octopus, drizzle with oil and paprika.", bg: "Покрийте с октопус, полейте с олио и паприка." } }
    ]
  }
];

function buildUniqueRecipeDataset() {
  const allRecipes = [];
  const recipeCounter = {};
  const seenRecipes = new Set();

  for (const countryMeta of countryCatalog) {
    const recipesForCountry = baseRecipes.filter((recipe) => recipe.countryCode === countryMeta.countryCode);
    
    console.log(`Processing ${countryMeta.countryCode}: ${recipesForCountry.length} recipes`);

    // Initialize counter for this country
    if (!recipeCounter[countryMeta.countryCode]) {
      recipeCounter[countryMeta.countryCode] = 0;
    }

    recipesForCountry.forEach((recipe, index) => {
      // Create a content signature to detect duplicates
      const contentSignature = recipeContentSignature(recipe);
      
      // Skip if we've already seen this recipe
      if (seenRecipes.has(contentSignature)) {
        console.log(`Skipping duplicate recipe: ${recipe.name.en} (signature: ${contentSignature.substring(0, 50)}...)`);
        return;
      }
      
      console.log(`Adding recipe: ${recipe.name.en} (signature: ${contentSignature.substring(0, 50)}...)`);
      seenRecipes.add(contentSignature);
      recipeCounter[countryMeta.countryCode]++;
      const recipeId = `${countryMeta.countryCode}-${recipeCounter[countryMeta.countryCode]}`;
      console.log(`Creating recipe: ${recipeId} - ${recipe.name.en}`);
      
      allRecipes.push({
        id: recipeId,
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
        image: `https://picsum.photos/seed/${countryMeta.countryCode.toLowerCase()}-${recipeCounter[countryMeta.countryCode]}/640/420`
      });
    });
  }

  console.log(`Total recipes created: ${allRecipes.length}`);
  return allRecipes;
}

function normalizeText(value) {
  return String(value).trim().toLowerCase();
}

function processInstruction(instruction, method = null, temperature = null, uiText = null) {
  let processedText = instruction.en;
  
  if (method) {
    const methodKey = method.toLowerCase();
    processedText = instruction.en.replace(
      new RegExp(`\\b(${methodKey})\\b`, 'gi'),
      `<strong>${method}</strong>`
    );
  }
  
  if (temperature) {
    processedText = processedText.replace(
      new RegExp(`(\\d+°[CF])`, 'g'),
      `<strong>$1 ${temperature}°C</strong>`
    );
  }
  
  return {
    en: processedText,
    bg: instruction.bg
  };
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

console.log("recipes-data.js: Setting up window data");
console.log("countryCatalog:", countryCatalog.length, "countries");
console.log("baseRecipes:", baseRecipes.length, "recipes");


try {
  const uniqueRecipes = buildUniqueRecipeDataset();
  console.log("buildUniqueRecipeDataset returned:", uniqueRecipes.length, "recipes");
  
  const dedupedRecipes = removeDuplicateRecipesByContent(uniqueRecipes);
  console.log("After deduplication:", dedupedRecipes.length, "recipes");
  
  window.countriesData = countryCatalog;
  window.recipeData = dedupedRecipes;
  
  console.log("Successfully set window.countriesData and window.recipeData");
  console.log("window.countriesData:", window.countriesData.length);
  console.log("window.recipeData:", window.recipeData.length);
} catch (error) {
  console.error("Error in recipes-data.js:", error);
}
