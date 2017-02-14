import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-in-home',
  templateUrl: './logged-in-home.component.html',
  styleUrls: ['./logged-in-home.component.css']
})
export class LoggedInHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showEventsCalendar: boolean = false;
  showFAQs: boolean = false;
  showGiftMembershipForm: boolean = false;
  showRenewForm: boolean = false;

  clickedEvents() {
    this.showEventsCalendar = !this.showEventsCalendar;
    this.showFAQs = false;
    this.showGiftMembershipForm = false;
    this.showRenewForm = false;
  }
  clickedFAQs() {
    this.showFAQs = !this.showFAQs;
    this.showEventsCalendar = false;
    this.showGiftMembershipForm = false;
    this.showRenewForm = false;
  }
  clickedGiftMembershipForm() {
    this.showGiftMembershipForm = !this.showGiftMembershipForm;
    this.showEventsCalendar = false;
    this.showFAQs = false;
    this.showRenewForm = false;
  }
  clickedRenewForm() {
    this.showRenewForm= !this.showRenewForm;
    this.showEventsCalendar = false;
    this.showFAQs = false;
    this.showGiftMembershipForm = false;
  }


}
