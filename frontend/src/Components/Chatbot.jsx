import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import './Chatbot.css'
import Axiosinstance from './Axiosinstance';

const Chatbot = () => {
    const [value, setvalue] = useState('');
    function handlesubmit(e) {
        e.preventDefault();
        console.log(value)

    Axiosinstance.post('chat/', {
        'name':value
    })
        
    }
    function handleValue(e) {
        setvalue(e.target.value);
    }
    return (
        <div className='Chatbot'>
            <Popup trigger={<button className='cbicon'>click</button>} modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='chatmain'>
                                <button onClick={() => close()} className='close'>x</button>
                                <div className='chat-border'>
                                    <div>

                                    </div>
                                    <form className='chat' onSubmit={handlesubmit}>
                                        <input type='text' className='chat-input' placeholder='Type Something' onChange={handleValue} ></input>
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












