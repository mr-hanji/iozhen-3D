import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function Team({ standardYforObjects }) {
  const roohi = useGLTF("/objects/RoohiPic.glb");
  const seifi = useGLTF("/objects/SeifiPic.glb");
  const hanji = useGLTF("/objects/HanjiPic.glb");
  return (
    <>
      <primitive
        object={roohi.scene}
        scale={0.75}
        position={[8.5, standardYforObjects + 3, 13]}
        rotation-y={-Math.PI / 2}
      />
      <primitive
        object={seifi.scene}
        scale={0.75}
        position={[8.5, standardYforObjects + 4.5, 9]}
        rotation-y={-Math.PI / 2}
      />
      <primitive
        object={hanji.scene}
        scale={0.75}
        position={[8.5, standardYforObjects + 3, 11.7]}
        rotation-y={-Math.PI / 2}
      />
    </>
  );
}

useGLTF.preload("/objects/RoohiPic.glb");
useGLTF.preload("/objects/SeifiPic.glb");
useGLTF.preload("/objects/HanjiPic.glb");
