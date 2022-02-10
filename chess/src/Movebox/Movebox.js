import React, { useState } from "react";
import * as style from "./style/style.js";

const Movebox = () => {

  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)

  return (
    <>
      <div style={style.movebox}>
        <table style={style.table}>
          <tr style={style.tr}>
            <td style={style.td}>a</td>
            <td style={style.td}>b</td>
          </tr>
          <tr style={style.tr}>
            <td style={style.td}>c</td>
            <td style={style.td}>d</td>
          </tr>
        </table>
        <div style={style.input}>
          <input
            type="submit"
            value="Offer Draw"
            onMouseEnter={() => {
              setHover1(true);
            }}
            onMouseLeave={() => {
              setHover1(false);
            }}
            style={{
              ...style.buttonInput.normal,
              ...(hover1 ? style.buttonInput.hover : null),
              ...style.float.left              
            }}
          />
          <input
            type="submit"
            value="Resign"
            onMouseEnter={() => {
              setHover2(true);
            }}
            onMouseLeave={() => {
              setHover2(false);
            }}
            style={{
              ...style.buttonInput.normal,
              ...(hover2 ? style.buttonInput.hover : null),
              ...style.float.right
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Movebox;
