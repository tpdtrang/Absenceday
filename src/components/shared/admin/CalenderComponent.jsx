import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import allLocales from '@fullcalendar/core/locales-all';
var dateFormat = require('dateformat');
class CalenderComponent extends Component {
  calendarComponentRef = React.createRef()
  componentDidMount() {
    if (this.props.data.length > 0) {
      let calendarApi = this.calendarComponentRef.current.getApi()
      calendarApi.gotoDate(dateFormat(this.props.data[0].date, 'yyyy-mm-dd'))
    }
  }
  onhandleShow = () => {
    this.props.onhandleShow('TABLE');
  }
 
  render() {
    return (
      <div className="right-content">
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Bảng Đăng Kí</h3>
                </div>
              </div>
              <div className="menu-list">
                {/* <div className="search">
                      <input type="text" />
                      <a href="/">
                        <div className="icon">
                          <i className="fas fa-search" />
                        </div>
                      </a>
                    </div> */}
              </div>
              <div className="menu-list">
                <div className="add">
                  <button type="submit" className="btn" onClick={this.onhandleShow} style={{ fontSize: "13px", color: "#fff", backgroundColor: " #02a959" }} >
                    Table
                  </button>
                </div>
              </div>
            </div>
            <FullCalendar
              schedulerLicenseKey={'GPL-My-Project-Is-Open-Source'}
              defaultView="dayGridMonth"
              customButtons={{
                myCustomButton: {
                  theme: 'true',
                  text: this.props.data[0].email,
                }
              }}
              header={{
                right: 'custom today ,prev,next',
                center: 'title',
                left: 'dayGridMonth,timeGridWeek, myCustomButton',
              }}
              plugins={[dayGridPlugin, resourceTimeGridPlugin]}
              weekends
              events={this.props.data}
              locales={allLocales}
              locale={'vi'}
              ref={this.calendarComponentRef}
              viewObject={{
                currentStart: '2019-05-07'
              }}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default CalenderComponent;