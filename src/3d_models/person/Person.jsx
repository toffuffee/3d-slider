import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('src/3d_models/person/person.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.polySurface1_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface2_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface3_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface4_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface5_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface6_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface7_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface8_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface9_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface10_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface11_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface12_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface13_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface14_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface15_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface16_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface17_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface18_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface19_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface20_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface21_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface22_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface23_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface24_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface25_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface26_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface27_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface28_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface29_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface30_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface31_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface32_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface33_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface34_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface35_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface36_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface37_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface38_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface39_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface40_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface41_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface42_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface43_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface44_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface45_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface46_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface47_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface48_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface49_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface50_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface51_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface52_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface53_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface54_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface55_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface56_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface57_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2Group52598_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2Group52596_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2Group52692_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v3Group52651_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2Group52652_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2Group51467_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2Group51452_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2Group52555_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2Group51482_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2Group52525_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2Group52629_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2Group45759_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface58_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface59_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface60_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface61_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface62_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface63_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface64_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface66_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface67_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface68_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface69_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface70_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface71_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface72_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface74_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface75_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface76_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface77_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface78_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface80_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface81_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface82_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface83_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface84_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface85_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface86_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface87_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.polySurface102_surfaceShader1_0.geometry} material={materials.surfaceShader1} position={[-33.023, 66.811, 0]} />
      <mesh geometry={nodes.hairStrands_v2polySurface8_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.hairStrands_v2polySurface28_surfaceShader1_0.geometry} material={materials.surfaceShader1} />
      <mesh geometry={nodes.cylTop_02_surfaceShader1_0.geometry} material={materials.surfaceShader1} position={[-1.519, 135.337, 10.826]} rotation={[0.03, -0.828, -0.553]} />
      <mesh geometry={nodes.cyltTop_01_surfaceShader1_0.geometry} material={materials.surfaceShader1} position={[-0.892, 134.759, 11.219]} rotation={[-0.219, 0.409, -0.632]} />
      <mesh geometry={nodes.cylBottom_02_surfaceShader1_0.geometry} material={materials.surfaceShader1} position={[-0.36, 120.464, 11.8]} />
      <mesh geometry={nodes.cylBottom_01_surfaceShader1_0.geometry} material={materials.surfaceShader1} position={[0.051, 119.075, 11.251]} />
    </group>
  )
}

useGLTF.preload('/person.gltf')
