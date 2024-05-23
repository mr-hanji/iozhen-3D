import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import * as THREE from "three";
import { Leva } from "leva";
import { Provider } from "react-redux";
import { store } from "./redux/store";


// const created = (state) => {
//   // state.gl.setClearColor("#ff0000" , 1) //for add bg to webGl
//   // state.scene.background = new THREE.Color('#ff0000') //for add bg to scene
// }
// onCreated={created}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Leva collapsed />
      <Canvas
        camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}
        gl={{
          antialias: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        flat
        shadows
      >
        {/* <color args={['#ff0000']} attach="background"/> */}
        <Experience />
      </Canvas>
    </Provider>
  </React.StrictMode>
);
