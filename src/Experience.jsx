import React , {useRef} from 'react'
import { extend, useFrame , useThree} from '@react-three/fiber'
import { Environment,useHelper , OrbitControls , BakeShadows , SoftShadows , AccumulativeShadows , RandomizedLight , ContactShadows , Sky , Lightformer} from "@react-three/drei"
import CustomeObj from './CustomeObj';
import { useControls , button } from 'leva';
import { Perf } from 'r3f-perf';
import * as THREE from "three"




function Experience() {

    

    const {camera , gl} = useThree();
    const cubeRef = useRef();
    const groupRef = useRef();
    const dirRef = useRef();
    useFrame((state , delta) => {
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 8
        // state.camera.position.z = Math.cos(angle) * 8
        // state.camera.lookAt(0 , 0 , 0)
        // cubeRef.current.position.x = 2 + Math.sin(angle)
        cubeRef.current.rotation.y += delta
        // groupRef.current.position.y += delta
    }) 

    const {position , color , visible} = useControls( 'sphere',{
        position : {
            value : {x : -2 , y : 0 } ,
            // min : -4 ,
            // max : 4 ,
            step : 0.1 ,
            joystick : "invertY"
            
        } ,
        color : '#ff00ff' ,
        visible : true ,
        clickMe : button(() => {
            console.log("hi");
        }) ,
        choice : {options : ["a" , "b" , "c"]}

    })
    const {scale} = useControls( 'cube',{
        scale : {
            value : 1.5 ,
            step : 0.01 ,
            min : 0 ,
            max : 5
        }

    })
    const {perfVisible} = useControls( {
        perfVisible : true
    })

    const {colorShadow , opacity , blur} = useControls("contact shadow" , {
        colorShadow : "#000000" ,
        opacity : {
            value : 1 ,
            min : 0 ,
            max : 1 ,
        } ,
        blur : {
            value : 0 ,
            min : 0 ,
            max : 10
        }

    })

    const {sunPosition} = useControls('sky' , {
        sunPosition : {value : [1 , 2 , 3]}
    })

    const {envMapIntensity , envMapHeight , envMapRadius , envMapScale} = useControls('environment map' , {
        envMapIntensity : {value : 3.5 , min : 0 , max : 12} ,
        envMapHeight : {value : 7 , min : 0 , max : 100} ,
        envMapRadius : {value : 28 , min : 10 , max : 1000} ,
        envMapScale : {value : 100 , min : 10 , max : 1000} 
    })

    useHelper(dirRef , THREE.DirectionalLightHelper , 1) //add helper 


  return (
    <>
        <Environment 
        //  background  
         preset='sunset'
         resolution={32}
        //  ground ={{height : 7 , radius : 28 , scale : 100 }}
        ground = {{
            height : envMapHeight ,
            radius : envMapRadius ,
            scale : envMapScale
        }}
         >
                {/* <Lightformer position-z={-5} scale={10} color="red" intensity={10} form={"ring"} /> */}
            </Environment> {/*files={["./environmentMaps/2/px.jpg" , "./environmentMaps/2/nx.jpg" ,"./environmentMaps/2/py.jpg" ,"./environmentMaps/2/ny.jpg" , "./environmentMaps/2/pz.jpg" ,"./environmentMaps/2/nz.jpg"]} */}
        {/* <SoftShadows frustum={3.75} near={9.5} samples={17} rings={11}/> */}
        {/* <BakeShadows />  files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}*/}
       {perfVisible && <Perf position='top-left' />} 

        <OrbitControls makeDefault/>

        {/* <AccumulativeShadows position={[0 , -0.99 , 0]} scale={10} color='#316d39' opacity={0.8} frames={Infinity} temporal blend={100}>
                <RandomizedLight position={[1 , 2 , 3]} amount={8} radius={1} ambient={0.5} intensity={1} bias={0.001}/>
        </AccumulativeShadows> */}

         <ContactShadows position={[0 , 0 , 0]} scale={10} resolution={512} far={5} color={colorShadow} opacity={opacity} blur={blur} /> {/*frames={1}  //its good */} 
        {/* <directionalLight position={sunPosition} intensity={1.5} ref={dirRef} castShadow shadow-mapSize={[1024  , 1024 ]} shadow-camera-near={1} shadow-camera-far={10} shadow-camera-top={5} shadow-camera-right={5} shadow-camera-bottom={-5} shadow-camera-left={-5}/> */}


        {/* <ambientLight intensity={0.5}/> */}

        {/* <Sky sunPosition={sunPosition}/> */}

        <group ref={groupRef}>
            <mesh  visible={visible} castShadow  position={[-2, 1, 0]}>
                <sphereGeometry />
                {/* <meshBasicMaterial color="blue" /> */}
                <meshStandardMaterial color={color} envMapIntensity={envMapIntensity}/>
            </mesh>

            <mesh scale={ scale} position={[2 , 1, 0]} rotation-y={Math.PI * 0.23} ref={cubeRef} castShadow >
                <boxGeometry />
                {/* <meshBasicMaterial color="red" /> */}
                <meshStandardMaterial color="red" envMapIntensity={envMapIntensity}/>
            </mesh>
        </group>

        {/* <mesh scale={ 10} position={[0 , 0 , 0]} rotation-x={-Math.PI * 0.5} >
            <planeGeometry />
            <meshStandardMaterial color="green" envMapIntensity={envMapIntensity}/>
        </mesh> */}

        {/* <CustomeObj /> */}
    </>
  )
}

export default Experience