import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from '../../firebase';

const TweetBox = ({ avatar, }) => {
  const [tweetMessage, setTweetMessage]= useState("");
  const [tweetImage, setTweetImage]= useState("");
  
  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Tony Pizza',
      username: 'cleverqazi',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://www.google.com/search?q=avatar+image&rlz=1C5CHFA_enUS948US948&sxsrf=AOaemvJoQYdAhE69fvFccDxhDZtdXnMc-Q:1632450090075&tbm=isch&source=iu&ictx=1&fir=BrXIyKK93MqxCM%252CIN--qpeX1hje-M%252C_&vet=1&usg=AI4_-kQnOO902loELdDkm7U4uZvLaCBXiw&sa=X&sqi=2&ved=2ahUKEwixre29xpbzAhUDr5UCHTahCoMQ9QF6BAgREAE#imgrc=BrXIyKK93MqxCM"
    });

    setTweetMessage("");
    setTweetImage("");
    
  }
  
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://www.google.com/search?q=avatar+image&rlz=1C5CHFA_enUS948US948&sxsrf=AOaemvIBbPSRPTmaZ8ZNqBfZ3M5vCjxWyg:1632450517759&tbm=isch&source=iu&ictx=1&fir=Jjq5a5o5G80fpM%252CIN--qpeX1hje-M%252C_&vet=1&usg=AI4_-kSIdY9vHHcZhoKm-br_gN32Ibfxow&sa=X&sqi=2&ved=2ahUKEwiHnuWJyJbzAhWjqZUCHVGBCSYQ9QF6BAgGEAE#imgrc=Jjq5a5o5G80fpM" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            placeholder="What's happening?"
            type="text" 
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL" 
          type="text" 
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox;