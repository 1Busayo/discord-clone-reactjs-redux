import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CradGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmoticonsIcon from '@material-ui/icons/EmojiEmotions'

function Chat() {
    return (
        <div className="chat">
           
            <ChatHeader />


<div className="chat__messages">

</div>
<div className="chat__input">
    <AddCircleIcon fontSize="large" />
    <form action="">

        <input placeholder="{`Message #TESTCHANNEL}" type="text"/>
        <button className="chat__inputButton" type="submit">
            Send Message
        </button>
    </form>

<div className="chat__inputIcons">
                   <CradGiftcardIcon fontSize='large' />
                    <GifIcon fontSize='large' />
                    <EmojiEmoticonsIcon fontSize='large' />
</div>

</div>
        </div>
    )
}

export default Chat
