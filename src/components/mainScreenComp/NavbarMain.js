import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './NavbarMain.css'

class NavbarMain extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return(
            <div>
              <Navbar>
                {/*  bg="dark" variant="dark" */}
                <Nav className="mr-auto">
                <Nav.Link href="#/">Home</Nav.Link>
                  <Nav.Link href="#/manageTasks">Manage Tasks</Nav.Link>
                  <Nav.Link href="#/manageSubjects">Manage Subjects</Nav.Link>
                  <Nav.Link href="#/managePeople">Manage People</Nav.Link>
                  <Nav.Link href="#/messages">Messages</Nav.Link>
                  {/* Add icon on notifications when new msg */}
                  <Nav.Link href="#/notifications">Notifications</Nav.Link>
                  <Nav.Link href="#/logout">logout</Nav.Link>
                </Nav>
              </Navbar>

            </div> 
        )
    }
}
export default NavbarMain;
