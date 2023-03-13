import { Component, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  Food,
  FoodRoutineList,
  IFoodPlans,
} from "src/models/home/food-plans.interface";
import { ISportPlans } from "src/models/home/sport-plans.interface";
import { FoodPlansService } from "src/services/home/plans/food-plans.service";
import { SportPlansService } from "src/services/home/plans/sport-plans.service";
import { StatusService } from "src/services/local/status.service";
import {
  FREE_CONTRACT,
  INSIDE_OF_HOUSE,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
@Component({
  selector: "app-user-plans",
  templateUrl: "./user-plans.component.html",
  styleUrls: ["./user-plans.component.scss"],
})
export class UserPlansComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;

  private _contractTypeList: string[] = [
    FREE_CONTRACT,
    INTERMEDIATE_CONTRACT,
    PREMIUM_CONTRACT,
  ];
  private _eventTypeList: string[] = [INSIDE_OF_HOUSE, OUTSIDE_OF_HOUSE];
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _translateService: TranslateService,
    private _statusService: StatusService,
    private _sportPlansService: SportPlansService,
    private _foodPlansService: FoodPlansService
  ) {}

  ngOnInit() {
    this._loadSportPlans();
    this._loadFoodPlans();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getSportPlanService$(): Observable<ISportPlans[]> {
    return this._sportPlansService.getSportPlan();
  }
  get getFoodPlansService$(): Observable<IFoodPlans[]> {
    return this._foodPlansService.getFoodPlans();
  }
  private _loadSportPlans(): void {
    this.getSportPlanService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: ISportPlans[]) => {
        if (!!res) {
          console.log(
            "🚀 XXX - UserPlansComponent - _loadSportPlans - res : ",
            res
          );
          setTimeout(() => {
            let mapRes = this._mapSportPlans(res);
            this._statusService.setSportPlansList(mapRes);
          }, 100);
          this._statusService.spinnerHide();
        } else {
          this._statusService.spinnerHide();
        }
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
        this._statusService.toastError(
          this._translateService.instant("TOAST.ERROR")
        );
      }
    );
  }
  private _loadFoodPlans(): void {
    this.getFoodPlansService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IFoodPlans[]) => {
        if (!!res) {
          console.log(
            "🚀 XXX - UserPlansComponent - _loadFoodPlans - res : ",
            res
          );
          setTimeout(() => {
            let mapRes = this._mapFoodPlans(res);
            this._statusService.setFoodPlansList(mapRes);
          }, 100);
          this._statusService.spinnerHide();
        } else {
          this._statusService.spinnerHide();
        }
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
        this._statusService.toastError(
          this._translateService.instant("TOAST.ERROR")
        );
      }
    );
  }
  private _mapFoodPlans(foodPlans: IFoodPlans[]): IFoodPlans[] {
    return foodPlans.map((data: IFoodPlans) => {
      return {
        idFoodPlan: data.idFoodPlan,
        name: data.name,
        description: data.description,
        planType: data.planType,
        foodRoutineList: data.foodRoutineList,
        calories: data.calories ? data.calories : this.getRandomInt(1500),
        eventType:
          this._eventTypeList[
            Math.floor(Math.random() * this._eventTypeList.length)
          ],
      };
    });
  }
  private _mapSportPlans(sportPlans: ISportPlans[]): ISportPlans[] {
    return sportPlans.map((data: ISportPlans) => {
      return {
        idSportPlan: data.idSportPlan,
        name: data.name,
        description: data.description,
        planType: data.planType,
        sportRoutineList: data.sportRoutineList,
        calories: data.calories ? data.calories : this.getRandomInt(1500),
        eventType:
          this._eventTypeList[
            Math.floor(Math.random() * this._eventTypeList.length)
          ],
      };
    });
  }
  private getRandomInt(avg: number) {
    let min = avg - 500;
    let max = avg + 500;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
