import React, { Component } from 'react';
import { Modal, DatePicker, message } from 'antd';
import moment from 'moment';
import * as action_search from '../../../actions/search';
import {connect} from 'react-redux';
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
            lead: this.props.data.length > 0 ? this.props.data[0].id : '',
            namelead: '',
            at_time: 'Morning',
            note: '',
            type: 'From day to day',
            date: dateFormatDate(now, 'yyyy-mm-dd'),
            checkType: false,
            disabledate: true,
            arrayNew: [],
            arrayLead: [],
            day: dateFormatDate(now, 'yyyy-mm-dd'),
            month: '',
            year: '',
        }
    }
    componentDidUpdate(prevProps, prevState) {
        var self = this;
        if(this.props.data !== prevProps.data ){
            self.setState({
                typeday: this.props.typedayoff.length > 0 ? this.props.typedayoff[0].id : '',
                lead: this.props.data.length > 0 ? this.props.data[0].id : '',
            })
        }
       if(prevProps.visible !== this.props.visible){
        if ( prevProps.edit !== this.props.edit) {
            let data = this.props.dataEdit.attributes;
            self.setState({
                id: this.props.dataEdit.id,
                visible: this.props.edit,
                time_start: data.type === "From day to day" ? dateFormatDate(data.time_start, 'yyyy-mm-dd') : dateFormatDate(now, 'yyyy-mm-dd'),
                time_end: data.type === "From day to day" ? dateFormatDate(data.time_end, 'yyyy-mm-dd') : dateFormatDate(now, 'yyyy-mm-dd'),
                checkType: data.type === null ? true : false,
                at_time: data.type === "The specific day" ? data.at_time : 'Morning'  ,
                note: data.note,
                type: data.checkType === true ? data.type : 'From day to day',
                date: data.type === "The specific day" ? dateFormatDate(data.date, 'yyyy-mm-dd') : dateFormatDate(now, 'yyyy-mm-dd'),
            })
        } else {
            this.onReset();
            this.setState({
                visible: this.props.visible
            })
        }
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
    onListQueue = () => {
        this.props.onListQueue();
    }
    onChanger = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    onChangeDate = (date, dateString) => {
        this.setState({ time_end: dateString, date: dateString })
    }
    onChangeDateItem = (date, dateString) => {
        this.setState({
            time_start: dateString,
        })
    }
    onChangeType = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (event.target.value === "1") {
            this.setState({
                checkType: false,
                [name]: value
            })
        } else {
            this.setState({
                checkType: true,
                [name]: value
            })
        }
    }
    onCancel = (event) => {
        event.preventDefault();
        this.setState({ visible: false });
        this.props.onCheckModal();
    }
    onChangeCheck = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    }
    onReset() {
        this.setState({
            visible: false,
            time_start: dateFormatDate(now, 'yyyy-mm-dd'),
            time_end: dateFormatDate(now, 'yyyy-mm-dd'),
            typeday: this.props.typedayoff.length > 0 ? this.props.typedayoff[0].id : '',
            at_time: 'Morning',
            note: '',
            lead: this.props.data.length > 0 ? this.props.data[0].id : '',
            date: dateFormatDate(now, 'yyyy-mm-dd'),
            checkType: false,
            arrayNew:[],
            arrayLead: []
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.props.edit === true){
            this.props.onUpdateDay(this.state);
            this.onReset();
            this.props.onCheckModal();
        }else{
            this.props.onAddDayOff(this.state);
            this.onReset();
            this.props.onCheckModal();
        }  
    }
    onAddLead = (e) =>{
        e.preventDefault();
        let checkAdd = false;
        if(this.state.arrayLead.length > 0){
            this.state.arrayLead.map(item =>{
                if(item.lead === this.state.lead && item.namelead === this.state.namelead){
                    checkAdd = false
                    message.error('Trùng người duyệt')
                }else{
                    checkAdd = true
                }
                return [];
            })
        }
        if(this.state.arrayLead.length > 0){
            let name = this.props.data.filter(item=> parseInt(item.id) === parseInt(this.state.lead))
            if(checkAdd === true){
                let data = {
                    id: this.state.arrayLead.length > 0 ? parseInt(this.state.arrayLead[this.state.arrayLead.length - 1].id + 1) : 1,
                    lead: this.state.lead,
                    namelead: name[0].attributes.name
                }
                let arrayCurrent = this.state.arrayLead;
                arrayCurrent = [...arrayCurrent, data]
                this.setState({
                    arrayLead: arrayCurrent
                })
            }
        }else {
            let name =this.props.data.filter(item=> parseInt(item.id) === parseInt(this.state.lead))
            let data = {
                id: this.state.arrayLead.length > 0 ? parseInt(this.state.arrayLead[this.state.arrayLead.length - 1].id + 1) : 1,
                lead: this.state.lead,
                namelead: name[0].attributes.name
            }
            let arrayCurrent = this.state.arrayLead;
            arrayCurrent = [...arrayCurrent, data]
            this.setState({
                arrayLead: arrayCurrent
            })
        }
    }
    onAddDay = (e) => {
        e.preventDefault();
        let checkAdd = false;
        if (this.state.arrayNew.length > 0) {
            this.state.arrayNew.map(item => {
                if (item.date === this.state.date && item.at_time === this.state.at_time) {
                    message.error('Trùng Dữ Liệu')
                    checkAdd = false
                } else {
                    checkAdd = true
                }
                return [];
            })
        }
        if (this.state.arrayNew.length > 0) {
            if (checkAdd === true) {
                let data = {
                    id: this.state.arrayNew.length > 0 ? parseInt(this.state.arrayNew[this.state.arrayNew.length - 1].id + 1) : 1,
                    date: this.state.date,
                    at_time: this.state.at_time
                }
                let arrayCurrent = this.state.arrayNew;
                arrayCurrent = [...arrayCurrent, data]
                this.setState({
                    arrayNew: arrayCurrent
                })
            }
        } else {
            let data = {
                id: this.state.arrayNew.length > 0 ? parseInt(this.state.arrayNew[this.state.arrayNew.length - 1].id + 1) : 1,
                date: this.state.date,
                at_time: this.state.at_time
            }
            let arrayCurrent = this.state.arrayNew;
            arrayCurrent = [...arrayCurrent, data]
            this.setState({
                arrayNew: arrayCurrent
            })
        }
    }
    removeItemLead = (id) => {
        let data = this.state.arrayLead.filter(item => item.id !== id);
        this.setState({
            arrayLead: data
        })
    }
    removeItemTime = (id) => {
        let data = this.state.arrayNew.filter(item => item.id !== id);
        this.setState({
            arrayNew: data
        })
    }
    onChangeDateSearch =(date, dateString) => {
        this.setState({
            day: dateString,
        })
    }
    onSearchDay = (event) =>{
        event.preventDefault();
        this.props.dispatch(action_search.requestSearchDay(this.state));
    }
    onList = () =>{
        this.props.onList();
    }
    render() { 

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
                            <span className="b-text">{cookies.get("data").attributes.team.name}</span>
                        </div>
                        <div className="b-information">
                            <h1 className="b-title">Khối:</h1>
                            <span className="b-text" key={cookies.get("data").attributes.position.id}>{cookies.get("data").attributes.position.name}</span>
                        </div>
                    </div>
                )
            }   
        }
        return (
            <section className="b-menu-container">
                <div className="b-menu">
                    <button className="btn-subcribe" onClick={this.showModal}>Đăng kí</button>
                    <button className="btn-list" onClick={this.onListQueue}>Danh Sách</button>
                    <button className="btn-list" onClick={this.onViews}>Hàng Đợi</button>
                    {
                        cookies.get('data') !== undefined && cookies.get('data').attributes.approved_role === 1 ?
                        <button className="btn-list" onClick ={this.onList}>Duyệt</button>
                        :
                        <></>
                    }
                    <div className="b-input">
                        <form onSubmit={this.onSearchDay}>
                            {/* <DatePicker
                                onChange={this.onChangeDateSearch}
                                defaultValue={moment(now, dateFormat)}
                                name="day"
                                style={{"margin":"0 6px"}}
                            ></DatePicker> */}
                            <input onChange={this.onChanger} type="text" value={this.state.month} name="month" className="b-search"></input>
                            <button className="btn-search"><i className="fas fa-search" ></i></button>
                        </form>
                    </div>

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
                                <div className="b-form">
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
                                            <>
                                                <div className="form-group">
                                                    <label className="b-text">Thời gian:</label>
                                                    <DatePicker
                                                        className="ip-time"
                                                        onChange={this.onChangeDate}
                                                        defaultValue={moment(now, dateFormat)}
                                                        style={{ "width": "120px" }}
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
                                                <div className="listdate">
                                                    {this.state.arrayNew.map(item => (
                                                        <div className="item" key={item.id}>
                                                            <div className="content">
                                                                <p className="text-norm">
                                                                    {item.date}
                                                                </p>
                                                                <p className="text-norm">
                                                                    {item.at_time}
                                                                </p>
                                                            </div>
                                                            <div className="group-button">
                                                                <button className="b-btn" onClick={this.removeItemTime.bind(this, item.id)}>
                                                                    Xóa
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
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
                                                this.props.typedayoff.map(data => (
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
                                            name="note" required />
                                    </div>
                                    <>
                                        <div className="form-group">
                                            <label className="b-text">Người Duyệt:</label>
                                            <select 
                                                className="b-select"
                                                onChange={this.onChanger}
                                                value={this.state.lead}
                                                name="lead"
                                            >
                                                {
                                                    this.props.data.map(item =>(
                                                        <option key={item.id} value={item.id}>{item.attributes.name}</option>
                                                    ))
                                                }
                                            </select>
                                            <button onClick={this.onAddLead} className="btn-plus"><i className="fas fa-plus"></i></button>
                                        </div>
                                        <div className="listdate">
                                                {this.state.arrayLead.map(item => (
                                                    <div className="item" key={item.id}>
                                                        <div className="content">
                                                            <p className="text-norm">
                                                                {item.namelead}
                                                            </p>
                                                        </div>
                                                        <div className="group-button">
                                                            <button className="b-btn" onClick={this.removeItemLead.bind(this, item.id)}>
                                                            Xóa
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group text-center">
                                            <button type="submit" className="btn-cancel">{this.props.edit ? 'Cập Nhật' : 'Đăng ký'}</button>
                                            <button type="cancel" className="btn-submit" onClick={this.onCancel}>Thoát</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </section>
        );
    }
}
function mapStateToProps(state){
    return {
        dayoff: state.dayoff.all,
    }
}
export default connect(mapStateToProps,null)(MenuLayout);