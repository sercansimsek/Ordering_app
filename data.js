import { v4 as uuidv4 } from "uuid";

console.log(uuidv4());

const menuArray = [
	{
		name: "Pizza",
		ingredients: ["pepperoni", "mushroom", "mozzarella"],
		id: uuidv4(),
		price: 14,
		emoji: "🍕",
	},
	{
		name: "Hamburger",
		ingredients: ["beef", "cheese", "lettuce"],
		price: 12,
		emoji: "🍔",
		id: uuidv4(),
	},
	{
		name: "Beer",
		ingredients: ["grain", "hops", "yeast", "water"],
		price: 12,
		emoji: "🍺",
		id: uuidv4(),
	},
];

export default menuArray;
