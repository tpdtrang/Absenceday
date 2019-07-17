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
class FullcalenderComponent extends Component {
    calendarComponentRef = React.createRef()
    componentDidMount() {
        if (this.props.data.length > 0) {
            let calendarApi = this.calendarComponentRef.current.getApi()
            calendarApi.gotoDate(dateFormat(this.props.data[0].date, 'yyyy-mm-dd'))
        }
    }
    onShowTable = () =>{
        this.props.onShowTable();
    }
    render() {
        return (
            <div className="b-fullcalendar">
                <div className="b-title">
                    <h1 className="title">Chi Tiết Đăng ký Nghỉ</h1>
                </div>
                <div className="b-back">
                    <button className="btn-back" onClick={this.onShowTable}><i className="fas fa-arrow-left"></i>Quay về</button>
                </div>
                <FullCalendar
                    schedulerLicenseKey={'GPL-My-Project-Is-Open-Source'}
                    defaultView="dayGridMonth"
                    header={{
                        right: 'custom prev,next today',
                        center: 'title ',
                        left: 'dayGridMonth,timeGridWeek',
                    }}
                    customButtons={{
                        myCustomButton: {
                          theme: 'true',
                          text: this.props.data !== undefined ? this.props.data[0].email : "abc"
                        }
                      }}
                    height={'parent'}
                    timeZone={'local'}
                    contentHeight={480}
                    aspectRatio={1}
                    plugins={[rrulePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    ref={this.calendarComponentRef}
                    locales={allLocales}
                    locale={'vi'}
                    events={
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