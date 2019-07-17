import React, { Component } from 'react';

class ListRegistrantion extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      idtem: '',
      isFilter: []
    }
  }

  onhandleShow = (id) => {
    this.props.onDetails(id);
  }

  onhandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event);
  }

  render() {
    let sum = 0;
    return (
      <div className="b-table-container">
        <div className="b-table">
          <div className="b-title">
            <h1 className="title">Danh Sách Đăng Ký Nghỉ</h1>
          </div>
          <table className="table table table-striped p-scrollbar" id="consumption-data">
            <thead>
              <tr className="title-table">
                <th className="item-table sticky-col first-col">#</th>
                <th className="item-table sticky-col second-col">Tên</th>
                <th className="item-table">Đội</th>
                <th className="item-table">Thể loại</th>
                <th className="item-table note">Lý do</th>
                <th className="item-table">Ngày Đăng Ký</th>
                <th className="item-table">Thời gian</th>
                <th className="item-table at-time">Buổi</th>
                <th className="item-table">Số ngày nghỉ</th>
                <th className="item-table">Tổng</th>

                <th className="item-table details">Chi tiết</th>
              </tr>
            </thead>
            <tbody className=" results">
              {this.props.data.map(data => {
                sum = 0;
                return (
                  <tr key={data.id}>
                    <td className="description sticky-col first-col">{data.id}</td>
                    <td className="description sticky-col second-col">{data.attributes.user.name}</td>
                    <td className="description ">{data.attributes.user.team}</td>
                    <td className="description ">{data.attributes.type.name}</td>
                    <td className="description note">{data.attributes.note}</td>
                    <td className="description">{data.attributes.requested_date}</td>
                    <td className="description details">
                      {data.attributes.time.map(data => (
                        <span key={data.id}>
                          {data.time_details}
                          <hr />
                        </span>
                      ))}
                    </td>
                    <td className="description">
                      {data.attributes.time.map(data => (
                        <span key={data.id}>
                          {data.at_time}
                          <hr />
                        </span>
                      ))}
                    </td>
                    <td className="description">
                      {data.attributes.time.map(item => {
                        sum += parseFloat(item.absence_days)
                        return (
                          <span key={item.id}>
                            {item.absence_days}
                            <hr />
                          </span>
                        )
                      })}
                    </td>
                    <td className="description">{sum}</td>
                    <td className="description">
                      <button className="btn-edit" onClick={this.onhandleShow.bind(this, data.id)}>Chi Tiết</button>
                    </td>
                    
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListRegistrantion;