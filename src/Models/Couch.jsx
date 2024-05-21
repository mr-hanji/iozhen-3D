import React from 'react'
import { useGLTF , Clone } from '@react-three/drei'

export default function Couch({officeLength, officeWidth }) {
    const couch = useGLTF('/objects/Couch.glb')

    const eventHandler = (event) => {
      // event.stopPropagation baray vaghti ke ye shei dige joloy shei aslie
      couch.scene.traverse((child) => {
        if(child.isMesh) {
          child.material.color.set("#ff0000");
        }
      })
    }


  return (
    <>
        <primitive object={couch.scene}  scale={2} position={[officeWidth / 2 , 0, officeLength / 2]} rotation-y={Math.PI} onClick={eventHandler}/>  {/* onContextMenu is for right click */} {/* onDoubleClick */} 
        {/* onPointerUp and onPointerDown */}
        {/* onPointerOver and onPointerEnter */} {/* onPointerOut and onPointerLeave */} {/* onPointerMove */} {/* onPointerMissed */} 
        {/* useCurser is for change curser  */}
        
        
    </>
  )
}

useGLTF.preload('/objects/Couch.glb')