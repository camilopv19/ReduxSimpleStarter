import React, { Component } from 'react';
// Line 1 replaces this line:
// const Component from React.Component

// ---- Functional compontent: A component that is a "pure function"
// const SearchBar = () =>{
//     return <input />
// };

// class SearchBar extends React.Component {  //replaced by Line 1 syntax
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '666'};
    }

    // ALL CLASSES (that extends React.Component) must have a render() function that returns JSX code, ALWAYS
    render(){
        // return <input onChange={this.onInputChange} />;
        // return <input onChange={ (event) => console.log(event.target.value) } />;
        return (
            <div>
                <input 
                    value = {this.state.term}
                    onChange={(event) => {
                        var txt = event.target.value;
                        this.setState({ term: txt });
                        console.log(txt);
                        }
                } />
                
            </div>
        );
    }
    /*
    onInputChange(event){
        console.log(event.target.value);
    }*/
}

export default SearchBar;