import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function Headphones({ tableHeight }) {
  const headphones = useGLTF("/objects/Headphones.drc");
  return (
    <>
      <primitive
        object={headphones.scene}
        scale={2}
        position={[-7.5, tableHeight, 10]}
        rotation-y={Math.PI}
      />
    </>
  );
}

useGLTF.preload("/objects/Headphones.drc");
