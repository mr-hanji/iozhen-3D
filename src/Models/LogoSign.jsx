import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function LogoSign({ standardYforObjects , officeWidth}) {
    const logoSign = useGLTF('/objects/LogoSign.glb')
  return (
    <>
        <primitive object={logoSign.scene}  scale={2} position={[officeWidth / 2 - 0.2 , standardYforObjects + 2 ,-8]} rotation-y={Math.PI} />
    </>
  )
}

useGLTF.preload('/objects/LogoSign.glb')