import React from 'react';

class SearchBar extends React.Component{

    onInputChange(event){
        console.log(event.target.value)
    }

render(){
    return <div className="ui segment">
        Search Bar
        <br></br>
        <form className="ui form">
        <input type='text' className="field" onChange={this.onInputChange}></input>
        <button > Submit </button>
        </form>
    </div>
}
}

export default SearchBar;