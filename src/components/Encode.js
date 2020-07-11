import React, { Component } from 'react'
import rot13 from '../rot13'

export class Encode extends Component {
    constructor (props){
        super(props)
        this.state = {
            input: '',
            output: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value,
            output: rot13(event.target.value)
        })
    }

    render() {
        return (
            <div>
                <h1>Encode</h1>
                <p>Message</p>
                <textarea id = "input" onChange = {this.handleChange} value ={this.state.input.toUpperCase()} />
                <p>Encrypted Message</p>
                <span>{this.state.output}</span>
            </div>
        )
    }
}

export default Encode