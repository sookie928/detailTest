import { useGLTF } from '@react-three/drei';

export function ThirdPiece(props) {
  const { nodes, materials } = useGLTF('https://bluebeaker.blob.core.windows.net/public/3d/therfect_trf_e_v2_240208.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.therfect_a as THREE.Mesh).geometry}
        material={materials['therfect_handpiece_01.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.therfect_a_1 as THREE.Mesh).geometry}
        material={materials['therfect_body_color.004']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.therfect_a_2 as THREE.Mesh).geometry}
        material={materials['therfect_black.001']}
      />
    </group>
  );
}

useGLTF.preload('https://bluebeaker.blob.core.windows.net/public/3d/therfect_frf_64_v2_240208.glb');
