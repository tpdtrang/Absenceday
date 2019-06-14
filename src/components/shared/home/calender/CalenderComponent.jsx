import React, { Component } from 'react';
import Calendar from 'react-calendar';
class CalenderComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        }
    }
    // onChange = (date) =>{
    //     this.props.onGetDate(date);
    // }
    render() {
        return (
            <div style={{"padding" : "20px 2px", "width":"250px"}}>
                <Calendar value={this.state.date}></Calendar>
            </div>
        );
    }
}

export default CalenderComponent;