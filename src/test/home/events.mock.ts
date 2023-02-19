import {
  FREE_CONTRACT,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "./../../constanst/data.constants";
import { IEvents, IResEvents } from "src/models/home/events.interface";

// Data request
export const MockGetEvent: IEvents = {
  idEvent: 1,
  name: "string",
  date: "2022-03-10",
  description: "string",
  city: "string",
  idSport: 0,
  idUserCreator: 0,
  contractType: FREE_CONTRACT,
  eventType: OUTSIDE_OF_HOUSE,
};
// Data Response
export const MockGetEvents: IEvents[] = [
  {
    idEvent: 1,
    name: "Evento 1",
    date: "2023-03-10",
    description:
      "idEvent: 1; name: Evento 1; date: 2022-03-10; city: 149237; idSport: 1; idUserCreator: 0; contracttype: FREE_CONTRACT",
    city: "149237",
    idSport: 1,
    idUserCreator: 1,
    contractType: FREE_CONTRACT,
    eventType: OUTSIDE_OF_HOUSE,
  },
  {
    idEvent: 2,
    name: "Evento 2",
    date: "2023-03-11",
    description:
      "name: Evento 2; idSport: 2; idUserCreator: 1; contracttype: FREE_CONTRACT",
    city: "149237",
    idSport: 2,
    idUserCreator: 1,
    contractType: FREE_CONTRACT,
    eventType: OUTSIDE_OF_HOUSE,
  },
  {
    idEvent: 3,
    name: "Evento 3",
    date: "2023-03-11",
    description:
      "name: Evento 3; idSport: 3; idUserCreator: 1; contracttype: FREE_CONTRACT",
    city: "149237",
    idSport: 3,
    idUserCreator: 1,
    contractType: FREE_CONTRACT,
    eventType: OUTSIDE_OF_HOUSE,
  },
  {
    idEvent: 4,
    name: "Evento 4",
    date: "2023-03-11",
    description:
      "name: Evento 4; idSport: 4; idUserCreator: 1; contracttype: INTERMEDIATE_CONTRACT",
    city: "149237",
    idSport: 4,
    idUserCreator: 1,
    contractType: INTERMEDIATE_CONTRACT,
    eventType: OUTSIDE_OF_HOUSE,
  },
  {
    idEvent: 5,
    name: "Evento 5",
    date: "2023-03-11",
    description:
      "name: Evento 5; idSport: 5; idUserCreator: 1; contracttype: PREMIUM_CONTRACT",
    city: "149237",
    idSport: 5,
    idUserCreator: 1,
    contractType: PREMIUM_CONTRACT,
    eventType: OUTSIDE_OF_HOUSE,
  },
];

// Response
export const MockResSuccessGetEvents: IResEvents = {
  result: MockGetEvents,
  success: true,
  message: "Message Ok Events",
};

export const MockResErrorEvents: IResEvents = {
  success: false,
  message: "Message Error Events",
  result: null,
};
