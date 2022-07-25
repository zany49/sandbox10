import React from "react";
import { Image } from "react-bootstrap";
// import dad from './dad.png'

class Login2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Mom : '',
            Dad : '',
            Adi : ''

        }
    }
    render(){
        return(
        <div className='dad'>
           <img src={process.env.PUBLIC_URL + "/images/dad.png"}></img>
           {/* <img src='public/dad.png'></img> */}
        </div>
        )    
}

}

export default Login2;