import React , {useEffect, useMemo , useRef} from 'react'
import * as THREE from "three" 

function CustomeObj() {
    const geometryRef = useRef();
    


    const verticesCount = 10 * 3

    const postions = useMemo(() => {
        const postions = new Float32Array(verticesCount * 3)

        for(let i = 0 ; i < verticesCount * 3 ; i++) {
            postions[i] = (Math.random() - 0.5) * 3
        }
        return postions
    } , []) //save positions for ever and dont need crate again (positions)

    useEffect(() => {
        geometryRef.current.computeVertexNormals()
    } , [])
  return (
          <mesh scale={ 1.5} >
                <bufferGeometry ref={geometryRef}>
                    <bufferAttribute attach="attributes-position" count={verticesCount} itemSize={3} array={postions}/>
                </bufferGeometry>
                {/* <meshBasicMaterial color="red" side={THREE.DoubleSide}/> */}
                <meshStandardMaterial color="red" side={THREE.DoubleSide}/>

            </mesh>
  )
}

export default CustomeObj