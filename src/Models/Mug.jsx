import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function Mug({ tableHeight }) {
  const mug = useGLTF("/objects/Mug.glb");
  return (
    <>
      <primitive
        object={mug.scene}
        scale={2}
        position={[-7.5, tableHeight, 2]}
        rotation-y={Math.PI / 3}
      />
    </>
  );
}

useGLTF.preload("/objects/Mug.glb");
