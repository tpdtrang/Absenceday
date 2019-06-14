import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import rrulePlugin from '@fullcalendar/rrule';
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import allLocales from '@fullcalendar/core/locales-all';
var now = new Date();
class FullcalenderComponent extends Component {
    calendarComponentRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            datenow: now,
        }
    }
    render() {
        return (
            <div className="b-fullcalendar">
                <FullCalendar
                    schedulerLicenseKey={'GPL-My-Project-Is-Open-Source'}                
                    header={{
                        right: 'custom prev,next today',
                        center: 'title ',
                        left: 'dayGridMonth',
                    }}                  
                    height={'parent'}
                    timeZone={'local'}
                    contentHeight={480}
                    aspectRatio={1}
                    plugins={[rrulePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    ref ={this.calendarComponentRef}                 
                    locales={allLocales}
                    locale={'vi'}
                    events = {
                        [
                            {
                                id: 1,
                                title: "nghỉ phép",
                                start: "2019-06-12 07:00",
                                end: "2019-06-12 16:00",
                            }
                        ]
                    }
                    eventTextColor={'#FEFEF9'}
                    eventBorderColor={'rgba(0,0,0,1.5)'}
                ></FullCalendar>
            </div>
        );
    }
}

export default FullcalenderComponent;