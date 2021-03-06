import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
// import {TwitterTweetEmbed, TwitterShareButton, TwitterTimelineEmbed} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className='widgets' >
            <div className='widgets__input' >
            <SearchIcon className = 'widgets__searchIcon' />
            <input placeholder='Search Twitter' />
            </div>
            <div className='widgets__widgetContainer' >
                <h2>What's happening</h2>
                {/* <TwitterTweetEmbed tweetId = {'858551177860055040'} /> */}
                
            </div>
        </div>
    )
}

export default Widgets
