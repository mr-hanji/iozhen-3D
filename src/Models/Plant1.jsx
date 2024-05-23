import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function Plant1({ officeWidth }) {
  const Plant = useGLTF("/objects/Plant1.glb");
  return (
    <>
      <primitive
        object={Plant.scene}
        scale={2}
        position={[officeWidth / 2 - 2, 0, 5.5]}
        rotation-y={Math.PI / 4}
      />
    </>
  );
}

useGLTF.preload("/objects/Plant1.glb");
