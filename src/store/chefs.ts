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
      },
      {
        id: 3,
        name: "Chef John",
        description: "A master of American BBQ and grilling.",
        dishes: [
          { id: 5, name: "BBQ Ribs", description: "Slow-cooked ribs with a smoky BBQ sauce.", price: 20.0 },
          { id: 6, name: "Grilled Steak", description: "Juicy steak grilled to perfection.", price: 25.0 }
        ]
      },
      {
        id: 4,
        name: "Chef Akira",
        description: "Expert in Japanese cuisine and sushi.",
        dishes: [
          { id: 7, name: "Sushi Platter", description: "A variety of fresh sushi and sashimi.", price: 30.0 },
          { id: 8, name: "Ramen", description: "Traditional Japanese noodle soup with pork and vegetables.", price: 12.0 }
        ]
      },
      {
        id: 5,
        name: "Chef Carlos",
        description: "Specializes in Mexican cuisine and street food.",
        dishes: [
          { id: 9, name: "Tacos", description: "Soft tacos filled with seasoned meat, cheese, and salsa.", price: 8.0 },
          { id: 10, name: "Guacamole", description: "Freshly made guacamole with avocados, lime, and cilantro.", price: 5.0 }
        ]
      },
      {
        id: 6,
        name: "Chef Anjali",
        description: "Expert in Indian cuisine and spices.",
        dishes: [
          { id: 11, name: "Butter Chicken", description: "Creamy and flavorful chicken curry.", price: 14.0 },
          { id: 12, name: "Paneer Tikka", description: "Grilled paneer cubes marinated in spices.", price: 10.0 }
        ]
      },
      {
        id: 7,
        name: "Chef Elena",
        description: "Specializes in Russian cuisine and traditional dishes.",
        dishes: [
          { id: 13, name: "Borscht", description: "A hearty beet soup with sour cream.", price: 7.0 },
          { id: 14, name: "Pelmeni", description: "Dumplings filled with meat and served with butter.", price: 12.0 }
        ]
      },
      {
        id: 8,
        name: "Chef Ahmed",
        description: "Master of Middle Eastern cuisine and flavors.",
        dishes: [
          { id: 15, name: "Falafel", description: "Crispy chickpea balls served with tahini sauce.", price: 6.0 },
          { id: 16, name: "Shawarma", description: "Marinated meat wrapped in pita bread with vegetables.", price: 10.0 }
        ]
      }
    ]
  })
});