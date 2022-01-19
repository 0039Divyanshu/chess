import {useState, useEffect} from 'react';
import { io } from "socket.io-client";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import ModaleButton from "./modalButton";
let socket = io.connect("http://localhost:5000");



const ListOfMovesTable = (props) => {

  const {
    auth,
    setAuth,
    backendResponse,
    updateBackendResponse,
    userName,
    updateUserName,
    obj,
    updateObj,
  } = props;
  const [move, updateMove] = useState('');
  const [listOfMoves, updateListOfMoves] = useState([]);
  const [isloading, updateLoadingState] = useState(true);
  useEffect(() => {
    if (props.length !== 0) {
      updateLoadingState(false);
    }
  });

  
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

  const responseGoogle = async (response) => {
    try{
      setAuth(false);
      console.log(auth);
      console.log(response)
    }catch(err){console.log(err)}
    
  }

  if (isloading) return <img alt="loader" src="../img/Snooker.gif"></img>;
  else {
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

      {/* <ModaleButton /> */}

    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={responseGoogle}
    />
    {listOfMoves.map((payload,index)=>{
      return(<h1 key={index}>{index+": " +payload.move}</h1>);
    })}
</>
  );
  }
};

export default ListOfMovesTable;
