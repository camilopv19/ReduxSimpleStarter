import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_key = 'AIzaSyB_RYsPaaTJA5gu0PsIsUiyoINtcCnY40k';

YTSearch({ key: API_key, term: 'Anis cheurfa' }, function (data) {
    console.log(data);
})

//Create a new component which produces HTML code
const App = function(){ //CLASS: "App"
    return (
    <div>
        <br/>
        <SearchBar/>
    </div>
    );
}

//Takes the component's generated HTML and
//puts it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //Self enclosing Tag for an INSTANCES of the CLASS/Component "App"