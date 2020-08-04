import React,{Component} from 'react';
import {Alert} from 'react-bootstrap';
class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount(){
        console.log("entrou");
        this.timerID = setInterval(
            () => this.tick()
            ,1000
        );
    }

    componentWillUnmount(){
        console.log("saiu")
        clearInterval(this.timerID);
    }
    
    tick(){
        this.setState({date : new Date()});
    }


    render(){
        return(
            <div className="container">
                <Alert variant="warning">About</Alert>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default About;
