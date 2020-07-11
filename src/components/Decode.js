import React, { Component } from 'react'
import rot13 from '../rot13'

export class Decode extends Component {
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
                <h1>Decode</h1>
                <p>Message</p>
                <textarea id = "input" onChange = {this.handleChange} value ={this.state.input.toUpperCase()} />
                <p>Decrypted Message</p>
                <span>{this.state.output}</span>
            </div>
        )
    }
}

export default Decode
