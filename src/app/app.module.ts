import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInHomeComponent } from './logged-in-home/logged-in-home.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GiftMembershipFormComponent } from './gift-membership-form/gift-membership-form.component';
import { RenewFormComponent } from './renew-form/renew-form.component';
import { JoinFormComponent } from './join-form/join-form.component';
import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';
import { LoginBtnComponent } from './login-btn/login-btn.component';
import { LogoutBtnComponent } from './logout-btn/logout-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    LoggedInHomeComponent,
    EventsCalendarComponent,
    FaqsComponent,
    GiftMembershipFormComponent,
    RenewFormComponent,
    JoinFormComponent,
    CalendarComponent,
    LoginBtnComponent,
    LogoutBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
            path: 'login-form',
            component: LoginFormComponent
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'logged-in-home',
            component: LoggedInHomeComponent
        },
        {
            path: 'join-form',
            component: JoinFormComponent
        },
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        }
    ]),
    Ng2Bs3ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
