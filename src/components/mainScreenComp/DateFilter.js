import React from 'react'
import { Form  } from 'react-bootstrap';

class DateFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(

                    // <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Choose Day</Form.Label>
                            <Form.Control type="date" name='day'/>
                        </Form.Group>
                   /* </Form>  */
        
        );
    }
}

export default DateFilter;
