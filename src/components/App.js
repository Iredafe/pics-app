import React from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component{

  onSearchSubmit(term){
    console.log(term);
  }
  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        Hello World - in App
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList/>
        </div>
      )
  }
  }
    
   export default App;