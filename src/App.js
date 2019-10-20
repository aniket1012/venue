import React from 'react';
import './resources/styles.css'
import { Element } from 'react-scroll'

import Header from './Components/header_footer/Header'

import Featured from './Components/featured'
import VenueNfo from './Components/venueNfo'
import Highlights from './Components/highlights'
import Location from './Components/location'
import Footer from './Components/header_footer/Footer'

import Pricing from './Components/pricing'

class App extends React.Component {
  

  render() {
    return (
    <div className="App" style={{height: "1500px", background:'red'}}>
      <Header/>

      <Element name="featured">
        <Featured/>
      </Element>

      <Element name="venueNFO">
        <VenueNfo/>
      </Element>

      <Element name="highlights">
        <Highlights/>
      </Element>

      <Element name="pricing">
        <Pricing/>
      </Element>

      <Element name="location">
        <Location/>
      </Element>
      
      <Footer/>
    </div>
    )
  }
}

export default App;
 