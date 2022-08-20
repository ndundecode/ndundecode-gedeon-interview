import React, { useState } from "react";
import { label1 } from "../config/app.label";
import "./ButtonColor.css";

const ButtonColor = (props) => {
  const { color } = props;
  const [colorCount, setColorCount] = useState(0);
  const [rotate, setRotate] = useState(false);

  return (
    <div className="_color_app">
      <header className="_header">
        <p
          className={`${rotate && "_color-block"}`}
          style={{
            width: 150,
            height: 150,
            backgroundColor: color[colorCount].value,
            borderRadius: "15px",
          }}
        >
          {color[colorCount].name}
        </p>
        <button
          className="change_button"
          onClick={() =>
            setColorCount(colorCount < color.length - 1 ? colorCount + 1 : 0)
          }
        >
          {label1.btnName}
        </button>
        <button onClick={() => setRotate(!rotate)} className="rotate_button">
          {rotate ? label1.stopRotateBtn : label1.rotateBtn}
        </button>
      </header>
    </div>
  );
};

export default ButtonColor;
