import { useGLTF } from '@react-three/drei';

export function SecondPiece(props) {
  const { nodes, materials } = useGLTF("/therfect_frf_100_v2_240208.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.fastlane_therfect_handplace_cap_02002 as THREE.Mesh).geometry}
        material={materials["therfect_body_color.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.fastlane_therfect_handplace_cap_02002_1 as THREE.Mesh).geometry}
        material={materials["therfect_handpiece_tip.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.fastlane_therfect_handplace_cap_02002_2 as THREE.Mesh).geometry}
        material={materials["therfect_handpiece_tip.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.fastlane_therfect_handplace_cap_02002_3 as THREE.Mesh).geometry}
        material={materials["therfect_handpiece_01.001"]}
      />
    </group>
  );
}

useGLTF.preload('/therfect_frf_64_v2_240208.glb');
