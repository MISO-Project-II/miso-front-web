import { IResRoutes, IRoutes } from "src/models/general/routes.interface";

// Data request
export const MockEvent: IRoutes = {
  title: "Bogota - Santandercito",
  description:
    "Ruta de ida y vuelta hasta el corregimiento de Santandercito.  La salida fue por la Autopista sur y el retorno por la Avenida Cundinamarca o A.L.O.En la subida la señal del gps estaba molestando bastante, era una mañana bastante nublada, se registró la mitad del ascenso aproximadamente.Desde Santardercito son 20 km de ascenso continuo hasta la cima en el Embalse del Muña. Las pendientes oscilan desde el 6-8% hasta segmentos con 10-12%. En el trayecto entre el Salto del Tequendama y El Charquito encontraremos algunos descansos planos y otros con bajadas muy cortas. El total del recorrido es de 62 km iniciando desde la Autopista Sur en Soacha y terminando en la entrada a Bogota por la Avenida Cundinamarca. En las horas de la mañana entre semana es poco el transito de vehículos, los sábados y domingos si hay que ser mas precavidos pues la carretera es muy transitada, la vía se encuentra en muy buen estado y los paisajes son increibles.",
  idStartPlace: 10001,
  startPlace:
    "Llantas La Glorieta Dorabel S.A.S, Avenida Nte. ##32- 33Tunja, Tunja, Boyacá",
  destinyPlace: "Motavita, Boyacá",
  urlRoute:
    "https://www.google.com/maps/dir/Llantas+La+Glorieta+Dorabel+SAS/Motavita,+Boyac%C3%A1/@5.5618015,-73.371511,15z/am=t/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8e6a7d8269424f8d:0xc34def3143ff97ec!2m2!1d-73.3572431!2d5.5453089!1m5!1m1!1s0x8e6a7bfe8131d3cb:0x31ef7237c6482bd8!2m2!1d-73.368186!2d5.577547!3e0?hl=es",
  distance: 4.8,
};
// Data Response
export const MockGetRoutes: IRoutes[] = [
  {
    id: 1,
    title: "Tunja - Motavita",
    description:
      "Ruta de ida y vuelta hasta el corregimiento de Santandercito.  La salida fue por la Autopista sur y el retorno por la Avenida Cundinamarca o A.L.O.En la subida la señal del gps estaba molestando bastante, era una mañana bastante nublada, se registró la mitad del ascenso aproximadamente.Desde Santardercito son 20 km de ascenso continuo hasta la cima en el Embalse del Muña. Las pendientes oscilan desde el 6-8% hasta segmentos con 10-12%. En el trayecto entre el Salto del Tequendama y El Charquito encontraremos algunos descansos planos y otros con bajadas muy cortas. El total del recorrido es de 62 km iniciando desde la Autopista Sur en Soacha y terminando en la entrada a Bogota por la Avenida Cundinamarca. En las horas de la mañana entre semana es poco el transito de vehículos, los sábados y domingos si hay que ser mas precavidos pues la carretera es muy transitada, la vía se encuentra en muy buen estado y los paisajes son increibles.",
    idStartPlace: 10001,
    startPlace:
      "Llantas La Glorieta Dorabel S.A.S, Avenida Nte. ##32- 33Tunja, Tunja, Boyacá",
    destinyPlace: "Motavita, Boyacá",
    urlRoute:
      "https://www.google.com/maps/dir/Llantas+La+Glorieta+Dorabel+SAS/Motavita,+Boyac%C3%A1/@5.5618015,-73.371511,15z/am=t/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8e6a7d8269424f8d:0xc34def3143ff97ec!2m2!1d-73.3572431!2d5.5453089!1m5!1m1!1s0x8e6a7bfe8131d3cb:0x31ef7237c6482bd8!2m2!1d-73.368186!2d5.577547!3e0?hl=es",
    distance: 4.8,
  },
  {
    id: 2,
    title: "Bogota - Zipaquira",
    description: "Bogota - Zipaquira",
    idStartPlace: 10002,
    startPlace: "Portal Norte - TransMilenio, Cl. 174a #45-37, Suba, Bogotá",
    destinyPlace: "Zipaquirá, Cundinamarca",
    urlRoute:
      "https://www.google.com/maps/dir/Portal+Norte+-+TransMilenio,+Calle+174a,+Bogot%C3%A1/Zipaquir%C3%A1,+Cundinamarca/@4.8882759,-74.0883497,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8e3f859a473c89d5:0x25f301aa0a304004!2m2!1d-74.0455113!2d4.7545535!1m5!1m1!1s0x8e406fdf15000d3b:0x3ab218bb9961424e!2m2!1d-73.990955!2d5.021476!3e0?hl=es",
    distance: 34.3,
  },
  {
    id: 3,
    title: "Tunja - Paipa",
    idStartPlace: 10001,
    description: "Tunja - Paipa",
    startPlace: "Tunja, Boyacá",
    destinyPlace: "Paipa, Boyacá",
    urlRoute:
      "https://www.google.com/maps/dir/Tunja,+Boyac%C3%A1/Paipa,+Boyac%C3%A1/@5.5612019,-73.3432702,13.84z/data=!4m14!4m13!1m5!1m1!1s0x8e6a7c2e897fba5b:0xac9fda7e6b9aa68c!2m2!1d-73.3575572!2d5.5446422!1m5!1m1!1s0x8e6a6aee9b98c2a1:0xefce626a89a7f4b8!2m2!1d-73.114725!2d5.77977!3e0?hl=es",
    distance: 41.5,
  },
  {
    id: 4,
    title: "Tunja - Villa de Leyva",
    idStartPlace: 10001,
    description: "Tunja - Villa de Leyva",
    startPlace: "Tunja, Boyacá",
    destinyPlace: "Villa de Leyva, Boyacá",
    urlRoute:
      "https://www.google.com/maps/dir/Tunja,+Boyac%C3%A1/Villa+de+Leyva,+Villa+de+Leyva,+Boyac%C3%A1/@5.5867997,-73.4816717,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8e6a7c2e897fba5b:0xac9fda7e6b9aa68c!2m2!1d-73.3575572!2d5.5446422!1m5!1m1!1s0x8e41d7af49882f7f:0x8ff8c572b510f7fc!2m2!1d-73.527058!2d5.636499!3e0?hl=es",
    distance: 38.1,
  },
];
// Response
export const MockResSuccessGetRoutes: IResRoutes = {
  result: MockGetRoutes,
  success: true,
  message: "Message Ok Routes",
};

export const MockResErrorRoutes: IResRoutes = {
  success: false,
  message: "Message Error Routes",
  result: null,
};
