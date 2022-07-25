import React from 'react'
import PersonFilter from './PersonFilter';
import SubjectFilter from './SubjectFilter';
import DateFilter from './DateFilter';
import { Form, Button, Col, Card, CardDeck  } from 'react-bootstrap';

// Dont forget it also gets props: tasksToShow = {this.state.tasksToShow}

class FilterMain extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     tasksToShow : []
        // }
    }

    // showTasks = () => {
    //     this.props.showTasks(this.props.filter);
    // }

    findTasks = () => {
        const filteredTasks = this.props.tasksToDo.filter((task) => {
                if((this.props.filter.name == task.assignedTo && this.props.filter.subject == task.subject)||
                ((this.props.filter.name == undefined || this.props.filter.name == 'Choose a Person') && this.props.filter.subject == task.subject)||
                (this.props.filter.name == task.assignedTo && (this.props.filter.subject == undefined || this.props.filter.subject == undefined == 'Choose a Person')))
                    return true;
                }
                )
        // this.setState(
        //     {
        //         tasksToShow: filteredTasks 
        //     }     
        // )
        return filteredTasks;
    }

    setFilter = (filter) => {
        this.props.setFilter(filter)
    }

    openTaskUpdate = (title) => {
       // this.props.setCurrentTaskTitle(title);
        this.props.openTaskUpdate(title);
    }

    openTaskUpdate2 =(title) => {
        // this.props.setCurrentTaskTitle(title);
         this.props.openTaskUpdate2(title);
     }

    render(){
        const filTasks = this.findTasks();
        const tasksCards = filTasks.map((task) => {
        // const tasksCards = this.props.tasksToShow.map((task) => {
            // <Link to="/signup">Sign up</Link>

            return(
             <Col lg={3} md={6} sm={12}>
                    <Card className = 'tasks-cards' bg = 'light'>
                        <Button className='card-text header' variant="light" text='danger' onClick={()=>{this.openTaskUpdate2(task.title)}}><h5>{task.title}</h5></Button>
                        {/* <Button onClick={()=>{this.setState({isModalOpen:true})}}>{task.title}</Button> */}
                        {/* <h1>{task.title}</h1> */}
                        <p className='card-text'>{task.desc}</p>
                        <h5 className='card-text'>{task.date}</h5>
                        <h5 className='card-text'>{task.time}</h5>
                        <h5 className='card-text'>{task.assignedTo}</h5>
                    </Card>
             </Col>
            )
            })

        return (
            <div>
            <div className='form-container'>
                <Form className='my-form'>
                    <PersonFilter setFilter = {this.setFilter} people = {this.props.people}></PersonFilter>
                    <SubjectFilter setFilter = {this.setFilter} subjects = {this.props.subjects}></SubjectFilter>
                    <DateFilter setFilter = {this.setFilter}></DateFilter>
                    {/* <Button variant="primary" type='button' onClick={this.showTasks}>Find Tasks</Button> */}
                    {/* <div class='filtered-cards'>
                        {tasksCards}
                    </div> */}

                </Form>
                </div>
                {/* <div className='filtered-cards'> */}
                    <CardDeck className='filtered-cards'>
                        {tasksCards}
                    </CardDeck>
                {/* </div> */}
            
            </div>
        )
    }
}

export default FilterMain;