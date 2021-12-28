import {useState, useEffect} from 'react';
import { io } from "socket.io-client";

let socket = io.connect("http://localhost:5000");



const ListOfMovesTable = () => {

  const [move, updateMove] = useState('');
  const [listOfMoves, updateListOfMoves] = useState([]);

  useEffect(() => {
    socket.on("EventOfMovesCommunication",(payload)=>{
      updateListOfMoves([...listOfMoves,payload]);
    });
    //This Function is recieving info packets from socket.io
  });

  const sendAMove = (event) =>{
    event.preventDefault();
    socket.emit("EventOfMovesCommunication", {move});
    updateMove('');
  }
  return (
    <>
    <form id="form" onSubmit={sendAMove}>
      <input 
      placeholder="Send a Move..."
      value={move} 
      onChange={(event)=>{
        updateMove(event.target.value);
      }}
       />
      <button type="submit">Send</button>
    </form>
    {listOfMoves.map((payload,index)=>{
      return(<h1 key={index}>{index+": " +payload.move}</h1>);
    })}
</>
  );
};

export default ListOfMovesTable;
