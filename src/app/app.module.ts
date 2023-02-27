import { FormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserHomeModule } from "./pages/user/user-home/user-home.module";
import { HelperComponent } from "./pages/helper/helper.component";
import { HelperModule } from "./pages/helper/helper.module";
import { UserLoginModule } from "./pages/user-login/user-login.module";
import { UserRegisterModule } from "./pages/user-register/user-register.module";
import { UserSessionModule } from "./pages/user/user-session/user-session.module";
import { UserServicesModule } from "./pages/user/user-services/user-services.module";
import { UserPlansModule } from "./pages/user/user-plans/user-plans.module";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";

import localeEsCO from "@angular/common/locales/es-CO";
import localeEn from "@angular/common/locales/en";
import localePt from "@angular/common/locales/pt";
import { ErrorModule } from "./pages/error/error.module";
import { UserDashboardModule } from "./pages/user-dashboard/user-dashboard.module";
import { DsTitleModule } from "./shared/ds-title/ds-title.module";
import { DsBannerTitleModule } from "./shared/ds-banner-title/ds-banner-title.module";
import { DsHorizontalMenuModule } from "./shared/ds-horizontal-menu/ds-horizontal-menu.module";
import { DsVerticalMenuModule } from "./shared/ds-vertical-menu/ds-vertical-menu.module";
import { UserProfileModule } from "./pages/user/user-profile/user-profile.module";
import { UserEventsModule } from "./pages/user/user-events/user-events.module";
import { ThirdLoginModule } from "./pages/third-login/third-login.module";
import { ThirdRegisterModule } from "./pages/third-register/third-register.module";
import { ThirdDashboardModule } from "./pages/third-dashboard/third-dashboard.module";
import { ServicesModule } from "src/services/services.module";
import { ThirdHomeModule } from "./pages/third/third-home/third-home.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ThirdEventsModule } from "./pages/third/third-events/third-events.module";
import { ThirdServicesModule } from "./pages/third/third-services/third-services.module";
import { ThirdProductsModule } from "./pages/third/third-products/third-products.module";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
registerLocaleData(localeEsCO, "es-CO");
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    UserDashboardModule,
    ThirdDashboardModule,
    ServicesModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    UserHomeModule,
    UserSessionModule,
    UserEventsModule,
    UserServicesModule,
    UserPlansModule,
    UserProfileModule,

    ThirdHomeModule,
    ThirdEventsModule,
    ThirdServicesModule,
    ThirdProductsModule,

    UserLoginModule,
    UserRegisterModule,
    ThirdLoginModule,
    ThirdRegisterModule,
    HelperModule,
    ErrorModule,

    DsTitleModule,
    DsBannerTitleModule,
    DsHorizontalMenuModule,
    DsVerticalMenuModule,
  ],
  providers: [
    HttpClient,
    {
      provide: LOCALE_ID,
      useValue: "es-CO",
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
