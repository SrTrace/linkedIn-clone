import React from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
                        <button type="submit">Sent</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                   <InputOption
                        Icon={ImageIcon}
                        title="Photo"
                        color="#70b5f9"
                   />
                   <InputOption
                        Icon={SubscriptionsIcon}
                        title="video"
                        color="#e7a33e"
                   />
                   <InputOption
                        Icon={EventNoteIcon}
                        title="Event"
                        color="#c0cbcd"
                   />
                   <InputOption
                        Icon={CalendarViewDayIcon}
                        title="Write article"
                        color="#7fc15e"
                   />
                </div>
            </div>

           <Post
                name="Serg Levashov"
                description="This is a test"
                message="Wow this worked"

           />

        </div>
    );
}

export default Feed;