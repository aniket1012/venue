import React from 'react';
import './resources/styles.css'
import Header from './Components/header_footer/Header'

import Featured from './Components/featured'
import VenueNfo from './Components/venueNfo'
import Highlights from './Components/highlights'

class App extends React.Component {
  

  render() {
    return (
    <div className="App" style={{height: "1500px", background:'red'}}>
      <Header/>
      <Featured/>
      <VenueNfo/>
      <Highlights/>
    </div>
    )
  }
}

export default App;
 