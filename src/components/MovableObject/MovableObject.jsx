// REACT
import { useState } from "react";
// CSS
import "./MovableObject.css";
// DEPENDENCIES
import Draggable from "react-draggable";
import { nanoid } from "nanoid";

/**
 *
 */
const MovableObject = (props) => {
  const { color = "red", height = 50, width = 50, ...otherProps } = props;

  const computedVoidStyle = {
    position: "absolute",
    height,
    width,
    backgroundColor: color,
  };
  return (
    <Draggable x={250} y={250} {...otherProps}>
      <div
        className="movableObject"
        onClick={() => {}}
        style={props.children != null ? null : computedVoidStyle}
      >
        <div className="movableObject__handle"></div>
        <div className="movableObject__content">{props.children}</div>
      </div>
    </Draggable>
  );
};

export default MovableObject;
