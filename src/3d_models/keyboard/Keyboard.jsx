
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('src/3d_models/keyboard/keyboard.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[60.514, 39.276, 60.514]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.Plane001__0.geometry} material={materials.Plane001__0} position={[0, 90.041, -238.154]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes['Box001_02_-_Default_0'].geometry} material={materials['02_-_Default']} position={[70.981, 155.11, -1.144]} rotation={[0, -0.175, -Math.PI / 2]} scale={[1, 1, 1.955]} />
          <mesh geometry={nodes['Box002_07_-_Default_0'].geometry} material={materials['07_-_Default']} position={[120.623, -148.984, 6.549]} scale={[1, 1, 0.306]} />
          <mesh geometry={nodes['musta_base_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[0, 90.041, -238.154]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes['musta_nappis_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[70.981, 155.11, -1.144]} rotation={[0, -0.175, -Math.PI / 2]} scale={[1, 1, 1.955]} />
          <mesh geometry={nodes['musta_lampu_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[120.623, -148.984, 6.549]} scale={[1, 1, 0.306]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/keyboard.gltf')
