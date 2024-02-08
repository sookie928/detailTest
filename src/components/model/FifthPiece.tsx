import { useGLTF } from '@react-three/drei';

export function FifthPiece(props) {
  const { nodes, materials } = useGLTF("/therfect_trf_s_v2_240208.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.therfect_c.geometry}
        material={materials["therfect_handpiece_01.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.therfect_c_1.geometry}
        material={materials["therfect_body_color.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.therfect_c_2.geometry}
        material={materials["therfect_black.003"]}
      />
    </group>
  );
}

useGLTF.preload('/therfect_frf_64_v2_240208.glb');
