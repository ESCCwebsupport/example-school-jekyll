document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    /* Create function to initialize the correct view */
    function mobileCheck() {
        if (window.innerWidth >= 768) {
            return false;
        } else {
            return true;
        }
    };
    var calendar = new FullCalendar.Calendar(calendarEl, {
        googleCalendarApiKey: 'AIzaSyDaWcRHNMPBsoiVGXJNxthpvFldMiAcjyE',
        eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: false,
            hour12: false,
        },
        displayEventTime: false,
        eventSources: [
            {
                googleCalendarId: '2g2ibtamvviu6jctgl6j6su340@group.calendar.google.com',
                color: 'green'
            },
            {
                googleCalendarId: 'en.uk#holiday@group.v.calendar.google.com'
            }
        ]
        ,
        views: {
            newView: {
                /* responsive view */
                type: 'listWeek',
                dayHeaderFormat: {
                    weekday: 'short',
                },
                displayEventTime: true,
            },
            defaultView: {
                type: 'dayGridMonth',

            },
        },
        initialView: mobileCheck() ? 'newView' : 'dayGridMonth',
        windowResize: function (view) {
            if (window.innerWidth >= 768) {
                calendar.changeView('defaultView');
                /* More code */
            } else {
                calendar.changeView('newView');
            }
        },
        themeSystem: 'bootstrap',
        height: '100vh',
        businessHours: {
            daysOfWeek: [1, 2, 3, 4, 5]
        },
        firstDay: 1,
        headerToolbar: {
            left: 'title',
            end: 'today prev,next',
            center: ''
        },
        dayHeaderFormat: {
            weekday: 'long',
        },

        eventClick: function (info, jsEvent, view) {
            info.jsEvent.preventDefault();
            $('#modalTitle').html(info.event.title);
            $('#eventDescription').html(info.event.description);
            let startDate = FullCalendarMoment.toMoment(info.event.start, calendar).format("dddd D MMMM YYYY");
            let startTime = FullCalendarMoment.toMoment(info.event.start, calendar).format(", HH:mm");
            let endDate = FullCalendarMoment.toMoment(info.event.end, calendar).format("dddd D MMMM YYYY");
            let endTime = "";
            let isAllDay = "";
            if (info.event.allDay === true) {
                isAllDay = "All day";
                startTime = "";
                endTime = "";
                endDate = moment(endDate).subtract(1, 'minutes').format("dddd D MMMM YYYY");
                if (endDate === startDate) {
                    endDate = "";
                }
                else endDate = " to " + endDate;
            }
            else {
                if (endDate !== startDate) {
                    endDate = FullCalendarMoment.toMoment(info.event.end, calendar).format("to dddd D MMMM YYYY");
                }
                endDate = "";
                startTime = FullCalendarMoment.toMoment(info.event.start, calendar).format(": HH:mm");
                endTime = FullCalendarMoment.toMoment(info.event.end, calendar).format(" to HH:mm");
            }

            let eventTimeString = startDate + startTime + endDate + endTime;
        $('#eventTime').html(eventTimeString);
        $('#eventIsAllDay').html(isAllDay);
        // $('#eventUrl').attr('href', info.event.url);
        $('#fullCalModal').modal();
        }

});
    calendar.render();
});