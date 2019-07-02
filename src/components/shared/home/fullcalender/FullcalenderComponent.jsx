import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import rrulePlugin from '@fullcalendar/rrule';
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import allLocales from '@fullcalendar/core/locales-all';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
var dateFormat = require('dateformat');
var now = new Date()
class FullcalenderComponent extends Component {
    calendarComponentRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            datenow: now,
            show: false,
        }
    }
    onEvent = (info) =>{
        this.setState({
            show: true,
            title: info.event.title,
            daystart: dateFormat(info.event.start,"dddd ,  dd mmmm yyyy"),
            dayend: dateFormat(info.event.end,"dddd ,  dd mmmm yyyy"),
            user: info.event.extendedProps.userId,
            id: info.event.id
        })
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
                    eventClick={this.onEvent}             
                    height={'parent'}
                    timeZone={'local'}
                    contentHeight={480}
                    aspectRatio={1}
                    plugins={[rrulePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    ref ={this.calendarComponentRef}                 
                    locales={allLocales}
                    locale={'vi'}
                    events = {
                       this.props.data
                    }
                    eventTextColor={'#FEFEF9'}
                    eventBorderColor={'rgba(0,0,0,1.5)'}
                ></FullCalendar>
            </div>
        );
    }
}

export default FullcalenderComponent;