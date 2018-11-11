import React from 'react';


// const VideoListItem = (props) =>{
    // const video = props.video;  ////// is replaced by:
const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl}></img>
            </div>
            <div className="media-body">
                <div className="media-heading"><b>{title}</b></div>
            </div>
        </div>
        
        </li>
    );
}

export default VideoListItem;