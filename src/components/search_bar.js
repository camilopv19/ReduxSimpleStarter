import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ''};
    }

    // ALL CLASSES (that extends React.Component) must have a render() function that returns JSX code, ALWAYS
    render(){
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange={(event) => { this.onInputChange(event.target.value)   }
                } />
                
            </div>
        );
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;