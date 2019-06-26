import React, {Component} from 'react';
import Pagination from '../../../../feature/Pagination';
// import Cookies from 'universal-cookie';
var dateFormat = require('dateformat');
// var cookies = new Cookies();
class ListComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pageOfItems: [],
        }
    }
    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
            <section className="b-table-container">
                <div className="b-table">
                    <div className="b-title">
                        <h1 className="title">Danh Sách Đăng Ký Ngày Nghỉ</h1>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr className="title-table">
                                <th className="item-table">STT</th>
                                <th className="item-table">TG Đăng ký</th>
                                <th className="item-table time">
                                    <div className="time-type">
                                        <div className="item-date">
                                            <p className="date">TG Nghỉ</p>
                                        </div>
                                        <div className="item-date">
                                            <p className="date">Loại Hình</p>
                                        </div>
                                        <div className="item-date">
                                            <p className="date3">Hình Thức</p>
                                        </div>
                                    </div>
                                </th>
                                <th className="item-table">Thể loại</th>
                                <th className="item-table">Lý Do</th>  
                                <th className="item-table">Số Ngày Nghỉ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this
                                .state
                                .pageOfItems
                                .map(data => (
                                    <tr key={data.id}>
                                        <td className="name-item">{data.id}</td>
                                        <td className="name-item">{dateFormat(data.attributes.created_at,"dd-mm-yyyy HH:MM")}</td>
                                        <td className="name-item">
                                            {
                                                data.attributes.time.map(item =>(
                                                    <div className="type" key={item.id} style={{"width":"100%"}}>
                                                        <div className="list-1">
                                                        <p className="list-item1" >{dateFormat(item.time_details,"dd-mm-yyyy HH:MM")}</p>
                                                        </div>
                                                        <div className="list-2">
                                                        <p className="list-item2" >{item.type}</p>
                                                        </div>
                                                        <div className="list-3">
                                                        <p className="list-item3" >{item.at_time}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </td>
                                        <td className="name-item">{data.attributes.type.name}</td>
                                        <td className="name-item">{data.attributes.note}</td>
                                        <td className="name-item">{data.attributes.total}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <Pagination items={this.props.data} onChangePage={this.onChangePage}></Pagination>
            </section>
        );
    }
}

export default ListComponent;