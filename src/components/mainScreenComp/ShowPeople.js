import React from 'react';
import { Form } from 'react-bootstrap';

class ShowPeople extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const peArray = this.props.people.map((person)=>{return(<li>{person.name}</li>)});
        const onlyPeople = peArray.slice(1,peArray.length);

        const peArray2 = this.props.people.map((person)=>{return(<div className="mb-3">
                                                                        <Form.Check 
                                                                            type='checkbox'
                                                                            label={person.name}
                                                                        />
                                                                        </div>)});
        const onlyPeople2 = peArray2.slice(1,peArray2.length);

        return(
            <div>
                <div className='show-data'>
                    <h3 className='show-data-header'>Our Dear Family</h3>
                </div>
                <div className='show-list'>
                    <div>
                        {onlyPeople}
                    </div>
                </div>
                
                {/* <div className='show-list'>
                    <Form>
                        {onlyPeople2}
                    </Form>
                 </div> */}

            </div>
        )
    }
}

export default ShowPeople;