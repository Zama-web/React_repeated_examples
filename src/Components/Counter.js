import React from "react";
import './Counter.css';


function Counter({ done, all }) {
    
    const emojiList = ['đĄ', 'đ ', 'âšī¸', 'đ', 'đ', 'đ', 'đ', 'đ¤Ŗ', 'đ¤Ŗ']
    
    return (
        <div className="counter">
            <span> {done} </span> /
            <span> {all} </span>
            <span className="emoji"> {emojiList[done]} </span>
        </div>
    )
}

export default Counter;