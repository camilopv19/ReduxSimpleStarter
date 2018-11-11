import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_key = 'AIzaSyB_RYsPaaTJA5gu0PsIsUiyoINtcCnY40k';



class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_key, term: 'queen I want to break free' }, (videos) => {
            this.setState({ videos });
            console.log(this.state.videos);
        })
    }

    render() {
        return (
        <div>
            <br/>
            <SearchBar/>
            <VideoDetail video={this.state.videos[0]}/>    
            <VideoList videos={this.state.videos} />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));