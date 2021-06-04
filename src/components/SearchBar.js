import React from 'react';

class SearchBar extends React.Component{

    state = {term: ''};

    onFormSubmit(event){
        event.preventDefault();
        console.log(this.state.term)
    }

render(){
    return <div className="ui segment">
        Search Bar
        <br></br>
        <form className="ui form" onSubmit={(event)=>this.onFormSubmit(event)}>
        <input type='text' className="field" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}></input>
        <button > Submit </button>
        </form>
    </div>
}
}

export default SearchBar;