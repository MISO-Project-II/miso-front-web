import {
  IResUserFoodProfile,
  IUserFoodProfile,
} from "src/models/profile/food-profile.interface";

// Data request
export const MockFoodProfile: IUserFoodProfile = {
  foods_preference: "pasta; pizza",
  intolerances: "lactosaadf\nsdf\nsdf\nsdf\nssdf",
  is_vegan: false,
  is_vegetarian: true,
};
// Data Response
export const MockGetFoodProfile: IUserFoodProfile = {
  id: "1",
  foods_preference: "pasta; pizza",
  intolerances: "lactosaadf\nsdf\nsdf\nsdf\nssdf",
  is_vegan: false,
  is_vegetarian: true,
};
export const MockGetAllFoodProfile: IUserFoodProfile[] = [
  {
    id: "1",
    foods_preference: "pasta; pizza",
    intolerances: "lactosaadf\nsdf\nsdf\nsdf\nssdf",
    is_vegan: false,
    is_vegetarian: true,
  },
];

// Response
export const MockResSuccessGetFoodProfile: IResUserFoodProfile = {
  response: MockGetFoodProfile,
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResSuccessGetAllFoodProfile: IResUserFoodProfile = {
  responseAll: MockGetAllFoodProfile,
  success: true,
  errorMessage: "",
  date: new Date(),
};

export const MockResSuccessFoodProfile: IResUserFoodProfile = {
  success: true,
  errorMessage: "",
  date: new Date(),
};
export const MockResErrorFoodProfile: IResUserFoodProfile = {
  success: false,
  errorMessage: "Error UserFoodProfile",
  date: new Date(),
};
