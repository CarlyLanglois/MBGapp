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

  calendarOptions: Object = {
        
         events: [
           {
               title: 'Hello?',
               start: '2017-02-14'
           },
           {
             title: 'All Day Event',
             start: '2016-09-01'
           },
           {
             title: 'Long Event',
             start: '2016-09-07',
             end: '2016-09-10'
           },
           {
             id: 999,
             title: 'Repeating Event',
             start: '2016-09-09T16:00:00'
           },
           {
             id: 999,
             title: 'Repeating Event',
             start: '2016-09-16T16:00:00'
           },
           {
             title: 'Conference',
             start: '2016-09-11',
             end: '2016-09-13'
           },
           {
             title: 'Meeting',
             start: '2016-09-12T10:30:00',
             end: '2016-09-12T12:30:00'
           },
           {
             title: 'Lunch',
             start: '2016-09-12T12:00:00'
           },
           {
             title: 'Meeting',
             start: '2016-09-12T14:30:00'
           },
           {
             title: 'Happy Hour',
             start: '2016-09-12T17:30:00'
           },
           {
             title: 'Dinner',
             start: '2016-09-12T20:00:00'
           },
           {
             title: 'Birthday Party',
             start: '2016-09-13T07:00:00'
           },
           {
             title: 'Click for Google',
             url: 'http://google.com/',
             start: '2016-09-28'
           }
         ]
       };


}
