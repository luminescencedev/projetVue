import { defineStore } from 'pinia';

export const useChefsStore = defineStore('chefs', {
  state: () => ({
    chefs: [
      {
        id: 1,
        name: "Chef Pierre",
        description: "An expert in French cuisine with over 20 years of experience.",
        dishes: [
          { id: 1, name: "Croissant", description: "A buttery, flaky, and delicious pastry.", price: 2.5 },
          { id: 2, name: "Coq au Vin", description: "A classic French dish of chicken braised with wine, mushrooms, and garlic.", price: 15.0 }
        ]
      },
      {
        id: 2,
        name: "Chef Maria",
        description: "Specializes in Italian cuisine and seafood dishes.",
        dishes: [
          { id: 3, name: "Spaghetti Carbonara", description: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.", price: 12.0 },
          { id: 4, name: "Grilled Octopus", description: "Tender and flavorful grilled octopus served with a lemon-garlic sauce.", price: 18.0 }
        ]
      }
    ]
  })
});