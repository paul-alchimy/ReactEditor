import Header from "../../components/Header/Header";
import ObjectBar from "../../components/ObjectBar/ObjectBar";
import { SceneProvider } from "../../components/Scene/SceneContext";
import Scene from "../../components/Scene/Scene";
import "./Editor.css";

const Editor = () => {
  return (
    <div className={"container bg-dark editor__container"}>
      <Header />
      <SceneProvider>
        <Scene />
        <ObjectBar />
      </SceneProvider>
    </div>
  );
};

export default Editor;
