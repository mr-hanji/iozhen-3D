import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function RoundTableWithCards({ officeWidth }) {
    const roundTableWithCards = useGLTF('/objects/RoundTableWithCards.glb')
  return (
    <>
        <primitive object={roundTableWithCards.scene}  scale={2} position={[officeWidth / 2 - 9 , 2.8, 0]} rotation-y={Math.PI / 4} />
    </>
  )
}

useGLTF.preload('/objects/RoundTableWithCards.glb')