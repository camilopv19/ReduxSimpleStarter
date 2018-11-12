import _ from 'lodash';
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

        this.state = { 
            videos: [],
            selectedVideo: null
         };
        this.videoSearch('Dimmu Borgir');
    }
    
    videoSearch(term){
        YTSearch({ key: API_key, term: term }, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
            console.log(this.state.videos);
        })

    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
        return (
        <div>
            <h2>Natytube</h2>
            <br/>
            <SearchBar onSearchTermChange={ videoSearch } />
            <VideoDetail video={this.state.selectedVideo}/>    
            <VideoList 
                onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} 
            />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));