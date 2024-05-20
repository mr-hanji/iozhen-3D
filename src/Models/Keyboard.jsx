import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function Keyboard({tableHeight}) {
    const keyboard = useGLTF('/objects/Keyboard.glb')
  return (
    <>
        <Clone object={keyboard.scene} scale={2} position={[8 , tableHeight , -10]}   rotation-y={Math.PI / 2}/>
        <Clone object={keyboard.scene} scale={2} position={[-8.5 , tableHeight , -8]} rotation-y={Math.PI}/>
        <Clone object={keyboard.scene} scale={2} position={[-8.5 , tableHeight , 0]}  rotation-y={Math.PI}/>
        <Clone object={keyboard.scene} scale={2} position={[-8.5 , tableHeight , 8]}  rotation-y={Math.PI}/>
    </>
  )
}

useGLTF.preload('/objects/Keyboard.glb')

