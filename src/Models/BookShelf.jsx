import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function BookShelf({officeLength, officeWidth , standardYforObjects }) {
    const bookShelf = useGLTF('/objects/BookShelf.glb')
  return (
    <>
        <primitive object={bookShelf.scene}  scale={2} position={[-officeWidth / 2 + 1, standardYforObjects, officeLength / 2 - 2.5]} rotation-y={Math.PI} />
    </>
  )
}

useGLTF.preload('/objects/BookShelf.glb')