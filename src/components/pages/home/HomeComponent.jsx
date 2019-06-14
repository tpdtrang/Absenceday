import React, { Component } from 'react';
import { HeaderLayout, SiderLayout, MenuLayout } from '../../layouts/home';
import {ListComponent, FullCalenderComponent} from '../../shared/home';
import * as action_dayoff from '../../../actions/dayoff';
import * as action_user from '../../../actions/user';
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
        this.props.dispatch(action_user.requestGetUser());
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
    onAdd = (data)=>{
        this.props.dispatch(action_dayoff.requestCreateDayOff(data));
        this.setState({
            views: true
        })
    }
    render() {
        
        // console.log(cookies.get('data'));
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
                    <SiderLayout  user={this.props.user}></SiderLayout>
                    <div className="b-right-content">
                        <MenuLayout onViews={this.onViews} onViewCalendar={this.onViewCalendar} user={this.props.user} onAdd = {this.onAdd}></MenuLayout>
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
        user: state.user.all
    }
}
export default connect(mapStateToProps,null)(HomeComponent);