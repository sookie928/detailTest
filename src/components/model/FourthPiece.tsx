import { useGLTF } from '@react-three/drei';

export function FourthPiece(props) {
  const { nodes, materials } = useGLTF("https://bluebeaker.blob.core.windows.net/public/3d/therfect_trf_r_v2_240208.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.therfect_b as THREE.Mesh).geometry}
        material={materials["therfect_handpiece_01.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.therfect_b_1 as THREE.Mesh).geometry}
        material={materials["therfect_black.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.therfect_b_2 as THREE.Mesh).geometry}
        material={materials["therfect_body_color.005"]}
      />
    </group>
  );
}

useGLTF.preload('https://bluebeaker.blob.core.windows.net/public/3d/therfect_frf_64_v2_240208.glb');
