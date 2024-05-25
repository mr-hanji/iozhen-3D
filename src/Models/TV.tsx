import React, { useState } from "react";
import { useGLTF, Clone, Html } from "@react-three/drei";

export default function TV({ standardYforObjects, officeWidth }) {
  const tv = useGLTF("/objects/TV.glb");
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/public/video1.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });
  return (
    <>
      <primitive
        object={tv.scene}
        scale={2}
        position={[officeWidth / 2 - 0.2, standardYforObjects, 0]}
        rotation-y={Math.PI}
      >
        <mesh rotation-y={Math.PI / 2}>
          <planeGeometry args={[2.5, 1.5]} />
          <meshStandardMaterial>
            <videoTexture attach="map" args={[video]} />
          </meshStandardMaterial>
        </mesh>
      </primitive>
    </>
  );
}

useGLTF.preload("/objects/TV.glb");
