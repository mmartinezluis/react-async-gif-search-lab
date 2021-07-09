import React from 'react'

export default class GifSearch extends React.Component {
    constructor(){
        super()
        this.state = {
            userInput: ""
        }
    }

    handleChange = (event )=> {
        let input = event.target.value
        this.setState({
            userInput: input
        })
    }


    render(){
        return (
            <form onSubmit= {this.props.handleSubmit()}>
                <input type="text" value={this.state.userInput} onChange = {event => this.handleChange(event)} />
            </form>
        )
    }
}