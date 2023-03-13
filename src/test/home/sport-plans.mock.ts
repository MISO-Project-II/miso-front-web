import { ISportPlans } from "src/models/home/sport-plans.interface";

export const MockGetAllSportPlans: ISportPlans[] = [
  {
    idSportPlan: 1,
    name: "string",
    description: "string",
    contractType: "FREE_CONTRACT",
    eventType: "INSIDE_OF_HOUSE",
    sportRoutineList: [
      {
        idSportRoutine: 1,
        sportFrecuency: {
          idSportFrecuency: 1,
          minute: 0,
          hour: 8,
          dayLetter: "S-D",
        },
        sports: [
          {
            idsports: 5,
            name: "string",
            description: "string",
            sport_type: "string",
          },
        ],
        name: "string",
        description: "string",
      },
    ],
  },
];
