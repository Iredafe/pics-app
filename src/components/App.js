import React from 'react';
import axios from 'axios';
import ImageList from './ImageList';
import SearchBar from './SearchBar';


class App extends React.Component{

  state = {images:[]};

   onSearchSubmit= async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
    params:{query: term},  
    headers:{
          Authorization: 'Client-ID m7F9R-ap0OPqyyyw0JFPJc1sz_9trOtqX4Oq0Fo_Uv8'
          
      }
    });

    this.setState({images: response.data.results});
  }

  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found : {this.state.images.length} images
        <ImageList/>
        </div>
      )
  }
  }
    
   export default App;