import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function Flag({officeLength, officeWidth  }) {
    const flag = useGLTF('/objects/Flag.glb')
  return (
    <>
        <primitive object={flag.scene}  scale={1.5} position={[officeWidth / 2 - 2, 0, -officeLength / 2 + 3]}  />
    </>
  )
}

useGLTF.preload('/objects/Flag.glb')