import {
  IResTrainingRoutines,
  ITrainingRoutines,
} from "src/models/routines/training-routines.interface";

// Data request
export const MockTrainingRoutines: ITrainingRoutines = {
  title: "Rutina aumento de brazo",
  description: "Esta es una rutina de aumento de brazo",
  calories: 500,
  time: 45,
  objectives: [
    {
      name: "Objetivo 1",
    },
    {
      name: "Objetivo 2",
    },
  ],
  category: "INSIDE_OF_HOUSE",
  exercises: [
    {
      id: "1",
      title: "Bicicleta estática",
      description: "Este ejercicio es bicicleta estatica",
      calories: "500",
      timeMinutes: "35",
    },
    {
      id: "2",
      title: "Salto de cuerda",
      description: "Este ejercicio es Salto de cuerda",
      calories: "30",
      timeMinutes: "15",
    },
    {
      id: "3",
      title: "Calistenia",
      description: "Este ejercicio es calistenia",
      calories: "400",
      timeMinutes: "20",
    },
  ],
};
// Data Response
export const MockGetTrainingRoutines: ITrainingRoutines = {
  id: "1",
  title: "Rutina aumento de brazo",
  description: "Esta es una rutina de aumento de brazo",
  calories: 500,
  time: 45,
  objectives: [
    {
      name: "Objetivo 1",
    },
    {
      name: "Objetivo 2",
    },
  ],
  category: "INSIDE_OF_HOUSE",
  exercises: [
    {
      id: "1",
      title: "Bicicleta estática",
      description: "Este ejercicio es bicicleta estatica",
      calories: "500",
      timeMinutes: "35",
    },
    {
      id: "2",
      title: "Salto de cuerda",
      description: "Este ejercicio es Salto de cuerda",
      calories: "30",
      timeMinutes: "15",
    },
    {
      id: "3",
      title: "Calistenia",
      description: "Este ejercicio es calistenia",
      calories: "400",
      timeMinutes: "20",
    },
  ],
};
export const MockGetAllTrainingRoutines: ITrainingRoutines[] = [
  {
    id: "1",
    title: "Rutina aumento de brazo",
    description: "Esta es una rutina de aumento de brazo",
    calories: 500,
    time: 45,
    objectives: [
      {
        name: "Objetivo 1",
      },
      {
        name: "Objetivo 2",
      },
    ],
    category: "INSIDE_OF_HOUSE",
    exercises: [
      {
        id: "1",
        title: "Bicicleta estática1",
        description: "Este ejercicio es bicicleta estatica",
        calories: "500",
        timeMinutes: "35",
      },
      {
        id: "2",
        title: "Salto de cuerda1",
        description: "Este ejercicio es Salto de cuerda",
        calories: "30",
        timeMinutes: "15",
      },
      {
        id: "3",
        title: "Calistenia1",
        description: "Este ejercicio es calistenia",
        calories: "400",
        timeMinutes: "20",
      },
    ],
  },
  {
    id: "2",
    title: "Rutina aumento de espalda",
    description: "Esta es una rutina de aumento de espalda",
    calories: 300,
    time: 35,
    objectives: [
      {
        name: "Objetivo 1",
      },
      {
        name: "Objetivo 2",
      },
    ],
    category: "INSIDE_OF_HOUSE",
    exercises: [
      {
        id: "1",
        title: "Bicicleta estática2",
        description: "Este ejercicio es bicicleta estatica",
        calories: "500",
        timeMinutes: "35",
      },
      {
        id: "2",
        title: "Salto de cuerda2",
        description: "Este ejercicio es Salto de cuerda",
        calories: "30",
        timeMinutes: "15",
      },
      {
        id: "3",
        title: "Calistenia2",
        description: "Este ejercicio es calistenia",
        calories: "400",
        timeMinutes: "20",
      },
    ],
  },
  {
    id: "3",
    title: "Rutina Calentamiento",
    description: "Esta es una rutina de aumento de brazo",
    calories: 100,
    time: 15,
    objectives: [
      {
        name: "Objetivo 1",
      },
      {
        name: "Objetivo 2",
      },
    ],
    category: "OUTSIDE_OF_HOUSE",
    exercises: [
      {
        id: "1",
        title: "Bicicleta estática3",
        description: "Este ejercicio es bicicleta estatica",
        calories: "500",
        timeMinutes: "35",
      },
      {
        id: "2",
        title: "Salto de cuerda3",
        description: "Este ejercicio es Salto de cuerda",
        calories: "30",
        timeMinutes: "15",
      },
      {
        id: "3",
        title: "Calistenia3",
        description: "Este ejercicio es calistenia",
        calories: "400",
        timeMinutes: "20",
      },
    ],
  },
  {
    id: "4",
    title: "Rutina Calentamiento-Rutina Calentamiento4",
    description:
      "Esta es una rutina de aumento de brazo, Esta es una rutina de aumento de brazo4",
    calories: 100,
    time: 15,
    objectives: [
      {
        name: "Objetivo 1",
      },
      {
        name: "Objetivo 2",
      },
    ],
    category: "OUTSIDE_OF_HOUSE",
    exercises: [
      {
        id: "1",
        title: "Bicicleta estática4",
        description:
          "Este ejercicio es bicicleta estatica, Este ejercicio es bicicleta estatica, Este ejercicio es bicicleta estatica4",
        calories: "500",
        timeMinutes: "35",
      },
      {
        id: "2",
        title: "Salto de cuerda4",
        description: "Este ejercicio es Salto de cuerda4",
        calories: "30",
        timeMinutes: "15",
      },
      {
        id: "3",
        title: "Calistenia4",
        description: "Este ejercicio es calistenia4",
        calories: "400",
        timeMinutes: "20",
      },
    ],
  },
];

// Response
export const MockResSuccessGetTrainingRoutines: IResTrainingRoutines = {
  response: MockGetTrainingRoutines,
  success: true,
  message: "message",
};
export const MockResSuccessGetAllTrainingRoutines: IResTrainingRoutines = {
  responseAll: MockGetAllTrainingRoutines,
  success: true,
  message: "message",
};

export const MockResSuccessTrainingRoutines: IResTrainingRoutines = {
  success: true,
  message: "message",
};
export const MockResErrorTrainingRoutines: IResTrainingRoutines = {
  success: false,
  message: "Error TrainingRoutines",
};
