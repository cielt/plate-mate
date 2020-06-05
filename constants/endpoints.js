const { NEXT_PUBLIC_API_DATA_GOV_KEY } = process.env;

console.log(process.env.NEXT_PUBLIC_API_DATA_GOV_KEY);

// USDA FoodCentral
const USDA_FOOD_CENTRAL_FOODS_LIST_URI = `https://api.nal.usda.gov/fdc/v1/foods/list?api_key=${NEXT_PUBLIC_API_DATA_GOV_KEY}`;

const USDA_FOOD_CENTRAL_FOODS_SEARCH_URI = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${NEXT_PUBLIC_API_DATA_GOV_KEY}`;

export { USDA_FOOD_CENTRAL_FOODS_LIST_URI, USDA_FOOD_CENTRAL_FOODS_SEARCH_URI };
