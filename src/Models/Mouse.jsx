import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function Mouse({tableHeight}) {
    const mouse = useGLTF('/objects/Mouse.glb')
  return (
    <>
        <Clone object={mouse.scene} scale={2} position={[6, tableHeight , -10]}   rotation-y={Math.PI / 2}/>
        <Clone object={mouse.scene} scale={2} position={[-8.5 , tableHeight , -6]} rotation-y={Math.PI}/>
        <Clone object={mouse.scene} scale={2} position={[-8.5 , tableHeight , 2]}  rotation-y={Math.PI}/>
        <Clone object={mouse.scene} scale={2} position={[-8.5, tableHeight , 10]}  rotation-y={Math.PI}/>
    </>
  )
}

useGLTF.preload('/objects/Mouse.glb')

