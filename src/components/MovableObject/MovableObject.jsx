// REACT
import { useState } from "react";
// CSS
import "./MovableObject.css";
// DEPENDENCIES
import Draggable from "react-draggable";

/**
 *
 */
const MovableObject = (props) => {
  const { color = "red", height = 50, width = 50 } = props;

  return (
    <Draggable>
      <div
        className="movableObject"
        onClick={() => {}}
        style={{
          position: "absolute",
          height,
          width,
          backgroundColor: color,
        }}
      ></div>
    </Draggable>
  );
};

export default MovableObject;
