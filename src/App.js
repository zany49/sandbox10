import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
// import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import SupermomMain from './pages/SupermomMain'
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageTasksMom from './pages/ManageTasksMom';
import ManageSubjects from './pages/ManageSubjects';
import ManagePeople from './pages/ManagePeople';
import NavbarMain from './components/mainScreenComp/NavbarMain';
import { HashRouter, Route} from 'react-router-dom';
import {Col, Card} from 'react-bootstrap';
import React from 'react';
import MyCalendar from './components/mainScreenComp/MyCalendar';
import Basic from './components/mainScreenComp/MyCalendar';
import moment from "moment";
import Login2 from './pages/Login2';

class App extends React.Component {

      constructor(props){
        super(props);
        
        this.state = {
            tasksToDo : [],
            // Maybe find done tasks dinamically?
            tasksDone : [],
            // tasksToShow : [{title : 'a'},{title : 'b'}],
            tasksToShow : [],
            // <Card><h1>{task.title}</h1><p>{task.desc}</p><h5>{task.date}+' '+{task.time}</h5><h5>{task.assignedTo}</h5></Card>
            subjects : [{subject:'Choose a Subject'},{subject:'Fun'},{subject:'Studies'},{subject:'Laundry'},{subject:'Kitchen'},{subject: 'cleaning'}],
            people: [{name:'Choose a Person'},{name: 'Mom'}, {name: 'Dad'}, {name: 'Adi'}],
            //  filter:{name: '', subject:'', date: ''}
            filter:{name:'', subject:'', date:''},
            events:[],
            mainFilter:{person:'', subject:''}
        }
    }

    // title: this.state.title,
    //         subject: this.state.subject,
    //         desc: this.state.desc,
    //         date: this.state.date,
    //         time: this.state.time,
    //         assignedTo: this.state.assignedTo

    showTasks = (filter) => {

      // Change tasksToShow to filtered tasks
      // this.setState({
      //   tasksToShow : this.state.tasksToDo 
      // })
     
      // const tasksCards = this.state.tasksToDo.map((task, index) => {
      //   return(
      //       <Col lg={3} md={6} sm={12}>
      //               <Card><h1>{task.title}</h1><p>{task.desc}</p><h5>{task.date}+' '+{task.time}</h5><h5>{task.assignedTo}</h5></Card>
      //        </Col>
      //   )
    }

    // )
    // return tasksCards;
    
    setMainFilter = (myFilter) => {
      this.setState(
        {
            mainFilter: myFilter
        }      
      )
    }

    setFilter = (myFilter) => {

      // if (myFilter.hasOwnProperty('name')){
      //   this.setState(
      //     {
      //         filter.name: myFilter.name
      //     }      
      //   )
      // }
      // else if (myFilter.hasOwnProperty('subject')){
      //   this.setState(
      //     {
      //         filter.subject: myFilter.subject
      //     }      
      //   )
      // }

      this.setState(
        {
            filter: myFilter
        }      
      )
      // this.state.filter.name = filter.name;
      // this.state.filter.subject = filter.subject;
    }

    ///////update task from calendar gets here:
    updateTask = (task) => {
      // Update the task
     console.log('updateTask');
    const taskIndex = this.state.tasksToDo.findIndex((taskToDo) => {
                                                      if (task.title == taskToDo.title){
                                                        return true;
                                                      }});
    let helper = [...this.state.tasksToDo];
    helper[taskIndex] = task;
    this.setState({tasksToDo : helper}, function () {
      const defineDates = this.state.tasksToDo.map((task) => {return({endTime: task.endTime, date: task.date,time:task.time, start: moment(task.date.concat('-').concat(task.time),"YYYY-MM-DD-hh:mm").toDate(), assignedTo : task.assignedTo, desc: task.desc, subject:task.subject, title:task.title})})
    const myEvents = defineDates.map((task,index)=>{return({start: task.start, end: moment(task.date.concat('-').concat(task.endTime),"YYYY-MM-DD-hh:mm").toDate(), title:task.title, id:index, assignedTo : task.assignedTo})})
    //  const myEvents = defineDates.map((task,index)=>{return({start: task.start, end:moment(task.date.concat('-').concat((parseInt((task.time).substring(0,2))+1).toString()),"YYYY-MM-DD-hh:mm").toDate(), title:task.title, id:index, assignedTo : task.assignedTo})})
    this.setState({ events: myEvents})
    })
 
    // const defineDates = this.state.tasksToDo.map((task) => {return({endTime: task.endTime, date: task.date,time:task.time, start: moment(task.date.concat('-').concat(task.time),"YYYY-MM-DD-hh:mm").toDate(), assignedTo : task.assignedTo, desc: task.desc, subject:task.subject, title:task.title})})
    // const myEvents = defineDates.map((task,index)=>{return({start: task.start, end: moment(task.date.concat('-').concat(task.endTime),"YYYY-MM-DD-hh:mm").toDate(), title:task.title, id:index, assignedTo : task.assignedTo})})
    // //  const myEvents = defineDates.map((task,index)=>{return({start: task.start, end:moment(task.date.concat('-').concat((parseInt((task.time).substring(0,2))+1).toString()),"YYYY-MM-DD-hh:mm").toDate(), title:task.title, id:index, assignedTo : task.assignedTo})})
    // this.setState({ events: myEvents})


  //    const currentTask = this.props.tasksToDo.find((task) => {
  //     if(this.props.title == task.title)
  //         return true;
  // }
  // )

  }



