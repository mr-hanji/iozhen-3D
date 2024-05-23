import React from "react";
import { useGLTF, Clone, Html } from "@react-three/drei";

export default function TV({ standardYforObjects, officeWidth }) {
  const tv = useGLTF("/objects/TV.glb");
  return (
    <>
      <primitive
        object={tv.scene}
        scale={2}
        position={[officeWidth / 2 - 0.2, standardYforObjects, 0]}
        rotation-y={Math.PI}
      >
        <Html
          rotation-y={3.14 / 2}
          transform
          wrapperClass="htmlScreen"
          distanceFactor={0.42}
          position={[0.05, 0, -0.01]} // Adjusted the position to align with the TV screen
        >
          <div className="video">
            <video playsInline loop autoPlay src="/video1.mp4" muted></video>
          </div>
        </Html>
      </primitive>
    </>
  );
}

useGLTF.preload("/objects/TV.glb");
