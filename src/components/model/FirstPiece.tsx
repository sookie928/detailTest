import { useGLTF } from '@react-three/drei';

export function FirstPiece(props) {
  const { nodes, materials } = useGLTF('https://bluebeaker.blob.core.windows.net/public/3d/therfect_frf_64_v2_240208.glb');
  return (
    <group {...props} dispose={null} visible={props.visible}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.fastlane_therfect_handplace_cap_02001 as THREE.Mesh).geometry}
        material={materials['therfect_body_color.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.fastlane_therfect_handplace_cap_02001_1 as THREE.Mesh).geometry}
        material={materials.therfect_handpiece_01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.fastlane_therfect_handplace_cap_02001_2 as THREE.Mesh).geometry}
        material={materials['therfect_handpiece_tip.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.fastlane_therfect_handplace_cap_02001_3 as THREE.Mesh).geometry}
        material={materials.therfect_handpiece_tip}
      />
    </group>
  );
}

useGLTF.preload('https://bluebeaker.blob.core.windows.net/public/3d/therfect_frf_64_v2_240208.glb');
