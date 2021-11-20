import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar';
import FormPage from './components/FormPage';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <Navbar/>
        <FormPage/>

        
      </div>
    )
  }
}

export default App;