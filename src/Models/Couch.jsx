import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function Couch({officeLength, officeWidth }) {
    const couch = useGLTF('/objects/Couch.glb')
  return (
    <>
        <primitive object={couch.scene}  scale={2} position={[officeWidth / 2 , 0, officeLength / 2]} rotation-y={Math.PI} />
    </>
  )
}

useGLTF.preload('/objects/Couch.glb')