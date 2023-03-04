import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  FREE_CONTRACT,
  INSIDE_OF_HOUSE,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import {
  IEvents,
  IResEvent,
  IResEvents,
  IResUserEvents,
} from "src/models/home/events.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { StatusModel } from "src/models/local/status-model";
import { EventsService } from "src/services/home/events/events.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-create-events",
  templateUrl: "./create-events.component.html",
  styleUrls: ["./create-events.component.scss"],
})
export class CreateEventsComponent implements OnInit, OnDestroy {
  public formUserCreateEvent: FormGroup;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _eventsService: EventsService
  ) {}

  ngOnInit() {
    console.log("XXX - CreateEventComponent");
    this._initForm();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  private _initForm(): void {
    this.formUserCreateEvent = new FormGroup({
      name: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      IdSport: new FormControl("Futbol"), // XXX
      ubicationType: new FormControl(""),
      contractType: new FormControl(""),
    });
  }
  get getForm() {
    return this.formUserCreateEvent.controls;
  }
  get getDescription() {
    return this.formUserCreateEvent.get("description");
  }
  get getName() {
    return this.formUserCreateEvent.get("name");
  }
  get getCity() {
    return this.formUserCreateEvent.get("city");
  }
  get getDate() {
    return this.formUserCreateEvent.get("date");
  }

  get getIdSport() {
    return this.formUserCreateEvent.get("IdSport");
  }
  get getUbicationType() {
    return this.formUserCreateEvent.get("ubicationType");
  }
  get getContractType() {
    return this.formUserCreateEvent.get("contractType");
  }

  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getEventsListScheduled(): IEvents[] {
    return this._statusService.getEventsListScheduled();
  }
  public onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IEvents = {
      name: this.getName?.value,
      description: this.getDescription?.value,
      date: this.getDate?.value,
      city: this.getCity?.value,
      idUserCreator: this.getGeneralStatus.userId,
      idSport: 1,
      evenType: OUTSIDE_OF_HOUSE,
      contractType: FREE_CONTRACT,
    };
    this._callService(data);
  }
  private _callService(data: IEvents): void {
    this._eventsService
      .postCreateEvent(data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResEvent) => {
          if (res.success) {
            console.log(
              "XXX - CreateEventsComponent - _callService - res",
              res
            );
            const eventsListScheduled = this.getEventsListScheduled;
            eventsListScheduled.push(res.result!);
            this._statusService.setEventsListScheduled(eventsListScheduled);
          }
          this._statusService.spinnerHide();
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
}
