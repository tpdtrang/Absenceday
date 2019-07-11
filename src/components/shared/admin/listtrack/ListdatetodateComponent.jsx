import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;

class ListdatetodateComponent extends Component {
  render() {
    return (
      <div >
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Từ ngày đến ngày</h3>
                </div>
              </div>
              <RangePicker>
                defaultValue={[
                  moment('2015/01/01', dateFormat),
                  moment('2015/01/01', dateFormat)
                ]}
                format={dateFormat}
              </RangePicker>
            </div>

            <div className="p-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Total holidays</th>
                    <th>Time_details</th>
                    <th>Phone</th>
                    <th>Team</th>
                    <th>Position</th>
                    <th>NAme</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="description">1</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asddddddddddddddddddddddddadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                    <td className="description">asdadsa</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ListdatetodateComponent;