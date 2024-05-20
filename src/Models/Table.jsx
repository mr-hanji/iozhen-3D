import React from 'react'
import { useGLTF } from "@react-three/drei"

export default function Table({officeLength, officeWidth}) {
    const table = useGLTF('/objects/Table.glb')
  return (
    <primitive object={table.scene}  scale={2} position={[officeWidth / 2 - 7 , 0 , officeLength / 2 - 7]} />
  )
}

useGLTF.preload('/objects/Table.glb')
