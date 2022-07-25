import React from 'react';
import NavbarMain from '../components/mainScreenComp/NavbarMain';
import FilterMain from '../components/mainScreenComp/FilterMain';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import WeekPlan from '../components/mainScreenComp/WeekPlan';
import ManageTasksMom from './ManageTasksMom';
import PersonFilter from '../components/mainScreenComp/PersonFilter';
import SubjectFilter from '../components/mainScreenComp/SubjectFilter';
import FullTask from '../components/mainScreenComp/FullTask';

class SupermomMain extends React.Component{
    constructor(props){
        super(props);
        
        // this.state = {
        //     updateTaskOpen : false,
        //     taskTitle:'',
        //     desc:'',
        //     date:'',
        //     time:'',
        //     assignedTo:'',
        //     subject:'',
        //     taskObj:{}
        // }
    }

    // openTaskUpdate2 = (myTitle) => {
        
    //     // this.setState({
    //     //     updateTaskOpen:true,
    //     //     taskTitle:myTitle
    //     // })

    //     const currentTask = this.props.tasksToDo.filter((task) => {
    //         if(myTitle == task.title)
    //             return true;
    //     }
    //     )

    //     this.setState({
    //         updateTaskOpen : true,
    //         taskTitle: currentTask[0].title,
    //         desc: currentTask.description,
    //         date: currentTask.date,
    //         time:currentTask.time,
    //         assignedTo:currentTask.assignedTo,
    //         subject:currentTask.subject,

    //         taskObj: {title: currentTask.title,
    //             desc: currentTask.description,
    //             date: currentTask.date,
    //             time:currentTask.time,
    //             assignedTo:currentTask.assignedTo,
    //             subject:currentTask.subject}
    //     })

    // }

    showTasks = (filter) => {
        this.props.showTasks(filter);
    }

    // setModalCloseInParent = () =>{
    //     this.setState({
    //         updateTaskOpen : false
    //     })
    // }

    setFilter = (filter) => {
        this.props.setFilter(filter);
    }

    setMainFilter = (filter) => {
        this.props.setMainFilter(filter);
    }

    // addTask = (task) =>{
    //     let helper = this.state.tasksToDo.concat(task);
    //     this.setState(
    //         {
    //             tasksToDo: helper 
    //         }      
    //     )
    // }
    render(){
        return(
            <div>
                {/* <NavbarMain></NavbarMain> */}
                {/* <FilterMain tasksToDo = {this.props.tasksToDo} setFilter = {this.setFilter} filter = {this.props.filter} tasksToShow = {this.props.tasksToShow} showTasks = {this.props.showTasks} people = {this.props.people} subjects = {this.props.subjects}></FilterMain> */}
                <PersonFilter setFilter = {this.setFilter} people = {this.props.people}></PersonFilter>
                {/* <SubjectFilter subjects = {this.props.subjects} setFilter = {this.setFilter}></SubjectFilter> */}
                <WeekPlan></WeekPlan>
                
            </div>
        )
    }

}
  
export default SupermomMain;
  