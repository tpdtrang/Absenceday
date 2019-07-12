import React, { Component } from 'react';

class ListMonthComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      month: ''
    }
  }

  onhandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {
    return (
      <div>
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Nghỉ phép tháng</h3>
                </div>
              </div>
              <form onSubmit={this.onSubmit}>
                <input type="text" className="p-search" name="month" value={this.state.month} onChange={this.onhandleChange} />
                {/* <DatePicker
                  className="ip-date"
                  onChange={this.onChangeDate}
                  defaultValue={moment(now, dateFormat)}
                  name="from"
                />
                <DatePicker
                  className="ip-date"
                  onChange={this.onChangeDateItem}
                  defaultValue={moment(now, dateFormat)}
                  name="to"
                /> */}
                <button className="btn btn-s" type="submit">search</button>
              </form>
            </div>

            <div className="p-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Time_details</th>
                    <th>At_time</th>
                    <th>Absence_day</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.data.map(data => (
                    <tr key={data.id}>
                      <td className="description">{data.id}</td>
                      <td className="description">{data.attributes.type}</td>
                      <td className="description">
                        {
                          Array.isArray(data.attributes.time_details) ?
                            data.attributes.time_details.map((item, index) => (
                              <span key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                            :
                            data.attributes.time_details
                        } </td>
                      <td className="description">
                        {
                          Array.isArray(data.attributes.at_time) ?
                            data.attributes.at_time.map((item, index) => (
                              <span key={index} style={{ display: 'block' }}>
                                {item}
                              </span>
                            ))
                            :
                            data.attributes.at_time
                        }
                      </td>
                      <td className="description">{data.attributes.absence_days}</td>
                      <td className="description">{data.attributes.current_year}</td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ListMonthComponent;