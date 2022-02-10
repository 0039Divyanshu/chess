import React, { useState } from "react";
import * as style from "./style/style.js";

const Chatbox = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div style={style.chatbox}>
        <h1>Chat</h1>
        <div style={style.chat}>
          <p style={style.player1}>
            <b>Player 1: </b> Lorem duis mollit sunt minim est consectetur
            voluptate est.
          </p>
          <hr style={style.hr} />
          <p style={style.player2}>
            <b>Player 2: </b> Aute minim proident officia Lorem exercitation
            aliquip aute ad amet tempor.
          </p>
          <hr style={style.hr} />
        </div>
        <div style={style.input}>
          <input type="text" style={{height: '20px'}} />
          <input
            type="submit"
            value="Send"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            style={{
              ...style.chatInput.normal,
              ...(hover ? style.chatInput.hover : null),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Chatbox;
