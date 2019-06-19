import React, {Component} from 'react';
import {Modal, DatePicker} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
var now = new Date();
const dateFormat = 'YYYY-MM-DD';
class MenuLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            time_off_beginning: '',
            time_off_ending: '',
            type: '',
            at_time: '',
            note: '',
        }
    }
    showModal = () => {
        this.setState({visible: true})
    }
    onViews = () => {
        this
            .props
            .onViews();
    }
    onViewCalendar = () => {
        this
            .props
            .onViewCalendar();
    }
    onChanger = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onChangeDate = (date, dateString) => {
        this.setState({thoigianDK: dateString, thoigianBD: dateString, thoigianKT: dateString})
    }
    onSubmit = (event) => {
        event.preventDefault();
        this
            .props
            .onAdd(this.state);
        this.onReset();
        this.setState({visible: false})
    }
    onCancel = (event) => {
        event.preventDefault();
        this.setState({visible: false})
    }
    // onReset() {
    //     this.setState({
    //         thoigianDK: '',
    //         thoigianBD: '',
    //         thoigianKT: '',
    //         hinhthuc: '',
    //         theloai: '',
    //         lydo: '',
    //         pheduyet: ''
    //     })
    // }
    render() {
        const contentUser = () => {
            if (cookies.get("data") !== undefined) {
                return (
                    <div>
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
                    <button className="btn-list" onClick={this.onViews}>Danh sách
                    </button>
                    <div className="b-input">
                        <input type="search" className="b-search" placeholder="tìm kiếm..."/>
                        <button className="btn-search"><i className="fas fa-search"></i></button>
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
                                <form className="b-form" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label className="b-text">Thời gian bắt đầu:</label>
                                        <DatePicker
                                            className="ip-time"
                                            onChange={this.onChangeDate}
                                            defaultValue={moment(now, dateFormat)}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="b-text">Thời gian kết thúc:</label>
                                        <DatePicker
                                            className="ip-time"
                                            onChange={this.onChangeDate}
                                            defaultValue={moment(now, dateFormat)}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="b-text">Hình thức:</label>
                                        <select
                                            className="b-select"
                                            onChange={this.onChanger}
                                            value={this.state.hinhthuc}
                                            name="hinhthuc">
                                            <option>Chọn hình thức</option>
                                            <option>Morning</option>
                                            <option>Afternoon</option>
                                            <option>Full</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="b-text">Thể loại:</label>
                                        <select
                                            className="b-select"
                                            onChange={this.onChanger}
                                            value={this.state.theloai}
                                            name="theloai">
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
                                            value={this.state.lydo}
                                            name="lydo"/>
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