import React from 'react';
import './resources/styles.css'
import Header from './Components/header_footer/Header'


class App extends React.Component {
  

  render() {
    return (
    <div className="App" style={{height: "1900px", background:'red'}}>
      <Header/>
    </div>
    )
  }
}

export default App;
 