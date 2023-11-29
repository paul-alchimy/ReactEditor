import React, { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const SceneContext = createContext();

export const SceneProvider = (props) => {
  ////
  //// STATES
  ////

  const [gameObjectsList, setGameObjectsList] = useState({});

  ////
  //// METHODS
  ////

  const addObjectToScene = (ObjectComponent) => {
    console.log("add", ObjectComponent);
    if (!React.isValidElement(ObjectComponent)) return;

    let gameObjectsListClone = { ...gameObjectsList };
    const objectId = nanoid();

    gameObjectsListClone[objectId] = React.cloneElement(ObjectComponent, {
      id: objectId,
    });

    setGameObjectsList(gameObjectsListClone);
  };

  /**
   * a Function to delete an object from SceneContext
   */
  const removeObjectFromId = (objectId) => {
    const isIdInList = Object.keys(gameObjectsList).includes(objectId);

    if (!isIdInList) return;

    let gameObjectsListClone = { ...gameObjectsList };
    delete gameObjectsListClone[objectId];

    setGameObjectsList(gameObjectsListClone);
  };

  return (
    <SceneContext.Provider
      value={{
        //STATES
        gameObjectsList: gameObjectsList,
        //METHODS
        addObjectToScene,
        removeObjectFromId,
      }}
    >
      <>{props.children}</>
    </SceneContext.Provider>
  );
};
