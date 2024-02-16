import { CameraControls } from '@react-three/drei';
import { FC, useEffect, useRef } from 'react';

interface IControlsProps {
  reset: boolean;
  fullscreen: boolean;
  setReset: (reset: boolean) => void;
  setFullscreen: (fullscreen: boolean) => void;
}

const Controls: FC<IControlsProps> = ({ reset, setReset }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (reset && ref && ref.current) {
      (ref.current as CameraControls).setPosition(0, 0, 2);
      setReset(false);
    }
  }, [reset]);
  return <CameraControls ref={ref} makeDefault />;
};

export default Controls;
