import React, { Component } from 'react';
import { HeaderAdLayout, SideAdLayout } from '../../layouts/home/admin';
import TableUserComponent from '../../shared/admin/TableUserComponent';
// import FormUserComponent from '../../shared/admin/user/FormUserComponent';
import * as action from '../../../actions/admin';
import { connect } from 'react-redux';
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      dataEdit: {}
      // showFE: false,
      // showBE: false
    }
  }
  componentDidMount() {
    this.props.dispatch(action.requestGetUserStore());
    this.props.dispatch(action.requestGetTeam());
    this.props.dispatch(action.requestGetPositionStore());
  }
  onAdd = (data) => {
    this.props.dispatch(action.requestAddUserStore(data));
    this.setState({
      edit: false,
      //showFE: true
    })
  }
  onDelete = (id) => {
    this.props.dispatch(action.requestDeleteUserStore(id));
  }
  onUpdate = (data) => {
    this.props.dispatch(action.requestUpdateUserStore(data));
  }
  onEdit = (id) => {
    let item = [...this.props.user].filter(item => item.id === id)
    console.log(item);
    if (item.length > 0) {
      this.setState({
        id: id,
        edit: true,
        dataEdit: item[0]
      })
    }
  }
  onClose = () => {
    this.setState({
      edit: false
    })
  }
  // onViews = () =>{
  //   this.setState({
  //     showFE: true,
  //   })
  // }
  // onViewBE = () =>{
  //   this.setState({
  //     showFE: false
  //   })
  // }
  render() {

    // const mainContent = () =>{
    //   if(this.state.showFE){
    //     return(
    //       <TableUserComponent data={this.props.data} onClose={this.onClose} dataEdit={this.state.dataEdit}  onDelete={this.onDelete} edit={this.state.edit} onUpdate={this.onUpdate} onEdit={this.onEdit}></TableUserComponent>
    //     )
    //   }
    //   else{
    //     return(
    //       <h1>asdadasdasda</h1>
    //     )
    //     }
    // }
    return (


      <div>
        <HeaderAdLayout></HeaderAdLayout>
        <div className="content">
          <SideAdLayout></SideAdLayout>
          {/* <div className="right-content">
            <section className="wrap-container">
              <div className="wrap-form">
                <FormUserComponent onViews={this.onViews} onViewBE ={this.onViewBE} onAdd={this.onAdd}></FormUserComponent>
                {mainContent()}
               </div>
            </section>
          </div> */}
          <TableUserComponent data={this.props.user} team={this.props.team} position={this.props.position} onAdd={this.onAdd} onDelete={this.onDelete} edit={this.state.edit} dataEdit={this.state.dataEdit} onEdit={this.onEdit} onClose={this.onClose} onUpdate={this.onUpdate}></TableUserComponent>
        </div>
      </div>
    );
  }
}

function mapPropsToState(state) {
  return {
    user: state.stores.all,
    team: state.team.all,
    position: state.position.all,
  }
}

export default connect(mapPropsToState, null)(UserPage);