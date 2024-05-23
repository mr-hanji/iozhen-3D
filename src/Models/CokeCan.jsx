import React from "react";
import { Clone, useGLTF } from "@react-three/drei";

export default function CokeCan({ officeWidth, officeLength }) {
  const cokeCan = useGLTF("/objects/CokeCan.glb");
  return (
    <>
      <Clone
        object={cokeCan.scene}
        scale={2}
        position={[officeWidth / 2 - 6.5, 1.1, officeLength / 2 - 6]}
        rotation-y={Math.PI}
      />
      <Clone
        object={cokeCan.scene}
        scale={2}
        position={[-7.5, 2.3, -10]}
        rotation-y={Math.PI}
      />
    </>
  );
}

useGLTF.preload("/objects/CokeCan.glb");
