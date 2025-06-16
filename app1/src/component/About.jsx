import { Component } from "react";
import './About.css'
import {Row,Col} from 'react-bootstrap'
import Service from './Ser'

class About extends Component {
    constructor(){
        super()
        this.state={name:'Santhosh'}
    }
    render() {
        return (
            <div>
                <h1>About {this.props.name}</h1>
                <h2>{this.state.name}</h2>
                 <button onClick={() => this.setState({ name: "Jana" })}> Click Button</button>
            </div>
        );
    }
}

About.defaultProps = { name: 'Default' };

export default About;