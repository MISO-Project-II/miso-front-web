import {
  IResUserSportProfile,
  IUserSportProfile,
} from "src/models/profile/sport-profile.interface";

// Data request
export const MockSportProfile: IUserSportProfile = {
  sport_practice: [
    {
      description:
        "Está considerado como uno de los ejercicios más completos para la salud. Con 30 minutos quemaremos 517 calorías y trabajaremos todo el cuerpo de manera completa. Conseguiremos aumentar la resistencia del cuerpo y la flexibilidad del abdomen.",
      idsports: 1,
      name: "Squash",
    },
    {
      description:
        "Es uno de los deportes más conocidos. Exige trabajar en equipo y en ocasiones concentración. Nos ayudará a ejercitar todo el cuerpo y entre otras cosas conseguirá incrementar la resistencia, la fuerza y la flexibilidad muscular.",
      idsports: 2,
      name: "Fútbol",
    },
  ],
  sport_interest: [
    {
      description:
        "Catalogado por algunos como la actividad más completa. Consigue fortalecer los huesos y aporta resistencia, flexibilidad y fuerza. Antes de ponerse a nadar sería interesante aprender la técnica. Conseguirás quemar 350 calorías en media hora.",
      idsports: 3,
      name: "Natación",
    },
    {
      description:
        "Requiere el uso obligatorio de una pelota y raqueta, y puede jugarse de manera individual o en equipo.",
      idsports: 4,
      name: "Tenis",
    },
  ],
  practice_hours: "8",
  disabilities: "Incapacidad1\nIncapacidad2",
  pains: "Dolor de tobillo, otro dolor",
  sports_history: "Esto es una Histirua deportiva",
};

// Data Response
export const MockGetSportProfile: IUserSportProfile = {
  id: "1",
  sport_practice: [
    {
      description:
        "Está considerado como uno de los ejercicios más completos para la salud. Con 30 minutos quemaremos 517 calorías y trabajaremos todo el cuerpo de manera completa. Conseguiremos aumentar la resistencia del cuerpo y la flexibilidad del abdomen.",
      idsports: 1,
      name: "Squash",
    },
    {
      description:
        "Es uno de los deportes más conocidos. Exige trabajar en equipo y en ocasiones concentración. Nos ayudará a ejercitar todo el cuerpo y entre otras cosas conseguirá incrementar la resistencia, la fuerza y la flexibilidad muscular.",
      idsports: 2,
      name: "Fútbol",
    },
  ],
  sport_interest: [
    {
      description:
        "Catalogado por algunos como la actividad más completa. Consigue fortalecer los huesos y aporta resistencia, flexibilidad y fuerza. Antes de ponerse a nadar sería interesante aprender la técnica. Conseguirás quemar 350 calorías en media hora.",
      idsports: 3,
      name: "Natación",
    },
    {
      description:
        "Requiere el uso obligatorio de una pelota y raqueta, y puede jugarse de manera individual o en equipo.",
      idsports: 4,
      name: "Tenis",
    },
  ],
  practice_hours: "8",
  disabilities: "Incapacidad1\nIncapacidad2",
  pains: "Dolor de tobillo, otro dolor",
  sports_history: "Esto es una Histirua deportiva",
};
export const MockGetAllSportProfile: IUserSportProfile[] = [
  {
    id: "1",
    sport_practice: [
      {
        description:
          "Está considerado como uno de los ejercicios más completos para la salud. Con 30 minutos quemaremos 517 calorías y trabajaremos todo el cuerpo de manera completa. Conseguiremos aumentar la resistencia del cuerpo y la flexibilidad del abdomen.",
        idsports: 1,
        name: "Squash",
      },
      {
        description:
          "Es uno de los deportes más conocidos. Exige trabajar en equipo y en ocasiones concentración. Nos ayudará a ejercitar todo el cuerpo y entre otras cosas conseguirá incrementar la resistencia, la fuerza y la flexibilidad muscular.",
        idsports: 2,
        name: "Fútbol",
      },
    ],
    sport_interest: [
      {
        description:
          "Catalogado por algunos como la actividad más completa. Consigue fortalecer los huesos y aporta resistencia, flexibilidad y fuerza. Antes de ponerse a nadar sería interesante aprender la técnica. Conseguirás quemar 350 calorías en media hora.",
        idsports: 3,
        name: "Natación",
      },
      {
        description:
          "Requiere el uso obligatorio de una pelota y raqueta, y puede jugarse de manera individual o en equipo.",
        idsports: 4,
        name: "Tenis",
      },
    ],
    practice_hours: "8",
    disabilities: "Incapacidad1\nIncapacidad2",
    pains: "Dolor de tobillo, otro dolor",
    sports_history: "Esto es una Histirua deportiva",
  },
];

// Response
export const MockResSuccessGetSportProfile: IResUserSportProfile = {
  response: MockGetSportProfile,
  success: true,
  message: "message",
};
export const MockResSuccessGetAllSportProfile: IResUserSportProfile = {
  responseAll: MockGetAllSportProfile,
  success: true,
  message: "message",
};

export const MockResSuccessSportProfile: IResUserSportProfile = {
  success: true,
  message: "message",
};
export const MockResErrorSportProfile: IResUserSportProfile = {
  success: false,
  message: "Error SportProfile",
};
