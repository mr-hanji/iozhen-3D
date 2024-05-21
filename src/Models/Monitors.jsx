import React from 'react'
import { useGLTF , Clone , Html } from '@react-three/drei'
import { useControls } from 'leva'

export default function Monitors({tableHeight}) {
    const monitor = useGLTF('/objects/Monitor.glb')

    const {lightPosition} = useControls('light' , {
      lightPosition : {value : [0 , 0 , 0]}
  })

  return (
    <>
        <Clone object={monitor.scene} scale={2} position={[8 , tableHeight , -8]}   rotation-y={Math.PI / 2}>
          <rectAreaLight width={2.5} height={1.65} intensity={20} color={"#0e1c63"} rotation={[-0.1 , Math.PI , 0]} position={lightPosition}/>
        <Html
          
          rotation-y={3.14 / 2}
          transform
          wrapperClass="htmlScreen"
          distanceFactor={0.42}
          position={[0.05, 0.585, -0.01]} // Adjusted the position to align with the TV screen
        >
          <div className='iframe-container'>
            <iframe src="https://iozhen.com" />
          </div>
          </Html>
        </Clone>
        <Clone object={monitor.scene} scale={2} position={[-7 , tableHeight , -8]} rotation-y={Math.PI}/>
        <Clone object={monitor.scene} scale={2} position={[-7 , tableHeight , 0]}  rotation-y={Math.PI}/>
        <Clone object={monitor.scene} scale={2} position={[-7 , tableHeight , 8]}  rotation-y={Math.PI}/>
    </>
  )
}

useGLTF.preload('/objects/Monitor.glb')

