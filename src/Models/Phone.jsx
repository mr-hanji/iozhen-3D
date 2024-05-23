import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function Phone({ officeWidth, officeLength }) {
  const phone = useGLTF("/objects/phone.glb");
  return (
    <>
      <primitive
        object={phone.scene}
        scale={0.1}
        position={[officeWidth / 2 - 8, 1.2, officeLength / 2 - 7]}
      />
    </>
  );
}

useGLTF.preload("/objects/phone.glb");
