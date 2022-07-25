import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import FilterMain from '../components/mainScreenComp/FilterMain';
import EmptyTask from '../components/mainScreenComp/EmptyTask';
import './ManageTasks.css'
import FullTask from '../components/mainScreenComp/FullTask';
import SupermomMain from './SupermomMain'; 
import { HashRouter, Route } from 'react-router-dom';

class ManageTasksMom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            updateTaskOpen : false,
            taskTitle:'',
            desc:'',
            date:'',
            time:'',
            endTime:'',
            assignedTo:'',
            subject:'',
            taskObj:{}
        }
    }
    addTask = (task) => {
        // console.log(task.title + 'in ManageTasksMom');
        this.props.addTask(task);
    }

    updateTask = (task) => {
        // console.log(task.title + 'in ManageTasksMom');
        this.props.updateTask(task);
    }

    openTaskUpdate2 = (myTitle) => {
        
        // this.setState({
        //     updateTaskOpen:true,
        //     taskTitle:myTitle
        // })

        const currentTask = this.props.tasksToDo.filter((task) => {
            if(myTitle == task.title)
                return true;
        }
        )

        this.setState({
            updateTaskOpen : true,
            taskTitle: currentTask[0].title,
            desc: currentTask.description,
            date: currentTask.date,
            time:currentTask.time,
            endTime:currentTask.endTime,
            assignedTo:currentTask.assignedTo,
            subject:currentTask.subject,

            taskObj: {title: currentTask.title,
                desc: currentTask.description,
                date: currentTask.date,
                endTime:currentTask.endTime,
                time:currentTask.time,
                assignedTo:currentTask.assignedTo,
                subject:currentTask.subject}
        })

    }

    openTaskUpdate = (title) =>{
        
        const currentTask = this.props.tasksToDo.filter((task) => {
            if(title == task.title)
                return true;
        }
        )

        this.setState({
            updateTaskOpen : true,
            taskTitle: currentTask[0].title,
            desc: currentTask[0].description,
            date: currentTask[0].date,
            time:currentTask[0].time,
            endTime:currentTask[0].endTime,
            assignedTo:currentTask[0].assignedTo,
            subject:currentTask[0].subject,

            taskObj: currentTask[0]
        })
    }

    // setCurrentTaskTitle = (title) =>{
    //     this.setState({
    //         taskTitle : title
    //     })
    // }

    showTasks = (filter) => {
        this.props.showTasks(filter);
    }

    setFilter = (filter) => {
        this.props.setFilter(filter);
    }

    setModalCloseInParent = () =>{
        this.setState({
            updateTaskOpen : false
        })
    }

    render(){
        return(
           
                <div className='manage-tasks'>
                    <div className='manage-tasks-child'>
                        <EmptyTask addTask = {this.addTask} people = {this.props.people} subjects = {this.props.subjects}></EmptyTask>
                    </div>
                    <div className='manage-tasks-child'>
                        <h3 className='centered-header'>Find and edit tasks</h3>
                        <FilterMain setCurrentTaskTitle = {this.setCurrentTaskTitle} openTaskUpdate={this.openTaskUpdate} openTaskUpdate2={this.openTaskUpdate2} setFilter = {this.setFilter} tasksToDo = {this.props.tasksToDo} filter = {this.props.filter} tasksToShow = {this.props.tasksToShow} showTasks = {this.props.showTasks} people = {this.props.people} subjects = {this.props.subjects}></FilterMain>
                        {/* {this.props.tasksToShow} */}
                    </div>
                    
                    {/* <div className='manage-tasks-child'>
                        <EmptyTask addTask = {this.addTask} people = {this.props.people} subjects = {this.props.subjects}></EmptyTask>
                    </div> */}
                    <div>
                        <FullTask imNew= {true} taskObj={this.state.taskObj} title={this.state.taskTitle} subject={this.state.subject} desc={this.state.desc} taskObj = {this.state.taskObj} taskTitle={this.state.taskTitle} setModalCloseInParent = {this.setModalCloseInParent} isModalOpen = {this.state.updateTaskOpen} updateTask = {this.updateTask} people = {this.props.people} subjects = {this.props.subjects} tasksToDo = {this.props.tasksToDo}></FullTask>
                    </div>
                    
    {/* The EmptyTask will open when the button will be clicked
    //  FullTask will open when clicking a task on the list from the filter */}
    {/* Send props */}
                    {/* <EmptyTask addTask = {this.addTask}></EmptyTask> */}
                    {/* //will send the task array and a function to add a task to the array */}
                    
                    {/* <FullTask></FullTask> */}
                    
                    {/* //will send the task array and a function to add a task to the array */}
                </div>
      
        )
    }

}
  
export default ManageTasksMom;
  