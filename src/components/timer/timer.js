import React from "react";
import Show from "./show";

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
   
    }

    

   changeTime = () =>{
    this.setState({
        date: new Date()
    })
   }

   

    render(){
        return(
            <Show hours={this.state.date.getHours()} minutes={this.state.date.getMinutes()} seconds={this.state.date.getSeconds()}/>
            
        );

        
    }

    componentDidMount(){
        setInterval(this.changeTime,1000)
       }

    

}

export default Timer;