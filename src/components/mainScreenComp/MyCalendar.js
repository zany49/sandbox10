// const events = [
//   {
//     id: 0,
//     title: 'All Day Event very long title',
//     allDay: true,
//     start: new Date(2015, 3, 0),
//     end: new Date(2015, 3, 1),
//   },
//   {
//     id: 1,
//     title: 'Long Event',
//     start: new Date(2015, 3, 7),
//     end: new Date(2015, 3, 10),
//   },

//   {
//     id: 2,
//     title: 'DTS STARTS',
//     start: new Date(2016, 2, 13, 0, 0, 0),
//     end: new Date(2016, 2, 20, 0, 0, 0),
//   },

//   {
//     id: 3,
//     title: 'DTS ENDS',
//     start: new Date(2016, 10, 6, 0, 0, 0),
//     end: new Date(2016, 10, 13, 0, 0, 0),
//   },

//   {
//     id: 4,
//     title: 'Some Event',
//     start: new Date(2015, 3, 9, 0, 0, 0),
//     end: new Date(2015, 3, 10, 0, 0, 0),
//   },
//   {
//     id: 5,
//     title: 'Conference',
//     start: new Date(2015, 3, 11),
//     end: new Date(2015, 3, 13),
//     desc: 'Big conference for important people',
//   },
//   {
//     id: 6,
//     title: 'Meeting',
//     start: new Date(2015, 3, 12, 10, 30, 0, 0),
//     end: new Date(2015, 3, 12, 12, 30, 0, 0),
//     desc: 'Pre-meeting meeting, to prepare for the meeting',
//   },
//   {
//     id: 7,
//     title: 'Lunch',
//     start: new Date(2015, 3, 12, 12, 0, 0, 0),
//     end: new Date(2015, 3, 12, 13, 0, 0, 0),
//     desc: 'Power lunch',
//   },
//   {
//     id: 8,
//     title: 'Meeting',
//     start: new Date(2015, 3, 12, 14, 0, 0, 0),
//     end: new Date(2015, 3, 12, 15, 0, 0, 0),
//   },
//   {
//     id: 9,
//     title: 'Happy Hour',
//     start: new Date(2015, 3, 12, 17, 0, 0, 0),
//     end: new Date(2015, 3, 12, 17, 30, 0, 0),
//     desc: 'Most important meal of the day',
//   },
//   {
//     id: 10,
//     title: 'Dinner',
//     start: new Date(2015, 3, 12, 20, 0, 0, 0),
//     end: new Date(2015, 3, 12, 21, 0, 0, 0),
//   },
//   {
//     id: 11,
//     title: 'Planning Meeting with Paige',
//     start: new Date(2015, 3, 13, 8, 0, 0),
//     end: new Date(2015, 3, 13, 10, 30, 0),
//   },
//   {
//     id: 11.1,
//     title: 'Inconvenient Conference Call',
//     start: new Date(2015, 3, 13, 9, 30, 0),
//     end: new Date(2015, 3, 13, 12, 0, 0),
//   },
//   {
//     id: 11.2,
//     title: "Project Kickoff - Lou's Shoes",
//     start: new Date(2015, 3, 13, 11, 30, 0),
//     end: new Date(2015, 3, 13, 14, 0, 0),
//   },
//   {
//     id: 11.3,
//     title: 'Quote Follow-up - Tea by Tina',
//     start: new Date(2015, 3, 13, 15, 30, 0),
//     end: new Date(2015, 3, 13, 16, 0, 0),
//   },
//   {
//     id: 12,
//     title: 'Late Night Event',
//     start: new Date(2015, 3, 17, 19, 30, 0),
//     end: new Date(2015, 3, 18, 2, 0, 0),
//   },
//   {
//     id: 12.5,
//     title: 'Late Same Night Event',
//     start: new Date(2015, 3, 17, 19, 30, 0),
//     end: new Date(2015, 3, 17, 23, 30, 0),
//   },
//   {
//     id: 13,
//     title: 'Multi-day Event',
//     start: new Date(2015, 3, 20, 19, 30, 0),
//     end: new Date(2015, 3, 22, 2, 0, 0),
//   },
//   {
//     id: 14,
//     title: 'Today',
//     start: new Date(new Date().setHours(new Date().getHours() - 3)),
//     end: new Date(new Date().setHours(new Date().getHours() + 3)),
//   },
//   {
//     id: 15,
//     title: 'Point in Time Event',
//     start: now,
//     end: now,
//   },
//   {
//     id: 16,
//     title: 'Video Record',
//     start: new Date(2015, 3, 14, 15, 30, 0),
//     end: new Date(2015, 3, 14, 19, 0, 0),
//   },
//   {
//     id: 17,
//     title: 'Dutch Song Producing',
//     start: new Date(2015, 3, 14, 16, 30, 0),
//     end: new Date(2015, 3, 14, 20, 0, 0),
//   },
//   {
//     id: 18,
//     title: 'Itaewon Halloween Meeting',
//     start: new Date(2015, 3, 14, 16, 30, 0),
//     end: new Date(2015, 3, 14, 17, 30, 0),
//   },
//   {
//     id: 19,
//     title: 'Online Coding Test',
//     start: new Date(2015, 3, 14, 17, 30, 0),
//     end: new Date(2015, 3, 14, 20, 30, 0),
//   },
//   {
//     id: 20,
//     title: 'An overlapped Event',
//     start: new Date(2015, 3, 14, 17, 0, 0),
//     end: new Date(2015, 3, 14, 18, 30, 0),
//   },
//   {
//     id: 21,
//     title: 'Phone Interview',
//     start: new Date(2015, 3, 14, 17, 0, 0),
//     end: new Date(2015, 3, 14, 18, 30, 0),
//   },
//   {
//     id: 22,
//     title: 'Cooking Class',
//     start: new Date(2015, 3, 14, 17, 30, 0),
//     end: new Date(2015, 3, 14, 19, 0, 0),
//   },
//   {
//     id: 23,
//     title: 'Go to the gym',
//     start: new Date(2015, 3, 14, 18, 30, 0),
//     end: new Date(2015, 3, 14, 20, 0, 0),
//   },
// ]


