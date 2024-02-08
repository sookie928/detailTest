import { Line2Props, QuadraticBezierLine } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const d = new THREE.Vector3();
const c = new THREE.Vector3();
const v1 = new THREE.Vector3();
const v2 = new THREE.Vector3();
function Cable({ start, end }) {
  const ref = useRef<Line2Props>(null);
  useFrame(() => {
    if (ref.current)
      ref.current.setPoints(
        start.current.getWorldPosition(v1),
        end.current.getWorldPosition(v2),
        c.set(0, -2, 0).add(d.copy(v1).lerp(v2, 0.5))
      );
  });
  return (
    <QuadraticBezierLine
      ref={ref}
      lineWidth={3}
      color="#ffffff"
      start={new THREE.Vector3()}
      end={new THREE.Vector3()}
    />
  );
}

export default Cable;
