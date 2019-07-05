import React, { Component } from 'react';

class TableContentComponent extends Component {
  render() {
    return (
      <div className="right-content">
        <section className="wrap-container">
          <div className="wrap-form">
            <div className="p-title">
              <div className="menu-list">
                <div className="title">
                  <h3 className="heading-3">Bảng thống kê</h3>
                </div>
              </div>
            </div>
            <div className="p-table">
              <table className="table p-scrollbar">
                <thead>
                  <tr>
                    <th colSpan="10">Teams</th>
                  </tr>
                  <tr>
                    <th>FE</th>
                    <th>BA</th>
                    <th>JAVA</th>
                    <th>PHP</th>
                    <th>.NET</th>
                    <th>Solution</th>
                    <th>MOBILE</th>
                    <th>DESIGN</th>
                    <th>QM</th>
                    <th>AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="description"></td>
                    <td className="description"></td>
                    <td className="description"></td>
                    <td className="description"></td>
                    <td className="description"></td>
                    <td className="description"></td>
                    <td className="description"></td>
                    <td className="description"></td>
                    <td className="description"></td>
                    <td className="description"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div></section>
      </div>
    );
  }
}

export default TableContentComponent;