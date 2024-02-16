import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import FullScreen from './assets/icons/FullScreen';
import Reset from './assets/icons/Reset';
import SpineB from './components/SpineB';
import useControlsStore from './lib/stores/useControlsStore';
import Controls from './components/Controls';
import { useRef } from 'react';

function Basic() {
  const { reset, fullscreen, setReset, setFullscreen } = useControlsStore();
  const ref = useRef<HTMLCanvasElement>(null);
  return (
    <div className="w-screen h-screen">
      <Canvas ref={ref} camera={{ position: [0, 0, 2] }} className="bg-transparent">
        <Controls reset={reset} fullscreen={fullscreen} setReset={setReset} setFullscreen={setFullscreen} />
        <ambientLight intensity={0.1} />
        <SpineB />
        <Environment preset="city" />
      </Canvas>
      <div className="absolute left-1/2 bottom-20 w-fit  flex gap-[16px] -translate-x-1/2 bg-white/50 drop-shadow-lg rounded-[50px] px-[24px] py-[12px]">
        <Reset
          className={'cursor-pointer'}
          onClick={() => {
            setReset(true);
          }}
        />
        <FullScreen
          className={'cursor-pointer'}
          onClick={() => {
            if (!document.fullscreenElement && ref.current) {
              ref.current.requestFullscreen();
            }
          }}
        />
      </div>
    </div>
  );
}

export default Basic;
