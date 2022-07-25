import React from 'react';
import { Form } from 'react-bootstrap';

class ShowSubjects extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const subArray = this.props.subjects.map((subject)=>{return(<li>{subject.subject}</li>)});
        const onlySubjects = subArray.slice(1,subArray.length);

        const subArray2 = this.props.subjects.map((subject)=>{return(<div className="mb-3">
                                                                        <Form.Check 
                                                                            type='checkbox'
                                                                            label={subject.subject}
                                                                        />
                                                                        </div>)});
        const onlySubjects2 = subArray2.slice(1,subArray2.length);

        return(
            <div>
                <div className='show-data'>
                    <h3 className='show-data-header'>Available Subjects</h3>
                </div>
                {/* <div className='show-list'>
                    <div>
                        {onlySubjects}
                    </div>
                </div> */}

                 <div className='show-list'>
                    <Form>
                        {onlySubjects2}
                    </Form>
                 </div>
            
            </div>
        )
    }
}


export default ShowSubjects;