import { useGLTF } from '@react-three/drei';

export function Body(props: any) {
  const { nodes, materials } = useGLTF('https://bluebeaker.blob.core.windows.net/public/3d/therfect_body_240208.glb');
  return (
    <group {...props} dispose={null} position={[0, -1, 0]}>
      <group position={[0, 1.016, 0.158]} rotation={[Math.PI / 2, 0, 0]} scale={0.049}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.therfect002 as THREE.Mesh).geometry}
          material={materials.therfect_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.therfect002_1 as THREE.Mesh).geometry}
          material={materials['therfect_led.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.therfect002_2 as THREE.Mesh).geometry}
          material={materials.therfect_metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.therfect002_3 as THREE.Mesh).geometry}
          material={materials.therfect_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.therfect002_4 as THREE.Mesh).geometry}
          material={materials.therfect_body_color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.therfect002_5 as THREE.Mesh).geometry}
          material={materials.therfect_logo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.therfect002_6 as THREE.Mesh).geometry}
          material={materials.therfect_monitor_dsplay}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.therfect002_7 as THREE.Mesh).geometry}
          material={materials.therfect_wire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.therfect002_8 as THREE.Mesh).geometry}
          material={materials.therfect_pad}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.therfect002_9 as THREE.Mesh).geometry}
          material={materials.therfect_handpiece_02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.therfect002_10 as THREE.Mesh).geometry}
          material={materials.therfect_wheel}
        />
      </group>
    </group>
  );
}

useGLTF.preload('https://bluebeaker.blob.core.windows.net/public/3d/therfect_body_240208.glb');
