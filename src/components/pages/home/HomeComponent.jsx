import React, { Component } from 'react';
import { HeaderLayout, MenuLayout } from '../../layouts/home';
import {ListComponent, FullCalenderComponent} from '../../shared/home';
import * as action_dayoff from '../../../actions/dayoff';
import * as action_typedayoff from '../../../actions/typeday';
import {connect} from 'react-redux';
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
    onViewCalendar = () =>{
        this.setState({
            views: false
        })
    }
    render() {
        
        
        const mainContent = () =>{
            if(this.state.views){
                return(
                    <ListComponent data={this.props.dayoff}></ListComponent>
                )
                
            }else{
                return(
                    <FullCalenderComponent  data = {this.props.dayoff} ></FullCalenderComponent>
                )
            }
        }
        return ( 
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <div className="b-content">
                    <div className="b-right-content">
                        <MenuLayout onViews={this.onViews} onViewCalendar={this.onViewCalendar} typedayoff={this.props.typedayoff} onAdd = {this.onAdd}></MenuLayout>
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
        login: state.login.user
    }
}
export default connect(mapStateToProps,null)(HomeComponent);