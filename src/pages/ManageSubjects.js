import React from "react";
import { Container } from "react-bootstrap";
import AddSubject from "../components/mainScreenComp/AddSubject";
import ShowSubjects from "../components/mainScreenComp/ShowSubjects";

class ManageSubjects extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    addSubject = (sub) => {
        console.log(sub.subject + ' in manageSubjects')
        this.props.addSubject(sub);
    }

    render(){
        return(
            <Container className='manage-subjects-people' >
                <AddSubject addSubject = {this.addSubject}></AddSubject>
                <ShowSubjects subjects = {this.props.subjects}></ShowSubjects>
                
            </Container>
        )
    }

}

export default ManageSubjects;