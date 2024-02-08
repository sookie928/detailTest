import { useGLTF } from '@react-three/drei';

export function ThirdPiece(props) {
  const { nodes, materials } = useGLTF('/therfect_trf_e_v2_240208.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.therfect_a.geometry}
        material={materials['therfect_handpiece_01.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.therfect_a_1.geometry}
        material={materials['therfect_body_color.004']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.therfect_a_2.geometry}
        material={materials['therfect_black.001']}
      />
    </group>
  );
}

useGLTF.preload('/therfect_frf_64_v2_240208.glb');
