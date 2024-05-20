import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function Chair() {
    const wall = useGLTF('/objects/Chair.glb')
  return (
    <>
        <Clone object={wall.scene} scale={2} position={[7 , 0 , -11]}   rotation-y={Math.PI / 2}/>
        <Clone object={wall.scene} scale={2} position={[-10 , 0 , -8]} rotation-y={Math.PI}/>
        <Clone object={wall.scene} scale={2} position={[-10 , 0 , 0]}  rotation-y={Math.PI}/>
        <Clone object={wall.scene} scale={2} position={[-10 , 0 , 7.5]}  rotation-y={Math.PI}/>
    </>
  )
}

useGLTF.preload('/objects/Chair.glb')

