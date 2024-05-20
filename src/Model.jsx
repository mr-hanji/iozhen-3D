import React from 'react'
// import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
// import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader.js"
// import { useLoader } from '@react-three/fiber'
import { useGLTF , Clone } from '@react-three/drei'

useGLTF.preload('/hamburger-draco.glb')
function Model() {

    const model = useGLTF('/hamburger-draco.glb')

  return (
    // <primitive object={model.scene} scale={0.35} position-y={-1}/>
    <>
      <Clone object={model.scene} scale={0.35} position-y={-1} position-x={-4}/>
      <Clone object={model.scene} scale={0.35} position-y={-1} position-x={0}/>
      <Clone object={model.scene} scale={0.35} position-y={-1} position-x={4}/>
    </>
  )
}

export default Model