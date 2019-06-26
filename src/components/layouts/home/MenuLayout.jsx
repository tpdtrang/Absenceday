import React, {Component} from 'react';
import {Modal, DatePicker,message} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
var dateFormatDate = require('dateformat');
var now = new Date();
const dateFormat = 'YYYY-MM-DD';
class MenuLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            time_start: dateFormatDate(now, 'yyyy-mm-dd'),
            time_end: dateFormatDate(now, 'yyyy-mm-dd'),
            typeday: this.props.typedayoff.length > 0 ? this.props.typedayoff[0].id : '',
            at_time: 'Morning',
            note: '',
            type: 'From day to day',
            date:  dateFormatDate(now, 'yyyy-mm-dd'),
            checkType: false,
            disabledate: true,
        }
    }
    showModal = () => {
        if(cookies.get('data') !== undefined){
            this.setState({visible: true})
        }else{
            message.error("Bạn cần đăng nhập để đăng ký!")
        }
    }
    onViews = () => {
        this.props.onViews();
    }
    onViewCalendar = () => {
        this.props.onViewCalendar();
    }
    onChanger = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value 
        })
    }
    onChangeDate = (date, dateString) => {
        this.setState({ time_end: dateString, date: dateString})
    }
    onChangeDateItem = (date, dateString) =>{
        this.setState({
            time_start: dateString,
        })
    }
    onChangeType = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        if(event.target.value === "1"){
            this.setState({
                checkType: false,
                [name]: value 
            })
        }else{
            this.setState({
                checkType: true,
                [name]: value 
            })
        }
    }
    onCancel = (event) => {
        event.preventDefault();
        this.setState({visible: false})
    }
    onChangeCheck = (e) =>{
        this.setState({
            checked: e.target.checked,
        })
    }
    onReset(){
        this.setState({
            time_start: dateFormatDate(now, 'yyyy-mm-dd'),
            time_end: dateFormatDate(now, 'yyyy-mm-dd'),
            typeday: this.props.typedayoff.length > 0 ? this.props.typedayoff[0].id : '',
            at_time: 'Morning',
            note: '',
            date:  dateFormatDate(now, 'yyyy-mm-dd'),
            checkType: false,
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onAddDayOff(this.state);
        this.setState({
            visible: false
        })
        this.onReset();
    }
    onAddDay = (e) =>{
        e.preventDefault();
    }
    render(){ 
        const contentUser = () => {
            if (cookies.get("data") !== undefined) {
                return (
                    <div key={cookies.get("data").id}>
                        <div className="b-information">
                            <h1 className="b-title">Họ tên:</h1>
                            <span className="b-text">{cookies.get("data").attributes.name}</span>
                        </div>
                        <div className="b-information">
                            <h1 className="b-title">Quê quán:</h1>
                            <span className="b-text">{cookies.get("data").attributes.address}</span>
                        </div>
                        <div className="b-information">
                            <h1 className="b-title">Vị trí:</h1>
                            <span className="b-text"key={cookies.get("data").attributes.team.id}>{cookies.get("data").attributes.team.name}</span>
                        </div>
                        <div className="b-information">
                            <h1 className="b-title">Khối:</h1>
                            <span className="b-text"key={cookies.get("data").attributes.position.id}>{cookies.get("data").attributes.position.name}</span>
                        </div>
                    </div>
                )
            }
        }
        return (   
            <section className="b-menu-container">
                <div className="b-menu">
                    <button className="btn-subcribe" onClick={this.showModal}>Đăng kí</button>
                    <div className="b-calendar">
                        <button
                            className="btn-list"
                            style={{
                            "padding": "5px 0"
                            }}
                            onClick={this.onViewCalendar}>Lịch</button>
                    </div>
                    <button className="btn-list" onClick={this.onViews}>Danh sách</button>
                    
                </div>
              
                <Modal
                    style={{
                    "width": "400px",
                    "top": "5px"
                    }}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    footer={null}
                    closable={false}>
                    <div className="b-form-container">
                        <div className="b-form-content">
                            <div className="b-heading">
                                <h1 className="b-title">
                                    Đăng Ký Nghỉ Phép
                                </h1>
                            </div>
                            {contentUser()}
                            <div className="b-content">
                                <form className="b-form" onSubmit={this.onSubmit}>   
                                    <div className="form-group">
                                        <label className="b-text">Loại Hình Nghỉ: </label>
                                        <select
                                        className="b-select"
                                        onChange={this.onChangeType}
                                        value={this.state.type}
                                        name="type">
                                            <option value="1">From day to day</option>
                                            <option value="2">The specific day</option>
                                        </select>
                                    </div>
                                    {
                                        this.state.checkType ?
                                            <></>
                                        :
                                        <div className="form-date">
                                            <div className="form-group">
                                            <label className="b-text">Thời gian bắt đầu:</label>
                                            <DatePicker
                                                className="ip-time"
                                                onChange={this.onChangeDateItem}
                                                defaultValue={moment(now, dateFormat)}
                                                name="time_off_beginning"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="b-text">Thời gian kết thúc:</label>
                                            <DatePicker
                                                className="ip-time"
                                                onChange={this.onChangeDate}
                                                defaultValue={moment(now, dateFormat)}
                                                name="time_off_ending"
                                            />
                                        </div>
                                        </div>
                                    }
                                    {
                                        this.state.checkType ? 
                                        <div className="form-group">
                                            <label className="b-text">Thời gian:</label>
                                            <DatePicker
                                                className="ip-time"
                                                onChange={this.onChangeDate}
                                                defaultValue={moment(now, dateFormat)}
                                                style={{"width":"120px"}}
                                            />
                                            <select
                                                className="b-select"
                                                onChange={this.onChanger}
                                                value={this.state.at_time}
                                                name="at_time">
                                                    <option>Morning</option>
                                                    <option>Afternoon</option>
                                                    <option>Full</option>
                                            </select>
                                            <button onClick={this.onAddDay} className="btn-plus"><i className="fas fa-plus"></i></button>
                                        </div>
                                        :
                                        <></>
                                    }
                                    <div className="form-group">
                                        <label className="b-text">Thể loại:</label>
                                        <select
                                            className="b-select"
                                            onChange={this.onChanger}
                                            value={this.state.typeday}
                                            name="typeday"
                                           >
                                            {
                                                this.props.typedayoff.map(data=>(
                                                    <option value={data.id} key={data.id}>{data.attributes.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <p className="text">Lý do:
                                        </p>
                                        <textarea
                                            className="b-area"
                                            onChange={this.onChanger}
                                            value={this.state.note}
                                            name="note" required/>
                                    </div>
                                    
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn-cancel">Đăng ký</button>
                                        <button type="cancel" className="btn-submit" onClick={this.onCancel}>Thoát</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal>
            </section>
        );
    }
}

export default MenuLayout;