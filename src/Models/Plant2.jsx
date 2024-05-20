import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function Plant2({ officeWidth , officeLength}) {
    const Plant = useGLTF('/objects/Plant2.glb')
  return (
    <>
        <primitive object={Plant.scene}  scale={2} position={[-officeWidth / 2 + 2 , 0 , -officeLength / 2 + 3.5]} rotation-y={Math.PI / 4} />
    </>
  )
}

useGLTF.preload('/objects/Plant2.glb')