    addTask = (task) =>{
      console.log('in addtask in app.js')
      let helper = [...this.state.tasksToDo].concat(task);
      this.setState({tasksToDo: helper}, function(){this.defineEvents();})
  
      
        // const defineDates = this.state.tasksToDo.map((task) => {return({endTime: task.endTime, date: task.date,time:task.time, start: moment(task.date.concat('-').concat(task.time),"YYYY-MM-DD-hh:mm").toDate(), assignedTo : task.assignedTo, desc: task.desc, subject:task.subject, title:task.title})})
        // const myEvents = defineDates.map((task,index)=>{return({start: task.start, end: moment(task.date.concat('-').concat(task.endTime),"YYYY-MM-DD-hh:mm").toDate(), title:task.title, id:index, assignedTo : task.assignedTo})})
        // //  const myEvents = defineDates.map((task,index)=>{return({start: task.start, end:moment(task.date.concat('-').concat((parseInt((task.time).substring(0,2))+1).toString()),"YYYY-MM-DD-hh:mm").toDate(), title:task.title, id:index, assignedTo : task.assignedTo})})
        // this.setState({
        //   events: myEvents
        // })
      }

      defineEvents(){
        const defineDates = this.state.tasksToDo.map((task) => {return({endTime: task.endTime, date: task.date,time:task.time, start: moment(task.date.concat('-').concat(task.time),"YYYY-MM-DD-hh:mm").toDate(), assignedTo : task.assignedTo, desc: task.desc, subject:task.subject, title:task.title})})
        const myEvents = defineDates.map((task,index)=>{return({start: task.start, end: moment(task.date.concat('-').concat(task.endTime),"YYYY-MM-DD-hh:mm").toDate(), title:task.title, id:index, assignedTo : task.assignedTo})})
        //  const myEvents = defineDates.map((task,index)=>{return({start: task.start, end:moment(task.date.concat('-').concat((parseInt((task.time).substring(0,2))+1).toString()),"YYYY-MM-DD-hh:mm").toDate(), title:task.title, id:index, assignedTo : task.assignedTo})})
        this.setState({
          events: myEvents
        })
      }
   

    addSubject = (sub) =>{
      let helper = this.state.subjects.concat(sub);
      // console.log(sub.subject + ' in add subject')
      // console.log(helper[0].subject + ' in add subject')
      this.setState(
          {
            subjects: helper 
          }      
      )
      }

      addPeople = (person) =>{
        console.log(person);
        let helper = this.state.people.concat(person);
        console.log(`${helper[3].name} + ${helper[3].bday}+${helper[3].prefferedSubjects}+${helper[3].permission} + in app add people`)
        this.setState(
            {
              people: helper 
            }      
        )
        }

    removeSubject = (subject) =>{
      // let helper = ???;
      // this.setState(
      //     {
      //       subjects: helper 
      //     }      
      // )
    }

      render(){
        return (
        //  <Login2></Login2>
        <HashRouter>

          <NavbarMain></NavbarMain>
          <Route exact path="/">
            <SupermomMain filter = {this.state.filter} updateTask = {this.updateTask} setFilter = {this.setFilter} tasksToDo = {this.state.tasksToDo} filter = {this.state.filter} tasksToShow = {this.state.tasksToShow} showTasks = {this.showTasks} people = {this.state.people} subjects = {this.state.subjects}></SupermomMain>
            <MyCalendar filter = {this.state.filter}
                        updateTask = {this.updateTask}
                        tasksToDo = {this.state.tasksToDo} 
                        people={this.state.people} 
                        subjects = {this.state.subjects}
                        events={this.state.events}
                        eventPropGetter={
                          (event, start, end, isSelected) => {
                            let newStyle = {
                              backgroundColor: "lightgrey",
                              color: 'black',
                              borderRadius: "0px",
                              border: "none"
                            };
                      
                            if (event.assignedTo == 'Mom'){
                              newStyle.backgroundColor = "lightpink"
                            }
                           else if (event.assignedTo == 'Dad'){
                              newStyle.backgroundColor = "lightblue"
                            }
                            if (event.assignedTo == 'Adi'){
                              newStyle.backgroundColor = "lightgreen"
                            }
                      
                            return {
                              className: "",
                              style: newStyle
                            };
                          }
                        }></MyCalendar>
          </Route>
          <Route exact path="/manageTasks">
            <ManageTasksMom updateTask = {this.updateTask} setFilter = {this.setFilter} tasksToDo = {this.state.tasksToDo} filter = {this.state.filter} tasksToShow = {this.state.tasksToShow} showTasks = {this.showTasks} addTask = {this.addTask} people={this.state.people} subjects = {this.state.subjects}></ManageTasksMom>
          </Route>
          <Route exact path="/manageSubjects">
            <ManageSubjects filter = {this.state.filter} addSubject = {this.addSubject} subjects = {this.state.subjects}></ManageSubjects>
          </Route>
          <Route exact path="/managePeople">
            <ManagePeople filter = {this.state.filter} addPeople = {this.addPeople} people = {this.state.people} subjects= {this.state.subjects}></ManagePeople>
          </Route>
        </HashRouter>
      )
    }
}    

  
export default App;
