import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom'
import { HeaderLayout, MenuLayout } from '../../layouts/home';
import {ListComponent, FullCalenderComponent} from '../../shared/home';
import * as action_dayoff from '../../../actions/dayoff';
import * as action_typedayoff from '../../../actions/typeday';
// import {message} from 'antd'
import {connect} from 'react-redux';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            views: false
        }
    }
    componentDidMount(){
        this.props.dispatch(action_dayoff.requestGetDayOff());
        this.props.dispatch(action_typedayoff.requestGetTypeDayOff());
    }
    onViews = () =>{
        this.setState({
            views: true
        })
    }
    onAddDayOff = (data) =>{
        this.props.dispatch(action_dayoff.requestCreateDayOff(data));  
    }
    onViewCalendar = () =>{
        this.setState({
            views: false
        })
    }
    convertToGetDay(arrA){
        let arrB = []
        if(arrA.length){
            arrB = arrA.map(item=>{
                let attributes = item.attributes
                return{
                    user_id: attributes.user_id,
                    id: item.id,
                    time: attributes.time.id,
                    start: attributes.time.time_details,
                    title: attributes.note,
                    name: attributes.user.name
                }
            })
        }
        return arrB;
    }
    
    convertArrayDay(arrA){
        let arrB = []
        if (arrA.length) {
            arrB = arrA.map(item => {
                return {
                    id: item.id,
                    title: item.attributes.note
                }
            })
        }
        return arrB;
    }
    render() {
        const mainContent = () =>{
            if(this.state.views){
                return(
                    <ListComponent data={this.props.dayoff}></ListComponent>
                )
            }else{
                return(
                    <FullCalenderComponent dayoff={this.convertArrayDay(this.props.dayoff)} data={this.convertToGetDay(this.props.dayoff)}></FullCalenderComponent>
                )
            }
        }
        return ( 
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <div className="b-content">
                    <div className="b-right-content">
                        <MenuLayout onViews={this.onViews} onViewCalendar={this.onViewCalendar} typedayoff={this.props.typedayoff} onAddDayOff = {this.onAddDayOff}></MenuLayout>
                        {mainContent()}
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
        isList: state.dayoff.isList
    }
}
export default connect(mapStateToProps,null)(HomeComponent);