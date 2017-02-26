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
               title: 'Trivia Night - Garden Style',
               start: '2017-02-18T18:00:00',
               end: '2017-02-18T22:00:00',
               description: 'Lorem ipsum'
           },
           {
             title: 'Science and Sustainability Open House',
             start: '2017-02-25T13:00:00',
             end: '2017-02-25T16:00:00',
             description: 'Lorem ipsum'
           },
           {
             title: 'Science and Sustainability Open House',
             start: '2017-02-26T13:00:00',
             end: '2017-02-26T16:00:00',
             description: 'Lorem ipsum'
           },
           {
             title: 'Member Speaker Series: Gardening with Native Plants',
             start: '2017-03-07T11:00:00',
             end: '2017-03-07T12:00:00',
             description: 'Lorem ipsum'
           },
           {
             title: 'Daffodil Dash 5k Trail Run',
             start: '2017-04-08T09:00:00',
             end: '2017-04-08T10:00:00',
             description: 'Lorem ipsum'
           },
           {
             title: 'Eggstravaganze',
             start: '2017-04-08T10:00:00',
             end: '2017-04-08T13:00:00',
             description: 'Lorem ipsum'
           },
           {
             title: 'Member Speaker Series: Best New Plants for the Home Landscape',
             start: '2017-04-18T11:00:00',
             end: '2017-04-18T12:00:00',
             description: 'Lorem ipsum'
           },
           {
             title: 'Herb Days',
             start: '2017-04-27T17:00:00',
             end: '2017-04-29T17:00:00',
             description: 'Lorem ipsum'
           },
           {
             title: 'Tulip Trot',
             start: '2017-04-30T07:00:00',
             end: '2017-04-30T09:00:00',
             description: 'Lorem ipsum'
           },
           {
             title: 'St. Louis Garden Tour',
             start: '2017-06-11T09:30:00',
             end: '2017-06-11T16:30:00',
             description: 'Lorem ipsum'
           },
           {
             title: 'Garden Gallop 5K',
             start: '2017-06-25T07:00:00',
             end: '2017-06-25T09:00:00',
             description: 'Lorem ipsum'
           },
           {
             title: "Henry Shaw's Birthday Celebration!" ,
             start: '2017-07-24T09:00:00',
             end: '2017-07-24T17:00:00',
             description: 'Lorem ipsum'
           }
       ],
       fixedWeekCount: false,
       //eventColor: '#c9d7b2',
       eventRender: function(event, element){
           console.log(element.html());
       },

       eventClick: function(event) {

            $('.modal-title').html(event.title);
            $('.modal-body').html(event.description);
            $(this).attr('data-toggle','modal');
            $(this).attr('data-target', '#myModal');
            //$(this).css('background-color', 'red');

        }



       //eventClick: function(event){

          // element.popover({
             //  title: event.name,
              // placement: 'right',
               //content: + '<br />Start: ' + event.start + '<br />End: ' + event.end,
           //});

           //$(this).click("modal.open()");
           //event.value
          // $(this).attr('data-toggle', 'popover');
           //$(this).attr('title', 'Popover Header');
           //$(this).attr('data-content', 'Content!!');
           //$(this).attr('style', 'z-index:99');
          // $(this).popover({container:'body'}).popover('show')
           //console.log($(this));
       //}
       }



}
