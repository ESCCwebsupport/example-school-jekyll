document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      googleCalendarApiKey: 'AIzaSyDaWcRHNMPBsoiVGXJNxthpvFldMiAcjyE',
      eventSources: [
          {
          googleCalendarId: '2g2ibtamvviu6jctgl6j6su340@group.calendar.google.com',
          color: '#000'
          },
          {
          googleCalendarId: 'en.uk#holiday@group.v.calendar.google.com'}
      ]
      ,
      initialView: 'dayGridMonth',
      themeSystem: 'bootstrap',
      height: '100vh',
      businessHours: {
        daysOfWeek: [ 1, 2, 3, 4, 5]
      },
      firstDay: 1,
      eventClick: function(info) {
        info.jsEvent.preventDefault();
        alert('Event: ' + info.event.title + ' ' + info.event.start);
        alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        alert('View: ' + info.view.type);
      },
      dayHeaderFormat: {
          weekday: 'long',
      },
    });
    calendar.render();
});