
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      heading:'This is a monster app demo for state change'
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          {this.state.heading}
        </p>
        <button onClick={()=>this.setState({heading:'State is changed now'})}>Click to Change</button>
        
      </header>
    </div>

  )
  }
}


export default App;
