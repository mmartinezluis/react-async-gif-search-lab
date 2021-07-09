import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends React.Component{
    state = {
     gifs: []          
    }

    componentDidMount(query = 'dolphin'){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=76ieZZ1srp8NC8B06losXXREGIQK6iaF&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: data.data.slice(0,5).map(object => object.images.original.url)
            })
        })
    }

    handleSubmit= (event, input) => {
        event.preventDefault()
        this.componentDidMount(input)
    }

    render(){
        return (
            <div>
                <GifSearch handleSubmit= {this.handleSubmit} />
                <GifList images = {this.state.gifs} />
            </div>
        )
    }
}