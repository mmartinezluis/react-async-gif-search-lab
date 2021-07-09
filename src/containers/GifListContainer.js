import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifList.js'

export default class GifListContainer extends React.Component{
    state = {
     component: []          
    }

    componentDidMount(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=76ieZZ1srp8NC8B06losXXREGIQK6iaF&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            // debugger
            this.setState({
                component: data.data.slice(0,3).map(object => object.images.original.url)
            })
        })
    }

    handleSubmit= (event) => {
        event.preventDefault()
        this.componentDidCatch()
    }

    render(){
        console.log(this.state.component)
        return (
            <div>
                <GifList images = {this.state.component} />
                
                <GifSearch handleSubmit= {this.handleSubmit} />
            </div>
        )
    }



}