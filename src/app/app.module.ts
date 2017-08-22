import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MdButtonModule, MdRadioModule, MdInputModule, MdMenuModule, MdCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';

import { SettingsService } from './services/settings.service';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';


//1>导入守卫
import { LoggedInGuard}from './guard/loggedIn.guard';
import { AUTH_PROVIDERS} from './services/auth.service';
import { ALERT_PROVIDERS} from './services/alertmsg.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MdButtonModule,
    MdRadioModule,
    MdInputModule,
    MdMenuModule,
    MdCheckboxModule
  ],
  providers: [LoggedInGuard, AUTH_PROVIDERS, ALERT_PROVIDERS, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
