import { Button,Avatar } from '@material-ui/core';
import React from 'react'
import './TweetBox.css';

function TweetBox() {
    return (
        <div className='tweetBox' >
            <form>
                <div className='tweetBox__input' >
                    <Avatar src=''/>
                    <input placeholder="What's happening?"  />
                </div>
                <input className = 'tweetBox__imageInput' placeholder='Enter image URL' />
                <Button className = 'tweetBox__tweetButton' >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
