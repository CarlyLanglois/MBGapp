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
               description: ``
           },
           {
             title: 'Science and Sustainability Open House',
             start: '2017-02-25T13:00:00',
             end: '2017-02-25T16:00:00',
             description: ``
           },
           {
             title: 'Science and Sustainability Open House',
             start: '2017-02-26T13:00:00',
             end: '2017-02-26T16:00:00',
             description: ``
           },
           {
             title: 'Member Speaker Series: Gardening with Native Plants',
             start: '2017-03-07T11:00:00',
             end: '2017-03-07T12:00:00',
             description: `Horticulturist Scott Woodbury from Shaw Nature Reserve will discuss native
             flower types to grow in an ideal Missouri setting. Bring your questions and join us for
             this lively installment of the Member Speaker Series.<br>
             This presentation will take place in Shoenberg Theater at the Missouri Botanical Garden. `
           },
           {
             title: 'Daffodil Dash 5k Trail Run',
             start: '2017-04-08T09:00:00',
             end: '2017-04-08T10:00:00',
             description: `Pre-registration required. Join us for the fourth annual family 5K
             (3.1 miles) trail run at Shaw Nature Reserve! There are literally thousands of
             daffodils blooming around the Shaw Nature Reserve's Pinetum Lake in late March/early
             April each year. Many varieties of daffodils have been accumulating around the Pinetum
             Lake for the biggest part of the 89 years the Reserve has been in existence.
             <br>
             Runners will follow the 5K (3.1 miles) course, but they will run only for the
             pleasure of it. In other words: no clock but first place will receive a free one
             year subscription to Trail Runner Magazine courtesy of Big Stone Publishing. This
             race is perfect for families (extremely bumpy for strollers), first-time trail
             runners or seasoned trail runners who want a spectacular view. Expect to run on
             uneven mulch, gravel, and dirt surfaces. There will be two potential creek crossings
             depending on the weather. Trails will be marked with signs and we will have
             volunteers at the half way (1.5 mile) water stop if you need help. All participants
             will receive a wicking material shirt at check-in.
             <br>
             Proceeds from the event benefit the Shaw Nature Reserve. `
           },
           {
             title: 'Eggstravaganze',
             start: '2017-04-08T10:00:00',
             end: '2017-04-08T13:00:00',
             description: `Eggstravaganza features spring blooms, snacks, a chance to win prizes,
             live rabbits courtesy of the House Rabbit Society, and a photo opportunity with Hopsy,
             the beloved Garden rabbit character.
             <br>
             Egg hunts are offered every 30 minutes from 10 a.m. to noon., and hunt areas are
             divided by age group (2-3 years, 4-6 years, and 7-12 years). Don't forget your
             basket for the egg collecting!
             <br>
             This event engages families with the wonders of springtime. It's a fun way to
             connect energetic children to the opportunities of outdoor play and learning.`
           },
           {
             title: 'Member Speaker Series: Best New Plants for the Home Landscape',
             start: '2017-04-18T11:00:00',
             end: '2017-04-18T12:00:00',
             description: `Steffie Littlefield from Edg-Clif Farms will discuss new flower
             types to grow for your home landscape. Bring your questions and join us for this
             lively installment of the Member Speaker Series.
             <br>
             Reservations required; space is limited.`
           },
           {
             title: 'Herb Days',
             start: '2017-04-27T17:00:00',
             end: '2017-04-29T17:00:00',
             description: `Herb Days, presented by The St. Louis Herb Society. Choose from a wide
             selection of more than 11,000 potted fresh herbs, including new and hard-to-find
             varieties. The Herb Society’s popular cookbook, periodicals, and herb-related
             products will also be available. Herb Society members will give demonstrations and
             guidance on selecting, planting, growing, and using herbs. There will also be
             information on upcoming classes, recipes, and much more!
             <br>
             Included with Garden admission. Visit www.stlouisherbsociety.org to learn more about
             the St. Louis Herb Society.
             <br>
             Thursday, April 27
             Members only sale from 5 to 8 p.m. Enjoy samples and music!
             <br>s
             Friday, April 28
             Sale open to the public 9 a.m. to 8 p.m.
             <br>
             9 to 10 a.m. – "Put a Little Lemon in Your Life" presented by Anne Cori from the
             Kitchen Conservatory. This talk is open to the general public.
             <br>
             10 a.m. to noon – New this year The Herb Society will feature four 20–minute mini
             workshops that will include these topics, Kids in the Herb Garden, Birds and the
             Bees (and Butterflies too!), Container Gardening with Herbs, and Herbal Vinegars,
             Dips, and Spreads. No reservations are required.
             <br>
             Saturday, April 29
             Open to the public, 9 a.m. to noon – only if there are still Herbs available. `
           },
           {
             title: 'Tulip Trot',
             start: '2017-04-30T07:00:00',
             end: '2017-04-30T09:00:00',
             description: `Join the Young Friends of the Missouri Botanical Garden for a spring
             morning fun run.
             <br>
             The Garden is filled with spring color in April, and tulips are the season’s
             show-stoppers. Tulip Trot invites participants of varying athletic abilities to do
             something the Garden normally does not encourage—run!
             <br>
             Runners will follow a recommended 5K course, but they will run only for the pleasure
             of it. No clock, no winners. All participants will receive a running shirt at
             check-in* and a wristband good for same-day admission through 5 p.m. Proceeds from
             the event will benefit the Doris I. Schnuck Children's Garden.
             <br>
             Due to the narrowness of our paths, only event participants will be allowed on
             Garden grounds during this event. All other attendees may enter through Ridgway
             Visitor Center at 9 a.m. when the Garden opens to the public.
             <br>
             Don't want to get up that early? Become a virtual runner! Your registration fee
             will still support the Children's Garden, we mail you your shirt and you don't
             have to run. Just select "virtual runner" during the registration process.
             <br>
             *Please note that registrations received after April 11 will not be guaranteed a
             shirt. T-shirts are based on unisex sizes and may run large. Shirts are available
             on a first come, first serve basis.`
           },
           {
             title: 'St. Louis Garden Tour',
             start: '2017-06-11T09:30:00',
             end: '2017-06-11T16:30:00',
             description: `Missouri Botanical Garden members and their guests are invited to enjoy
             a self-guided tour of seven spectacular gardens across the St. Louis community. Each
             arden will also feature a unique “tablescape,” designed to evoke garden elements through
             distinctive place settings.
             <br>
             Every three years since summer of 1986, the Garden hosts a tour of private gardens
             across the region. This event provides a special opportunity for Garden members to
             tour the loveliest gardens in St. Louis.
             <br>
             Self-guided tour tickets are $50. Advance ticket purchase required. Event occurs
             rain or shine.`
           },
           {
             title: 'Garden Gallop 5K',
             start: '2017-06-25T07:00:00',
             end: '2017-06-25T09:00:00',
             description: `Join the Young Friends for a summer morning fun run through the
             Missouri Botanical Garden.
             <br>
             The Garden is a botanical oasis. We invite participants of varying athletic
             abilities to visit early in the morning and run!
             <br>
             Runners follow a recommended 5K course, but they run for the pleasure of it. In
             other words: no clock, no winners. All participants receive a running shirt at
             check-in.* Event proceeds benefit the Doris I. Schnuck Children's Garden.
             <br>
             Running must stop at 9:00 a.m. when the Garden opens to the general public, but
             your event wristband is good for same-day admission through 5 p.m.
             <br>
             Due to the narrowness of our paths, only event participants will be allowed on
             Garden grounds during this event. All other attendees may enter through Ridgway
             Visitor Center at 9 a.m. when the Garden opens to the public.
             <br>
             * Please note registrations received after June 6 will not be guaranteed a shirt.
             Run shirts are based on unisex sizes and may run larger. Shirts are available on
             a first come, first serve basis.`
           },
           {
             title: "Henry Shaw's Birthday Celebration!" ,
             start: '2017-07-24T09:00:00',
             end: '2017-07-24T17:00:00',
             description: `Help us celebrate Missouri Botanical Garden founder Henry Shaw’s
             216th birthday! Festivities take place from 10 a.m. to 3 p.m. and include a
             silhouette artist, stilt walker, balloon artist, marionette shows (10:30 a.m.,
             noon and 1:30 p.m.) and more.
             <br>

             Enjoy free admission for all visitors from 9 a.m. to 5 p.m.
             Sign an oversized birthday card for Henry at Tower Grove House.
             Explore Henry Shaw's historic museum building, normally closed to the public, from 10 a.m. to 4 p.m.
             NEW! Treat yourself to Victorian-inspired ice cream delights from Ices Plain & Fancy.
             NEW! Save 20% off Garden memberships at the Membership Services desk (discount available on-site only).`
           }
       ],
       fixedWeekCount: false,
       eventColor: '#295307',
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
