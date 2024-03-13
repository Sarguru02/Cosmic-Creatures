import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import './Chatbot.css'
import chat from '../../utils/chat';

const Chatbot = () => {
    const [value, setvalue] = useState('');
    const [messages, setMessages] = useState([{ message: "Hi, I am Phoenix - An Eco friendly Chatbot. How can I help you?", type: "bot" }]);

    async function handlesubmit(e) {
        e.preventDefault();
        setMessages(prev => [...prev, { message: value, type: 'user' }, { message: '...', type: 'bot' }]);
        console.log(messages)
        const reply = await chat(value);
        setMessages(prev => [...prev.filter(msg => msg.message !== "..."), { message: reply, type: 'bot' }]);
    }


    return (
        <div className='Chatbot'>
            <Popup trigger={<button className='cbicon'>
                Chat
            </button>} modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='chatmain'>
                                <button onClick={() => close()} className='close'>x</button>
                                <div className='chat-border'>
                                    <div className='message-holder'>
                                        {
                                            messages.map((msg, index) => {
                                                return (
                                                    <div key={index} className={msg.type}>
                                                        {msg.message}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <form className='chat' onSubmit={handlesubmit}>
                                        <input type='text' className='chat-input' placeholder='Type Something' onChange={(e) => setvalue(e.target.value)} ></input>
                                        <button className='chat-submit' type='submit' >Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
}

export default Chatbot
