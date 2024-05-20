import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function Monitors({tableHeight}) {
    const monitor = useGLTF('/objects/Monitor.glb')
  return (
    <>
        <Clone object={monitor.scene} scale={2} position={[8 , tableHeight , -8]}   rotation-y={Math.PI / 2}/>
        <Clone object={monitor.scene} scale={2} position={[-7 , tableHeight , -8]} rotation-y={Math.PI}/>
        <Clone object={monitor.scene} scale={2} position={[-7 , tableHeight , 0]}  rotation-y={Math.PI}/>
        <Clone object={monitor.scene} scale={2} position={[-7 , tableHeight , 8]}  rotation-y={Math.PI}/>
    </>
  )
}

useGLTF.preload('/objects/Monitor.glb')

