import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function OfficeTable() {
    const wall = useGLTF('/objects/OfficeTable.glb')
  return (
    <>
        <Clone object={wall.scene} scale={2} position={[8 , 0 , -9]}   rotation-y={Math.PI / 2}/>
        <Clone object={wall.scene} scale={2} position={[-8 , 0 , -8]} rotation-y={Math.PI}/>
        <Clone object={wall.scene} scale={2} position={[-8 , 0 , 0]}  rotation-y={Math.PI}/>
        <Clone object={wall.scene} scale={2} position={[-8 , 0 , 8]}  rotation-y={Math.PI}/>
    </>
  )
}

useGLTF.preload('/objects/OfficeTable.glb')

