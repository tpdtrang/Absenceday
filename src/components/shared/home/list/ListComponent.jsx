import React, {Component} from 'react';
import Pagination from '../../../../feature/Pagination';
import Cookies from 'universal-cookie';
var dateFormat = require('dateformat');
var cookies = new Cookies();
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
        console.log(cookies.get('data'));
        
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
                                <th className="item-table">TG Bắt Đầu</th>
                                <th className="item-table">TG Kết Thúc</th>
                                <th className="item-table">Hình Thức</th>
                                <th className="item-table">Thể loại</th>
                                <th className="item-table">Lý Do</th>  
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
                                        <td className="name-item">{dateFormat(data.attributes.time_off_beginning,"dd-mm-yyyy HH:MM")}</td>
                                        <td className="name-item">{dateFormat(data.attributes.time_off_ending,"dd-mm-yyyy HH:MM")}</td>
                                        <td className="name-item">{data.attributes.at_time}</td>
                                        <td className="name-item">{data.attributes.type.name}</td>
                                        <td className="name-item">{data.attributes.note}</td>
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