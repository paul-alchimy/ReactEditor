import { useState } from "react";
import "./MovableObject.css";

const MovableObject = (props) => {
  const { color = "red" } = props;

  const DEFAULT_HEIGHT_VALUE = 50;
  const DEFAULT_WIDTH_VALUE = 50;

  const [height, setHeight] = useState(DEFAULT_HEIGHT_VALUE);
  const [width, setWidth] = useState(DEFAULT_WIDTH_VALUE);
  const [coordinates, setCoordinates] = useState([
    screen.width / 2 - DEFAULT_WIDTH_VALUE,
    screen.height / 2 - DEFAULT_HEIGHT_VALUE,
  ]);

  // EVENT HANDLERS
  const onDragEnd = (event) => {
    console.log(event.clientX, event.clientY);
    setCoordinates([event.clientX, event.clientY]);
  };

  // TOOL FUNCTIONS

  return (
    <div
      className="movableObject"
      draggable="true"
      onDragEnd={onDragEnd}
      style={{
        position: "absolute",
        left: coordinates[0],
        top: coordinates[1],
        height,
        width,
        backgroundColor: color,
      }}
    ></div>
  );
};

export default MovableObject;
