import React, {Component} from 'react'
import './App.css';
import logo from './Amazon.png'
import logo1 from './watchBlack.png'
import logo2 from './watchRed.png'
import logo3 from './watchBlue.png'
import logo4 from './watchPurple.png'


class Description extends Component {
  state = {
    show: true
  }
  render() {
    if (this.state.show) {
      return (
        <div>
          <h1 id="name">{this.props.name}</h1>
          <p id="description">{this.props.description}</p>
        </div>
      )
    } else {
      <h1>There are not elements</h1>
    }

  }
}

class Options extends Component {
  state = {
    show: true
  }
  render() {
    if(this.state.show) {
      return (
        <div>
          <h3 id="color">{this.props.color}</h3>
          <h3 id="features">{this.props.features}</h3>
        </div>
      )
    }else {
      <h1>There are not elements</h1>
    }
  }
}

class Btnclick extends Component {
  state = {
    show: true
  }
// Test function button
btn = () => {
  //Put to do button
  this.setState({show: !this.state.show})
}

  render() {
    if(this.state.show) {
      return (
        <button id="btn" className="btn" onClick={this.btn}>{this.props.btn}</button>
      )
    } else {
      return <h1>
        There are not elements
        <button onClick={this.btn}>
          Go back
          </button>
      </h1>

    }
  }
}


class App extends Component {
  state = {

  }
  webAmazon = {
    logo: 'Amazon',
  }

render() {
  return (
    <div className="App">
    <header className="header">
    <div>
      <img src={logo} alt="logo" className="logo0"/>
    </div>
    </header>

    <body className="body">
      <div>
        <div>
        <Description name="FitBit 19 - The Smartest Watch" 
        description="Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor."/>
        </div>
        <br/>
        <div>
          <Options color="Select Color"/>
        <img src={logo1} alt="logo" className="logo1"/>
        <img src={logo2} alt="logo" className="logo2"/>
        <img src={logo3} alt="logo" className="logo3"/>
        <img src={logo4} alt="logo" className="logo4"/>
        </div>
        <div>
          <Options features="Features"/>
          <Btnclick btn="time"/>
          <Btnclick btn="Heart Rate"/>
          <br/>
          <Btnclick btn="Buy Now"/>
        </div>
      </div>
      <div className="imgWatch">
        <img src={logo1} alt="logo" className="logo11"/>
      </div>
    </body>

  </div>
  )
}
}

export default App