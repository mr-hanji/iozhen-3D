import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function NeonSign({ officeWidth , standardYforObjects }) {
    const neonSign = useGLTF('/objects/NeonSign.glb')
  return (
    <>
        <primitive object={neonSign.scene}  scale={2} position={[-officeWidth / 2 + 0.2 , standardYforObjects + 2, 0]} rotation-y={Math.PI} />
    </>
  )
}

useGLTF.preload('/objects/NeonSign.glb')