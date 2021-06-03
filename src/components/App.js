import React from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

const App =()=>{

      return(
        <div className="ui container" style={{marginTop: '10px'}}>
          Hello World - in App
          <SearchBar/>
          <ImageList/>
          </div>
        )
    }
   export default App;