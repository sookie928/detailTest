import { FC, useRef, useState } from 'react';
import { Body } from './model/Body';
import { HandPiece } from './model/HandPiece';
import Cable from './model/Cable';
import { DepthOfField, EffectComposer } from '@react-three/postprocessing';
import useStore from '../lib/stores/useStore';

const Model: FC<object> = () => {
  const start = useRef();
  const end = useRef();
  const { clicked, setClicked, selected } = useStore();
  const onClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <EffectComposer enabled={clicked}>
        <DepthOfField focusDistance={0.9} focalLength={1.2} bokehScale={2} />
      </EffectComposer>
      <group>
        <Body />
        <HandPiece start={start} end={end} clicked={clicked} onClick={onClick} selected={selected} />
        <Cable start={start} end={end} />
      </group>
    </>
  );
};

export default Model;
