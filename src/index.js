import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_key = 'AIzaSyB_RYsPaaTJA5gu0PsIsUiyoINtcCnY40k';



class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_key, term: 'Anis cheurfa' }, (videos) => {
            // this.setState({ videos: videos });  // Is replaced by the next line thanks to ES6:
            this.setState({ videos });
            console.log(this.state.videos);
            
        })
        
    }

    render() {
        
        return (
        <div>
            <br/>
            <SearchBar/>
            <VideoList videos={this.state.videos} />
                
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));