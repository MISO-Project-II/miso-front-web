import { IFoodPlans } from "src/models/home/food-plans.interface";

export const MockGetAllFoodPlans: IFoodPlans[] = [
  {
    idFoodPlan: 1,
    name: "Plan Más carne que tomate",
    description: "Ganar mayor masa muscular",
    contractType: "FREE_CONTRACT",
    eventType: "INSIDE_OF_HOUSE",
    foodRoutineList: [
      {
        idFoodRoutine: 3,
        foodFrecuency: {
          idFoodFrecuency: 1,
          minute: 0,
          hour: 1,
          dayLetter: "X",
        },
        food: [],
        name: "Carne",
        description: "Solo Carne",
      },
      {
        idFoodRoutine: 2,
        foodFrecuency: {
          idFoodFrecuency: 1,
          minute: 0,
          hour: 1,
          dayLetter: "X",
        },
        food: [
          {
            idFood: 2,
            nameFood: "Tomate",
            calories: 1,
            description: "tomate",
            idUbication: "co-",
            foodType: {
              idFoodType: 1,
              name: "verdura",
              isVegan: 1,
              isVegetarian: 1,
            },
          },
        ],
        name: "dolore ea dolor velit exercitation",
        description: "ad est consequat",
      },
    ],
  },
  {
    idFoodPlan: 2,
    name: "Plan Más carne ",
    description: "Ganar mayor masa muscular solo con carne",
    contractType: "FREE_CONTRACT",
    eventType: "INSIDE_OF_HOUSE",
    foodRoutineList: [
      {
        idFoodRoutine: 3,
        foodFrecuency: {
          idFoodFrecuency: 1,
          minute: 0,
          hour: 1,
          dayLetter: "X",
        },
        food: [],
        name: "Carne",
        description: "Solo Carne",
      },
    ],
  },
  {
    idFoodPlan: 3,
    name: "Plan Más carne que tomate II",
    description: "Ganar mayor masa muscular II",
    contractType: "FREE_CONTRACT",
    eventType: "INSIDE_OF_HOUSE",
    foodRoutineList: [
      {
        idFoodRoutine: 2,
        foodFrecuency: {
          idFoodFrecuency: 1,
          minute: 0,
          hour: 1,
          dayLetter: "X",
        },
        food: [
          {
            idFood: 2,
            nameFood: "Tomate",
            calories: 1,
            description: "tomate",
            idUbication: "co-",
            foodType: {
              idFoodType: 1,
              name: "verdura",
              isVegan: 1,
              isVegetarian: 1,
            },
          },
        ],
        name: "dolore ea dolor velit exercitation",
        description: "ad est consequat",
      },
    ],
  },
];
