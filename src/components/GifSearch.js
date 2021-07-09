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
        // console.log(this.props)
        // console.log("hello")
        return (
            <div>
                <form onSubmit= { event => this.props.handleSubmit(event, this.state.userInput)}>
                    <input type="text" value={this.state.userInput} onChange = {event => this.handleChange(event)} />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}