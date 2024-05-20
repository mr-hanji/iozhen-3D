import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function TV({ standardYforObjects, officeWidth }) {
  const tv = useGLTF("/objects/TV.glb");
  return (
    <>
      <primitive
        object={tv.scene}
        scale={2}
        position={[officeWidth / 2 - 0.2, standardYforObjects, 0]}
        rotation-y={Math.PI}
      />
    </>
  );
}

useGLTF.preload("/objects/TV.glb");
