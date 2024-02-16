import { useGLTF } from '@react-three/drei';

export function FifthPiece(props) {
  const { nodes, materials } = useGLTF("https://bluebeaker.blob.core.windows.net/public/3d/therfect_trf_s_v2_240208.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.therfect_c as THREE.Mesh).geometry}
        material={materials["therfect_handpiece_01.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.therfect_c_1 as THREE.Mesh).geometry}
        material={materials["therfect_body_color.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.therfect_c_2 as THREE.Mesh).geometry}
        material={materials["therfect_black.003"]}
      />
    </group>
  );
}

useGLTF.preload('https://bluebeaker.blob.core.windows.net/public/3d/therfect_trf_s_v2_240208.glb');
