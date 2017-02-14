import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  calendarOptions:Object = {
      events:[
          {
              title: 'My first event',
              start: '2017-02-14'
          },
          {
              title: "Orchid Show Preview",
              start: "2017-02-03T17:30:00",
              end: "2017-02-03T20:30:00",
              allDay: false
          }
      ]
  }
}
