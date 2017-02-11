import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInHomeComponent } from './logged-in-home/logged-in-home.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    LoggedInHomeComponent,
    EventsCalendarComponent
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
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
