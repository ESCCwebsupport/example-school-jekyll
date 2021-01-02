document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    /* Create function to initialize the correct view */
    function mobileCheck() {
        if (window.innerWidth >= 768) {
            if (document.querySelector('.is-homepage') !== null) {
                return true;
            }
            else return false;
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
        dayMaxEvents: 2,
        contentHeight: 'auto',
        eventSources: [
            {
                calendarName: 'Year 3',
                googleCalendarId: 'nh1400oaenr3pbpbo4i1im8soc@group.calendar.google.com',
                color: 'var(--fc-bg-colour-1)',
                textColor: '#000',
            },
            {
                calendarName: 'Year 4',
                googleCalendarId: '7qp5jqum38echhbhoa7i3mbam8@group.calendar.google.com',
                color: 'var(--fc-bg-colour-3)',
                textColor: '#000',
            },
            {
                calendarName: 'Whole school',
                googleCalendarId: 'dv19jja14njutp95722rmkk958@group.calendar.google.com',
                color: 'var(--fc-bg-colour-2)',
                textColor: '#000',
            },
            {
                calendarName: 'UK Holidays',
                googleCalendarId: 'en.uk#holiday@group.v.calendar.google.com'
            },
        ]
        ,
        views: {
            newView: {
                /* responsive view */
                type: 'listWeek',
                displayEventTime: true,
            },
            defaultView: {
                type: 'dayGridMonth',
            },
            dayGridWeek: {
                dayHeaderFormat: {
                    weekday: 'short'
                },
            },
            timeGridWeek: {
                dayHeaderFormat: {
                    weekday: 'short'
                },
                slotMinTime: '08:00:00',
                slotMaxTime: '18:00:00',
            },
            listWeek: {
                displayEventTime: true,
            },
        },
        initialView: mobileCheck() ? 'newView' : 'dayGridMonth',
        // windowResize: function (view) {
        //     if (window.innerWidth >= 768) {
        //         if (document.querySelector('.is-homepage') !== null) {
        //             calendar.changeView('newView');
        //             return;
        //         }
        //         else {
        //             calendar.changeView('defaultView');
        //         }
        //     } else {
        //         calendar.changeView('newView');
        //     }
        // },
        themeSystem: 'bootstrap',
        height: '100vh',
        businessHours: {
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: '08:00',
            endTime: '18:00',
        },
        firstDay: 1,
        headerToolbar: {
            center: 'title',
            end: 'today prev,next',
            start: 'dayGridMonth,timeGridWeek,listWeek'
        },
        footerToolbar: {
            start: 'dayGridMonth,timeGridWeek,listWeek'
        },
        dayHeaderFormat: {
            weekday: 'short',
        },
        nowIndicator: true,

        eventClick: function (info, jsEvent, view) {
            info.jsEvent.preventDefault();
            $('#modalTitle').html(info.event.title);
            let startDate = FullCalendarMoment.toMoment(info.event.start, calendar).format("dddd D MMMM YYYY");
            let startTime = FullCalendarMoment.toMoment(info.event.start, calendar).format(", HH:mm");
            let endDate = FullCalendarMoment.toMoment(info.event.end, calendar).format("dddd D MMMM YYYY");
            let endTime = "";
            let isAllDay = "";
            if (info.event.allDay === true) {
                isAllDay = "All day";
                startTime = "";
                endTime = "";
                endDate = FullCalendarMoment.toMoment(info.event.end, calendar).subtract(1, 'minutes').format("dddd D MMMM YYYY");
                if (endDate === startDate) {
                    endDate = "";
                }
                else endDate = " to " + endDate;
            }
            else {
                if (endDate !== startDate) {
                    endDate = FullCalendarMoment.toMoment(info.event.end, calendar).format(" to dddd D MMMM YYYY");
                }
                else {
                endDate = "";
                }
                startTime = FullCalendarMoment.toMoment(info.event.start, calendar).format("h:mma");
                endTime = " to " + FullCalendarMoment.toMoment(info.event.end, calendar).format("h:mma");
            }

            let eventDateString = `<span class="fas fa-calendar-day"></span>` + startDate + endDate;
            let eventTimeString = `<span class="far fa-clock"></span>` + startTime + endTime;
            let description = "";
            if (info.event.allDay === true) {
                eventTimeString = `<span class="far fa-clock"></span>` + isAllDay;
            }
            if (info.event.extendedProps.description !== undefined) {
                description = `<span class="fas fa-info-circle"></span>` + info.event.extendedProps.description;
                $('#eventDescription').show();
            }
            else $('#eventDescription').hide();

        $('#calendarName').html(`<span class="fas fa-chalkboard-teacher"></span>` + info.event.source.internalEventSource.extendedProps.calendarName);
        $('#eventDate').html(eventDateString);
        $('#eventTime').html(eventTimeString);
        $('#eventDescription').html(description);
        $('#fullCalModal').modal();
        }

});
    calendar.render();
});