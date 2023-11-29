import React, { useContext } from "react";
import { SceneContext } from "./SceneContext";

const Scene = () => {
  const sceneContext = useContext(SceneContext);

  return (
    <div className="scene">
      {Object.entries(sceneContext.gameObjectsList).map(
        ([key, value]) => value
      )}
    </div>
  );
};

export default Scene;
