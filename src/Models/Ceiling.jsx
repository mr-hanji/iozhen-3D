import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function Ceiling({ standardYforObjects, officeHeight }) {
  const ceiling = useGLTF("/objects/Ceiling.glb");
  return (
    <>
      <primitive
        object={ceiling.scene}
        scale={2}
        position={[0, standardYforObjects + officeHeight + 3, 1]}
        rotation-y={Math.PI}
      />
    </>
  );
}

useGLTF.preload("/objects/Ceiling.glb");
