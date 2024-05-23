import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function PenHolder({ tableHeight }) {
  const penHolder = useGLTF("/objects/PenHolder.glb");
  return (
    <>
      <primitive
        object={penHolder.scene}
        scale={2}
        position={[-7.5, tableHeight, -6]}
        rotation-y={Math.PI / 3}
      />
    </>
  );
}

useGLTF.preload("/objects/PenHolder.glb");
