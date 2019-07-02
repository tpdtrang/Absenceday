import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom'
import { HeaderLayout, MenuLayout } from '../../layouts/home';
import {ListComponent, ListQueueComponent, ListAcceptComponent} from '../../shared/home';
import * as action_dayoff from '../../../actions/dayoff';
import * as action_typedayoff from '../../../actions/typeday';
// import {message} from 'antd'
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            views: "1",
            dataEdit: {},
            edit: false,
            visible: false,
        }
    }
    componentDidMount(){
        this.props.dispatch(action_dayoff.requestGetDayOff(cookies.get('data') !== undefined ? cookies.get('data').id : ''));
        this.props.dispatch(action_typedayoff.requestGetTypeDayOff());
        this.props.dispatch(action_typedayoff.requestGetLead());
        this.props.dispatch(action_dayoff.requestGetListQueue(cookies.get('data') !== undefined ? cookies.get('data').id : ''));
        this.props.dispatch(action_dayoff.requestGetListAccept());
    }
    onViews = () =>{
        this.setState({
            views: "2"
        })
    }
    onAddDayOff = (data) =>{
        this.props.dispatch(action_dayoff.requestCreateDayOff(data));  
        this.setState({
            edit: false,
            visible: false
        })
    }
    onListQueue = () =>{
        this.setState({
            views: "1"
        })
    }
    onList = () =>{
        this.setState({
            views: "3"
        })
    }
    onAccept = (id) =>{
        this.props.dispatch(action_dayoff.requestUpdateAccept(id));
    }
    onEdit = (id) =>{
        let item = [...this.props.dayoff].filter(item => item.id === id);
        if (item.length > 0) {
            this.setState({
                dataEdit: item[0],
                edit: true,
                visible: true
            })
        }
    }
    onUpdateDay = (data) =>{
        this.props.dispatch(action_dayoff.requestUpdateDay(data));
        this.setState({
            edit: false,
            visible: false
        })
    }
    onCheckModal = () => {
        this.setState({
            visible: false,
            edit: false
        })
    }
    render() {
        const mainContent = () =>{
            if(this.state.views === "1"){
                return(
                    <ListQueueComponent data={cookies.get('data') !== undefined ? this.props.list : ''}></ListQueueComponent>
                )      
            }
            if(this.state.views === "2"){
                return(
                    <ListComponent data={cookies.get('data') !== undefined ? this.props.dayoff : ''} onEdit={this.onEdit}></ListComponent>
                ) 
            }
           
                if(this.state.views === "3"){
                    return(
                        <ListAcceptComponent data={ cookies.get('data') !== undefined ? this.props.listaccept : ''}  onAccept={this.onAccept}></ListAcceptComponent>
                    )
                }
            
        } 
        return ( 
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <div className="b-content">
                    <div className="b-right-content">
                        <MenuLayout data={this.props.leader} onCheckModal ={this.onCheckModal} visible={this.state.visible} edit={this.state.edit} dataEdit = {this.state.dataEdit} onUpdateDay ={this.onUpdateDay} onViews={this.onViews} onListQueue={this.onListQueue} onList={this.onList} typedayoff={this.props.typedayoff} onAddDayOff = {this.onAddDayOff}></MenuLayout>
                        {             
                            mainContent()     
                        }
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        dayoff: state.dayoff.all,
        typedayoff: state.typedayoff.all,
        login: state.login.user,
        leader: state.lead.all,
        list: state.listqueue.all,
        listaccept: state.listaccept.all,
        isList: state.dayoff.isList,
    }
}
export default connect(mapStateToProps,null)(HomeComponent);