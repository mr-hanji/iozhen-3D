import React, { useEffect } from "react";
import { useGLTF, Clone } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useDispatch, useSelector } from "react-redux";
import { setIsClicked, setReset } from "../redux/slices/ClickSlice";

export default function OfficeTable({ tableHeight }) {
  const isClicked = useSelector((state) => state.isClicked.isClicked);
  const reset = useSelector((state) => state.isClicked.reset);
  const { camera } = useThree();
  const dispatch = useDispatch();
  const table = useGLTF("/objects/OfficeTable.glb");

  useFrame((state) => {
    if (isClicked && !reset) {
      state.camera.lookAt(8, tableHeight + 0.5, -8);
      state.camera.position.set(8.28, 3.6, -12.5);
    }
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        dispatch(setReset(true));
        dispatch(setIsClicked(false));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  useEffect(() => {
    if (reset) {
      camera.position.set(0, 0, 5); // Default position
      camera.lookAt(0, 0, 0); // Default target
      camera.updateProjectionMatrix();
    }
  }, [reset, camera]);

  const eventHandler = (event) => {
    if (!isClicked) {
      table.scene.traverse((child) => {
        if (child.isMesh) {
          dispatch(setIsClicked(true));
          camera.lookAt(8, tableHeight + 0.5, -8);
          camera.position.set(8.28, 3.6, -12.5);
        }
      });
    }
  };

  return (
    <>
      <Clone
        object={table.scene}
        scale={2}
        position={[8, 0, -9]}
        rotation-y={Math.PI / 2}
        onClick={eventHandler}
      />
      <Clone
        object={table.scene}
        scale={2}
        position={[-8, 0, -8]}
        rotation-y={Math.PI}
      />
      <Clone
        object={table.scene}
        scale={2}
        position={[-8, 0, 0]}
        rotation-y={Math.PI}
      />
      <Clone
        object={table.scene}
        scale={2}
        position={[-8, 0, 8]}
        rotation-y={Math.PI}
      />
    </>
  );
}

useGLTF.preload("/objects/OfficeTable.glb");