//with drag, doesnt drop

import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { toDate } from "date-fns";
import FullTask from "./FullTask";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
const start1=new Date(2021,5,21,18,0,0);
const end1=new Date(2021,5,21,19,0,0);
class MyCalendar extends Component {
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
  state = {

    events: [
      {
        // start: 'Thu May 20 2021 15:38:00 GMT+0300 (Israel Daylight Time)',
        // end: 'Thu May 20 2021 16:38:00 GMT+0300 (Israel Daylight Time)',
        start: moment("21-05-2021-15:00","DD-MM-YYYY-hh:mm").toDate(),
        end:  moment("21-05-2021-16:00","DD-MM-YYYY-hh:mm").toDate(),
        title: "New task",
        id: 1
      },
    ],
  };

   openTaskUpdate2 = (myTitle) => {
        
        // this.setState({
        //     updateTaskOpen:true,
        //     taskTitle:myTitle
        // })

        const currentTask = this.props.tasksToDo.find((task) => {
            if(myTitle == task.title)
                return true;
        }
        )
        this.setState({
          taskTitle: currentTask.title,
          desc: currentTask.description,
          date: currentTask.date,
          time:currentTask.time,
          endTime:currentTask.endTime,
          assignedTo:currentTask.assignedTo,
          subject:currentTask.subject,

          taskObj: {title: currentTask.title,
              desc: currentTask.description,
              date: currentTask.date,
              time:currentTask.time,
              endTime:currentTask.endTime,
              assignedTo:currentTask.assignedTo,
              subject:currentTask.subject}
      })
        // this.setState({
        //     taskTitle: currentTask[0].title,
        //     desc: currentTask[0].description,
        //     date: currentTask[0].date,
        //     time:currentTask[0].time,
        //     endTime:currentTask[0].endTime,
        //     assignedTo:currentTask[0].assignedTo,
        //     subject:currentTask[0].subject,

        //     taskObj: {title: currentTask[0].title,
        //         desc: currentTask[0].description,
        //         date: currentTask[0].date,
        //         time:currentTask[0].time,
        //         endTime:currentTask[0].endTime,
        //         assignedTo:currentTask[0].assignedTo,
        //         subject:currentTask[0].subject}
        // })
        this.setState({updateTaskOpen : true})

    }
//////////CHANGED HERE:
    setModalCloseInParent = () =>{
      this.setState({
          updateTaskOpen : false,
          taskTitle:'',
        desc:'',

        date:'',
        time:'',
        endTime:'',
        assignedTo:'',
        subject:'',
        taskObj:{}
      })
  }

  onEventResize = (data) => {
    // const { start, end } = data;

    // this.setState((state) => {
    //   state.events[0].start = start;
    //   state.events[0].end = end;
    //   return { events: [...state.events] };
    // });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  eventClicked=(event)=>{
    this.openTaskUpdate2(event.title);
      console.log(event)
  }

  // mapTasksToEvents=()=>{
  //   const defineDates = this.props.tasksToDo.map((task) => {return({start: moment(task.date.concat('-').concat(task.time),"DD-MM-YYYY-hh:mm").toDate(), assignedTo : task.assignedTo, desc: task.desc, subject:task.subject, title:task.title})})
  //   // const myEvents = defineDates.map((task,index)=>{return({start: task.start, end:new Date(task.start.addHours(task.start.getHours()+1)), title:'new title', id:index})})
  //    const myEvents = defineDates.map((task,index)=>{return({start: task.start, end:new Date('22-05-2021-16:00'), title:'new title', id:index})})
  //   this.setState({
  //     events: myEvents
  //   })
  // }

  // var today = new Date();
  // today.setHours(today.getHours() + 4);

  // assignedTo: "Mom"
  // date: "2021-05-06"
  // desc: "eeee"
  // subject: "Fun"
  // time: "22:57"
  // title: "www"
  
  // componentDidUpdate(){
  //   this.mapTasksToEvents();
  // }

