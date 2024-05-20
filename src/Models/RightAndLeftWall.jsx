import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function RightAndLeftWall({officeWidth , standardYforObjects}) {
    const wall = useGLTF('/objects/Wall.glb')
  return (
    <>
        <Clone object={wall.scene} scale={2} position-y={standardYforObjects} position-x={officeWidth / 2} />
        <Clone object={wall.scene} scale={2} position-y={standardYforObjects} position-x={- officeWidth / 2}/>
    </>
  )
}

useGLTF.preload('/objects/Wall.glb')

