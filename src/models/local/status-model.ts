import { ISports } from "../general/sports.interface";

export class StatusModel {
  userType: string; // User Plan, SPORTSMAN, THIRD
  userUrl: string; // User url, "usuario/", "tercero/"
  userId: number;
  token: string;
  userName: string;
  contractType: string; // Contract Plan, FREE_PLAN, MEDIUM_PLAN, PREMIUM_PLAN
  sportsList: ISports[];
  constructor(userType: string) {
    this.userType = userType;
  }
}