  filterEvents =(events, filter) =>{
      if (filter.name == 'Choose a Person' || filter.name == undefined )
        return events;
      else {
        return events.filter((event)=>{if (event.assignedTo == filter.name) return true})
      }
  }

  updateTask = (task) => {
    // console.log(task.title + 'in ManageTasksMom');
    this.props.updateTask(task);
  }

  render() {
    const myEvents = this.filterEvents(this.props.events, this.props.filter);
    return (
      <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="week"
          events={myEvents}
          //events={this.props.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "80vh" }}
          onSelectEvent = {this.eventClicked}
          eventPropGetter={(this.props.eventPropGetter)}
        />
        <div>
              <FullTask imNew= {true}
              taskObj={this.state.taskObj} 
              time={this.state.time}
              endTime={this.state.endTime}
              assignedTo={this.state.assignedTo}
              title={this.state.taskTitle} subject={this.state.subject} desc={this.state.desc} taskObj = {this.state.taskObj} taskTitle={this.state.taskTitle} setModalCloseInParent = {this.setModalCloseInParent} isModalOpen = {this.state.updateTaskOpen} updateTask = {(task)=>this.updateTask(task)} people = {this.props.people} subjects = {this.props.subjects} tasksToDo = {this.props.tasksToDo}></FullTask>
        </div>
        
      </div>
    );
  }
}


/////////////////////////////////////////////////////////////////////////////////////////.///

// import React, { Component } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);

// class MyCalendar extends Component {
//   state = {
//     events: [
//       {
//         start: moment().toDate(),
//         end: moment()
//           .add(1, "days")
//           .toDate(),
//         title: "Some title"
//       }
//     ]
//   };
// // {start: Thu May 20 2021 15:38:00 GMT+0300 (Israel Daylight Time), end: Fri May 21 2021 15:38:00 GMT+0300 (Israel Daylight Time), title: "Some title"}
//   render() {
//     console.log(this.state.events);
//     return (
//       <div className="App">
//         <Calendar
//           localizer={localizer}
//           defaultDate={new Date()}
//           defaultView="week"
//           events={this.state.events}
//           style={{ height: "50vh" }}
//         />
//       </div>
//     );
//   }
// }


////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import {format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, parse, subMonths, addMonths  } from "date-fns";

// class MyCalendar extends React.Component {
//   state = {
//     currentMonth: new Date(),
//     selectedDate: new Date()
//   };

//   renderHeader() {
//     const dateFormat = "mmmm yyyy";

//     return (
//       <div className="header row flex-middle">
//         <div className="col col-start">
//           <div className="icon" onClick={this.prevMonth}>
//             chevron_left
//           </div>
//         </div>
//         <div className="col col-center">
//           <span>{format(this.state.currentMonth, dateFormat)}</span>
//         </div>
//         <div className="col col-end" onClick={this.nextMonth}>
//           <div className="icon">chevron_right</div>
//         </div>
//       </div>
//     );
//   }

//   renderDays() {
//     const dateFormat = "dddd";
//     const days = [];

//     let startDate = startOfWeek(this.state.currentMonth);

//     for (let i = 0; i < 7; i++) {
//       days.push(
//         <div className="col col-center" key={i}>
//           {format(addDays(startDate, i), dateFormat)}
//         </div>
//       );
//     }

//     return <div className="days row">{days}</div>;
//   }

//   renderCells() {
//     const { currentMonth, selectedDate } = this.state;
//     const monthStart = startOfMonth(currentMonth);
//     const monthEnd = endOfMonth(monthStart);
//     const startDate = startOfWeek(monthStart);
//     const endDate = endOfWeek(monthEnd);

//     const dateFormat = "D";
//     const rows = [];

//     let days = [];
//     let day = startDate;
//     let formattedDate = "";

//     while (day <= endDate) {
//       for (let i = 0; i < 7; i++) {
//         formattedDate = format(day, dateFormat);
//         const cloneDay = day;
//         days.push(
//           <div
//             className={`col cell ${
//               !isSameMonth(day, monthStart)
//                 ? "disabled"
//                 : isSameDay(day, selectedDate) ? "selected" : ""
//             }`}
//             key={day}
//             onClick={() => this.onDateClick(parse(cloneDay))}
//           >
//             <span className="number">{formattedDate}</span>
//             <span className="bg">{formattedDate}</span>
//           </div>
//         );
//         day = addDays(day, 1);
//       }
//       rows.push(
//         <div className="row" key={day}>
//           {days}
//         </div>
//       );
//       days = [];
//     }
//     return <div className="body">{rows}</div>;
//   }

//   onDateClick = day => {
//     this.setState({
//       selectedDate: day
//     });
//   };

//   nextMonth = () => {
//     this.setState({
//       currentMonth: addMonths(this.state.currentMonth, 1)
//     });
//   };

//   prevMonth = () => {
//     this.setState({
//       currentMonth: subMonths(this.state.currentMonth, 1)
//     });
//   };

//   render() {
//     return (
//       <div className="calendar">
//         {this.renderHeader()}
//         {this.renderDays()}
//         {this.renderCells()}
//       </div>
//     );
//   }
// }


export default MyCalendar;