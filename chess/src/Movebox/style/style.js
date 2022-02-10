const movebox = {
    backgroundColor: '#00000038',
    flex: '3',
    order: '3'
  }

// const p1 = {
//   flex: '1'
// }

// const p2 = {
//   flex: '1'
// }

const tr = {
  border: 'solid',
  borderCollapse: 'collapse'
}

const table = {
  border: 'solid',
  borderCollapse: 'collapse',
  width: '100%'
}

const td = {
  border: 'solid',
  borderCollapse: 'collapse',
  width: '50%',
  height: '1em',
  padding: '5px'
}

const input = {
  border: '0',
  /* display: table-cell;
  vertical-align: bottom; */
}

const buttonInput = {
  normal: {
    // height: "20px",
    // fontSize: "30px",
    color: "#fff",
    padding: "5px 5px",
    backgroundColor: "rgb(20, 20, 18)",
    border: 'none',
    marginTop: "0px",
    margin: "15px",
    position: "relative center",
    // float: "right",

  },
  hover: {
    backgroundColor: "rgb(88, 88, 88)",
  },
}

const float = {
  right:  {
    float: "right"
  },
  left: {
    float: "left"
  }
}

export default movebox;

export {movebox, tr, td, table, input, buttonInput, float}