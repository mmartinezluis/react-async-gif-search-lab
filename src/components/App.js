import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 
// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=76ieZZ1srp8NC8B06losXXREGIQK6iaF&rating=g



const App = () => {
  return (
    <div>
    
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
        
    </div>
      
  )
}

export default App
