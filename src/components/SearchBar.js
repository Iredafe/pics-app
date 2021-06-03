import React from 'react';

class SearchBar extends React.Component{

render(){
    return <div className="ui segment">
        Search Bar
        <br></br>
        <form className="ui form">
        <input type='text' className="field"></input>
        <button > Submit</button>
        </form>
    </div>
}
}

export default SearchBar;