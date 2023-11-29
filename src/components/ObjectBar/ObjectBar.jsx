import MovableObject from "../MovableObject/MovableObject";
import MovableObjectFactory from "../MovableObjectFactory/MovableObjectFactory";
import ReactSvg from "../../assets/react.svg";
import "./ObjectBar.css";

const ObjectBar = () => {
  return (
    <div className="objectBar__container bg-secondary">
      <MovableObjectFactory ComponentToCreate={<MovableObject />} />
      <MovableObjectFactory
        ComponentToCreate={
          <MovableObject>
            <img draggable={false} src={ReactSvg} />
          </MovableObject>
        }
      />
      <MovableObjectFactory
        ComponentToCreate={<MovableObject color="blue" />}
      />
    </div>
  );
};

export default ObjectBar;
