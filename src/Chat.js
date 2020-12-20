import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CradGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmoticonsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />

      <div className='chat__messages'>
          <Message />
          <Message />
          <Message />
      </div>
      <div className='chat__input'>
        <AddCircleIcon fontSize='large' />
        <form >
          <input placeholder={`Message #TESTCHANNEL`} />
          
          <button className='chat__inputButton' type='submit'>
            Send Message
          </button>
        </form>

        <div className='chat__inputIcons'>
          <CradGiftcardIcon fontSize='large' />
          <GifIcon fontSize='large' />
          <EmojiEmoticonsIcon fontSize='large' />
        </div>
      </div>
    </div>
  );
}

export default Chat;
