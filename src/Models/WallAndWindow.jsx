import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function WallAndWindow({ standardYforObjects , officeLength}) {
    const wall = useGLTF('/objects/WallAndWindow.glb')
  return (
    <>
        <primitive object={wall.scene}  scale={2} position={[0 , standardYforObjects , -officeLength / 2]} rotation-y={Math.PI} />
    </>
  )
}

useGLTF.preload('/objects/WallAndWindow.glb')