import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function WallAndDoor({ standardYforObjects , officeLength}) {
    const wall = useGLTF('/objects/WallAndDoor.glb')
  return (
    <>
        <primitive object={wall.scene}  scale={2} position={[0, standardYforObjects , officeLength / 2 + 0.35]} rotation-y={Math.PI / 2} />
    </>
  )
}

useGLTF.preload('/objects/WallAndDoor.glb')