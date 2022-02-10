import React from "react";
import Chatbox from "../Chatbox/Chatbox";
import Chessbox from "../Chessbox/Chessbox";
import Movebox from "../Movebox/Movebox";
import "./style/style.css";

const Container = () => {
  return (
    <>
      <div className="container">
        <Chatbox />
        <Chessbox />
        <Movebox />
      </div>
    </>
  );
};

export default Container;
