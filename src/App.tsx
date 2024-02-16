import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Spine from './components/colorModel/Spine';
import useStore from './lib/stores/useStore';

function App() {
  const { setColor, color } = useStore((state) => ({
    color: state.color,
    setColor: state.setColor,
  }));

  return (
    <div className="w-screen h-screen">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        className="bg-orange-300"
        onDoubleClick={(e) => {
          if (!document.fullscreenElement) {
            (e.target as HTMLCanvasElement).requestFullscreen();
          } else {
            document.exitFullscreen();
          }
        }}
      >
        <ambientLight intensity={0.1} />
        <Environment preset="city" />
        <Spine color={color} />
      </Canvas>
      <div className="absolute left-1/2 bottom-20 w-fit flex gap-1 -translate-x-1/2">
        <div
          className="select-none cursor-pointer rounded-full bg-red-600 p-2"
          onClick={() => {
            setColor('red');
          }}
        >
          red
        </div>
        <div
          className="select-none cursor-pointer rounded-full bg-blue-600 p-2"
          onClick={() => {
            setColor('blue');
          }}
        >
          blue
        </div>
        <div
          className="select-none cursor-pointer rounded-full bg-green-600 p-2"
          onClick={() => {
            setColor('green');
          }}
        >
          green
        </div>
        <div
          className="select-none cursor-pointer rounded-full bg-gray-600 p-2"
          onClick={() => {
            setColor('gray');
          }}
        >
          gray
        </div>
        <div
          className="select-none cursor-pointer rounded-full bg-white p-2"
          onClick={() => {
            setColor('white');
          }}
        >
          white
        </div>
      </div>
    </div>
  );
}

export default App;
