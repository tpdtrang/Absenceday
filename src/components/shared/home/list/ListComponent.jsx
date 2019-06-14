import React, {Component} from 'react';
import Pagination from '../../../../feature/Pagination';
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
                    <table className="table">
                        <thead>
                            <tr className="title-table">
                                <th className="item-table">#</th>
                                <th className="item-table">TG Đăng ký</th>
                                <th className="item-table">TG Bắt Đầu</th>
                                <th className="item-table">TG Kết Thúc</th>
                                <th className="item-table">Hình Thức</th>
                                <th className="item-table">Thể loại</th>
                                <th className="item-table">Lý Do</th>
                                <th className="item-table">Phê Duyệt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this
                                .state
                                .pageOfItems
                                .map(data => (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.thoigianDK}</td>
                                        <td>{data.thoigianBD}</td>
                                        <td>{data.thoigianKT}</td>
                                        <td>{data.hinhthuc}</td>
                                        <td>{data.theloai}</td>
                                        <td>{data.lydo}</td>
                                        <td>{data.pheduyet}</td>
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