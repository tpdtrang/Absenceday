import React, { Component } from 'react';
import ReactToExcel from 'react-html-table-to-excel';

class MenuListComponent extends Component {
  onYear = () => {
    this.props.onYear();
  }

  onDay = () => {
    this.props.onDay();
  }
  onHome = () => {
    this.props.onHome();
  }
  onMonth = () => {
    this.props.onMonth();
  }

  render() {
    return (
      <div className="wrap-container">
        <div className="menulayout">
          <div className="p-menu">
            <button className="btn tag" onClick={this.onHome}><i className="fas fa-home"></i></button>
          </div>
          <div className="p-menu">
            <button className="btn tag" onClick={this.onDay}><i className="fas fa-search"></i></button>
          </div>
          <div className="p-menu">
            <ReactToExcel
              table="table-to-excel"
              filename="excelFile"
              sheet="sheet 1"
              className="btn"
              buttonText=""
            >
             </ReactToExcel>
            {/* <button  ><i className=" tag fas fa-file-excel"></i></button> */}

          </div>
        </div>
      </div>
    );
  }
}

export default MenuListComponent;