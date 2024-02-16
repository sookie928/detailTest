import { Float, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { FifthPiece } from './FifthPiece';
import { FirstPiece } from './FirstPiece';
import { FourthPiece } from './FourthPiece';
import { SecondPiece } from './SecondPiece';
import { ThirdPiece } from './ThirdPiece';

const ff = new THREE.Vector3(0, 0.3, 0);
const PAST = new THREE.Vector3();
const GOAL = new THREE.Vector3(1.5, -1.8, 4);
const rotation = new THREE.Euler(0, Math.PI / 5, Math.PI / 4);
const q = new THREE.Quaternion().setFromEuler(rotation);
const p = new THREE.Quaternion();
export function HandPiece(props) {
  const { nodes, materials } = useGLTF('https://bluebeaker.blob.core.windows.net/public/3d/therfect_handpiece_v3_240208.glb');
  const ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const ref2 = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  useFrame(({}) => {
    if (ref.current && props.clicked) {
      ref.current.position.lerp(GOAL, 0.1);
      ref.current.quaternion.slerp(q, 0.1);
      ref2.current?.position.copy(ff);

      ref2.current?.updateMatrix();
      ref.current?.updateMatrix();
    } else if (ref.current && !props.clicked) {
      ref.current.position.lerp(PAST, 0.1);
      ref.current.quaternion.slerp(p, 0.1);
      ref.current?.updateMatrix();
    }
  }, 0);

  return (
    <group
      {...props}
      dispose={null}
      position={[0, -1, 0]}
      onClick={() => {
        props.onClick();
        if (!props.clicked && ref.current) {
          PAST.copy(ref.current.position);
          p.setFromEuler(ref.current.rotation);
        } else if (props.clicked && ref.current) {
        }
      }}
    >
      <mesh ref={props.start} position={nodes.body.position} />
      <group ref={ref}>
        <Float
          ref={ref2}
          position={[nodes.therfect_e.position.x + 0.3, nodes.therfect_e.position.y, nodes.therfect_e.position.z]}
          // rotation={[-Math.PI / 3, 0, 0]}
          rotationIntensity={0}
          floatingRange={[-1, 1]}
          floatIntensity={0.3}
          speed={props.clicked ? 0 : 3.5}
        >
          <mesh geometry={(nodes.therfect_e as THREE.Mesh).geometry} material={materials.therfect_body_color} />
          <mesh geometry={(nodes.therfect_e_1 as THREE.Mesh).geometry} material={materials.therfect_handpiece_02}>
            <mesh ref={props.end} position={nodes.handpiece.position} />
          </mesh>
          <ThirdPiece visible={props.selected === 'first'} />
          <FourthPiece visible={props.selected === 'second'} />
          <FifthPiece visible={props.selected === 'third'} />
          <FirstPiece visible={props.selected === 'fourth'} />
          <SecondPiece visible={props.selected === 'fifth'} />

          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.therfect_e_2 as THREE.Mesh).geometry}
            material={materials.therfect_wire}
          />
        </Float>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.therfect_e001_1 as THREE.Mesh).geometry}
        material={materials.therfect_metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.therfect_e001_2 as THREE.Mesh).geometry}
        material={materials.therfect_wire}
      />
    </group>
  );
}

useGLTF.preload('https://bluebeaker.blob.core.windows.net/public/3d/therfect_handpiece_v2_240208.glb');
