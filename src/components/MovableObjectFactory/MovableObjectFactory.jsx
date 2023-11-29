import React, { useContext } from "react";
import { SceneContext } from "../Scene/SceneContext";

const MovableObjectFactory = (props) => {
  const { ComponentToCreate } = props;
  const sceneContextValue = useContext(SceneContext);

  return (
    <div>
      {ComponentToCreate != null ? (
        <div
          className="factory__disabledComponent"
          onClick={() => sceneContextValue.addObjectToScene(ComponentToCreate)}
        >
          {React.cloneElement(ComponentToCreate, { disabled: true })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MovableObjectFactory;
