import React , {useRef} from 'react'
import { extend, useFrame , useThree} from '@react-three/fiber'
import { Environment, useHelper , OrbitControls , BakeShadows , SoftShadows , AccumulativeShadows , RandomizedLight , ContactShadows , Sky , Lightformer} from "@react-three/drei"
import CustomeObj from './CustomeObj';
import { useControls , button } from 'leva';
import { Perf } from 'r3f-perf';
import * as THREE from "three"
import Table from './Models/Table';
import RightAndLeftWall from './Models/RightAndLeftWall';
import WallAndDoor from './Models/WallAndDoor';
import WallAndWindow from './Models/WallAndWindow';
import Ceiling from './Models/Ceiling';
import OfficeTable from './Models/OfficeTable';
import Chair from './Models/Chair';
import Couch from './Models/Couch';
import RoundTableWithCards from './Models/RoundTableWithCards';
import Monitors from './Models/Monitors';
import Keyboard from './Models/Keyboard';




function Experience() {

    
    const standardYforObjects = 4.5;
    const officeWidth = 25;
    const officeLength = 33;
    const officeHeight = 4;
    const tableHeight = 2.3;

    const {camera , gl} = useThree();
    const cubeRef = useRef();
    const groupRef = useRef();
    const dirRef = useRef();
    useFrame((state , delta) => {

    }) 


    const {perfVisible} = useControls( {
        perfVisible : true
    })

    // const {colorShadow , opacity , blur} = useControls("contact shadow" , {
    //     colorShadow : "#000000" ,
    //     opacity : {
    //         value : 1 ,
    //         min : 0 ,
    //         max : 1 ,
    //     } ,
    //     blur : {
    //         value : 0 ,
    //         min : 0 ,
    //         max : 10
    //     }

    // })

    const {sunPosition} = useControls('sky' , {
        sunPosition : {value : [1 , 2 , 3]}
    })


    useHelper(dirRef , THREE.DirectionalLightHelper , 1) //add helper 


  return (
    <>

       {perfVisible && <Perf position='top-left' />} 

        <OrbitControls makeDefault/>
         {/* <ContactShadows position={[0 , 0 , 0]} scale={10} resolution={512} far={5} color={colorShadow} opacity={opacity} blur={blur} /> */}
          {/*frames={1}  //its good */} 

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={0.04} ref={dirRef}/>
        <ambientLight intensity={0.5}/>

        <Sky sunPosition={sunPosition}/>



        <mesh scale={ 40} position={[0 , 0 , 0]} rotation-x={-Math.PI * 0.5} receiveShadow >
            <planeGeometry />
            <meshStandardMaterial color="green" />
        </mesh>

        {/* Models */}
        <Table officeWidth={officeWidth} officeLength={officeLength}/>
        <RightAndLeftWall standardYforObjects={standardYforObjects} officeWidth={officeWidth}/>
        <WallAndDoor standardYforObjects={standardYforObjects} officeLength={officeLength}/>
        <WallAndWindow standardYforObjects={standardYforObjects} officeLength={officeLength}/>
        <Ceiling officeHeight={officeHeight} standardYforObjects={standardYforObjects} officeLength={officeLength}/>
        <OfficeTable />
        <Chair />
        <Couch officeWidth={officeWidth} officeLength={officeLength}/>
        <RoundTableWithCards officeWidth={officeWidth}/>
        <Monitors tableHeight={tableHeight}/>
        <Keyboard tableHeight={tableHeight}/>

    </>
  )
}

export default Experience