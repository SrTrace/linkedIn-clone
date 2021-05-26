import React, {useEffect, useState} from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import Post from "./Post";
import {db} from "./firebase";
import firebase from "firebase";

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
    }, []);

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Serg Levashov',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            type="text"/>
                        <button
                            type="submit"
                            onClick={sendPost}
                        >
                            Sent
                        </button>
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
            {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    );
}

export default Feed;