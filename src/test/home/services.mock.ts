import {
  IResServices,
  IResUserServices,
  IServices,
} from "src/models/home/services.interface";

// Data request
export const MockEvent: IServices = {
  id: 1,
  name: "Información de eventos deportivos",
  description: "Provee información gratuita de eventos",
  idUserCreator: 1,
  idSport: 1,
  price: 0.0,
  contractType: "FREE_CONTRACT",
  eventType: "OUTSIDE_OF_HOUSE",
};
// Data Response
export const MockGetServices: IServices[] = [
  {
    id: 4,
    name: "Arriendo bicicletas",
    description:
      "Provee alquier de bicicletas, este servicio se hace coordinación vía telefónica",
    idUserCreator: 8,
    idSport: 4,
    price: 40.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 7,
    name: "Coach deportivo (1 semana)",
    description:
      "Permite tener recomendaaciones por una semana de un profesional en el deporte",
    idUserCreator: 8,
    idSport: 4,
    price: 50.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 1,
    name: "Información de eventos deportivos",
    description: "Provee información gratuita de eventos",
    idUserCreator: 1,
    idSport: 1,
    price: 0.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 8,
    name: "Mantemiento bicleta",
    description: "Mantenimiento de neumático de biciletas",
    idUserCreator: 8,
    idSport: 5,
    price: 100.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 9,
    name: "Seguimiento con coach en tracking",
    description:
      "Seguimiento de usuario en bicileta llevando por rutas seguras y de mayor entrenamiento",
    idUserCreator: 1,
    idSport: 5,
    price: 20.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 17,
    name: "Ajuste/sustitucion de cambios",
    description: "Servicio para el cambio de biciletas propias o de terceros",
    idUserCreator: 8,
    idSport: 5,
    price: 30.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 13,
    name: "Asesoramiento personalizado",
    description:
      "Provee atención al usuario para consultas por cualquier medio y seguimiento durante el tracking",
    idUserCreator: 1,
    idSport: 11,
    price: 5.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 10,
    name: "Instalación de componentes adicionales",
    description:
      "Provee instalación de componentes necesarios en equipos de ciclismos",
    idUserCreator: 1,
    idSport: 5,
    price: 70.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 12,
    name: "Servicio de hidratación",
    description:
      "Provee botellas de agua, infusiones para el usuario durante la carrea, aplicable mayores a 20km",
    idUserCreator: 1,
    idSport: 10,
    price: 35.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 16,
    name: "Servicio médico durante carrera",
    description:
      "Servicio que provee un medico especializado en caso de emergencia o dolencia durante una carrera mayor a 10k",
    idUserCreator: 1,
    idSport: 10,
    price: 15.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 15,
    name: "Instalación de Frenos y purgue",
    description:
      "Servicio de mantenimiento o cambio de frenos, no se realiza a domicilio",
    idUserCreator: 8,
    idSport: 7,
    price: 5.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 14,
    name: "Traslado privado en caso de agotamiento",
    description:
      "Permite al usuario disponer de un traslado privado mediante un vehiculo en caso de agotamiento o emergencia",
    idUserCreator: 8,
    idSport: 11,
    price: 5.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 18,
    name: "Servicio de ajuste suspension de bicicleta",
    description:
      "Servicio que permite el ajuste de suspensión de cualquier bicicleta, maximo aplicable a dos unidades",
    idUserCreator: 8,
    idSport: 5,
    price: 35.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 11,
    name: "Guia para senderismo",
    description:
      "Provee guia de un profesional para tomar las mejores rutas y vistas",
    idUserCreator: 8,
    idSport: 11,
    price: 120.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 3,
    name: "Información de competencias financiadas",
    description:
      "Provee información de competencias con premios en dinero o físicos",
    idUserCreator: 8,
    idSport: 3,
    price: 10.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
  {
    id: 2,
    name: "Información de clubs deportivos",
    description: "Provee información para afiliarse algún club",
    idUserCreator: 8,
    idSport: 2,
    price: 0.0,
    contractType: "FREE_CONTRACT",
    eventType: "OUTSIDE_OF_HOUSE",
  },
];
// Response
export const MockResSuccessGetServices: IResServices = {
  result: MockGetServices,
  success: true,
  message: "Message Ok Services",
};

export const MockResErrorServices: IResServices = {
  success: false,
  message: "Message Error Services",
  result: null,
};
// XXX
export const MockGetUserServicesConsume: IResUserServices = {
  message: "success",
  success: true,
  result: {
    idUser: 1,
    "produce-services": [
      {
        name: "Información de competencias financiadas",
        id: 3,
        description:
          "Provee información de competencias con premios en dinero o físicos",
        idUserCreator: 1,
        idSport: 3,
        price: 10.0,
        contractType: "FREE_CONTRACT",
        eventType: "OUTSIDE_OF_HOUSE",
        contract: "INTERMEDIATE_CONTRACT",
      },
      {
        name: "Información de clubs deportivos",
        id: 2,
        description: "Provee información para afiliarse algún club",
        idUserCreator: 1,
        idSport: 2,
        price: 0.0,
        contractType: "FREE_CONTRACT",
        eventType: "OUTSIDE_OF_HOUSE",
        contract: "FREE_CONTRACT",
      },
      {
        name: "Información de eventos deportivos",
        id: 1,
        description: "Provee información gratuita de eventos",
        idUserCreator: 1,
        idSport: 1,
        price: 0.0,
        contractType: "FREE_CONTRACT",
        eventType: "OUTSIDE_OF_HOUSE",
        contract: "FREE_CONTRACT",
      },
      {
        name: "Seguimiento con coach en tracking",
        id: 9,
        description:
          "Seguimiento de usuario en bicileta llevando por rutas seguras y de mayor entrenamiento",
        idUserCreator: 1,
        idSport: 5,
        price: 20.0,
        contractType: "FREE_CONTRACT",
        eventType: "OUTSIDE_OF_HOUSE",
        contract: "PREMIUM_CONTRACT",
      },
      {
        name: "Asesoramiento personalizado",
        id: 13,
        description:
          "Provee atención al usuario para consultas por cualquier medio y seguimiento durante el tracking",
        idUserCreator: 1,
        idSport: 11,
        price: 5.0,
        contractType: "FREE_CONTRACT",
        eventType: "OUTSIDE_OF_HOUSE",
        contract: "PREMIUM_CONTRACT",
      },
      {
        name: "Instalación de componentes adicionales",
        id: 10,
        description:
          "Provee instalación de componentes necesarios en equipos de ciclismos",
        idUserCreator: 1,
        idSport: 5,
        price: 70.0,
        contractType: "FREE_CONTRACT",
        eventType: "OUTSIDE_OF_HOUSE",
        contract: "FREE_CONTRACT",
      },
      {
        name: "Servicio de hidratación",
        id: 12,
        description:
          "Provee botellas de agua, infusiones para el usuario durante la carrea, aplicable mayores a 20km",
        idUserCreator: 1,
        idSport: 10,
        price: 35.0,
        contractType: "FREE_CONTRACT",
        eventType: "OUTSIDE_OF_HOUSE",
        contract: "FREE_CONTRACT",
      },
      {
        name: "Servicio médico durante carrera",
        id: 16,
        description:
          "Servicio que provee un medico especializado en caso de emergencia o dolencia durante una carrera mayor a 10k",
        idUserCreator: 1,
        idSport: 10,
        price: 15.0,
        contractType: "FREE_CONTRACT",
        eventType: "OUTSIDE_OF_HOUSE",
        contract: "INTERMEDIATE_CONTRACT",
      },
    ],
  },
};
