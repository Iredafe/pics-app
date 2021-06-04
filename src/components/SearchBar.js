import React from 'react';

class SearchBar extends React.Component{

    state = {term: ''};

render(){
    return <div className="ui segment">
        Search Bar
        <br></br>
        <form className="ui form">
        <input type='text' className="field" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}></input>
        <button > Submit </button>
        </form>
    </div>
}
}

export default SearchBar;