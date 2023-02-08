import {
  IResUserSportProfile,
  IUserSportProfile,
} from "src/models/profile/sport-profile.interface";

// Data request
export const MockSportProfile: IUserSportProfile = {
  sport_practice: [
    {
      id: "2",
      title: "Atletismo",
      description: "Este deporte es atletismo",
    },
    {
      id: "3",
      title: "Levantamiento de pesas",
      description: "Este deporte es levantamiento de pesas",
    },
  ],
  sport_interest: [
    {
      id: "2",
      title: "Atletismo",
      description: "Este deporte es atletismo",
    },
    {
      id: "3",
      title: "Levantamiento de pesas",
      description: "Este deporte es levantamiento de pesas",
    },
    {
      id: "4",
      title: "Ciclismo2",
      description: "Este deporte es ciclismo2",
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
      id: "2",
      title: "Atletismo",
      description: "Este deporte es atletismo",
    },
    {
      id: "3",
      title: "Levantamiento de pesas",
      description: "Este deporte es levantamiento de pesas",
    },
  ],
  sport_interest: [
    {
      id: "2",
      title: "Atletismo",
      description: "Este deporte es atletismo",
    },
    {
      id: "3",
      title: "Levantamiento de pesas",
      description: "Este deporte es levantamiento de pesas",
    },
    {
      id: "4",
      title: "Ciclismo2",
      description: "Este deporte es ciclismo2",
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
        id: "2",
        title: "Atletismo",
        description: "Este deporte es atletismo",
      },
      {
        id: "3",
        title: "Levantamiento de pesas",
        description: "Este deporte es levantamiento de pesas",
      },
    ],
    sport_interest: [
      {
        id: "2",
        title: "Atletismo",
        description: "Este deporte es atletismo",
      },
      {
        id: "3",
        title: "Levantamiento de pesas",
        description: "Este deporte es levantamiento de pesas",
      },
      {
        id: "4",
        title: "Ciclismo2",
        description: "Este deporte es ciclismo2",
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
