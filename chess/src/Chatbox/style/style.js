const chatbox = {
  backgroundColor: '#00000038',
  flex: '2',
  order: '1',
  alignContent: 'flex-start',
}

const hr = {
  border: '0.1px solid',
}
const player1 = {
  color: 'rgb(0, 0, 179)',
}

const player2 = {
  color: 'rgb(179, 0, 0)',
}

const input = {
  border: '0',
  /* display: table-cell;
  vertical-align: bottom; */
}

const chat = {
  border: '0',
  height: '550px',
}

const chatInput = {
  normal: {
    // height: "20px",
    // fontSize: "30px",
    color: "#fff",
    padding: "5px 5px",
    backgroundColor: "rgb(20, 20, 18)",
    border: "none",
    marginTop: "0px",
    position: "relative center",
    float: "right",
  },
  hover: {
    backgroundColor: "rgb(88, 88, 88)",
  },
}

export default chatbox

export {chatbox, hr, player1, player2, input, chat, chatInput}