import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './components/Model';
import useStore from './lib/stores/useStore';

function App() {
  const { clicked, selected, setSelected } = useStore((state) => ({
    clicked: state.clicked,
    selected: state.selected,
    setSelected: state.setSelected,
  }));

  const onClick = (name: 'first' | 'second' | 'third' | 'fourth' | 'fifth') => {
    setSelected(name);
  };
  return (
    <div className="w-screen h-screen">
      {clicked && (
        <div className="w-full absolute h-[100px] z-10 flex items-center justify-around p-3">
          <img
            className={`h-full hover:scale-110 ${selected === 'first' ? 'scale-110' : ''}`}
            src="/first_nozzle.png"
            onClick={() => {
              onClick('first');
            }}
          />
          <img
            className={`h-full hover:scale-110 ${selected === 'second' ? 'scale-110' : ''}`}
            src="/second_nozzle.png"
            onClick={() => {
              onClick('second');
            }}
          />
          <img
            className={`h-full hover:scale-110 ${selected === 'third' ? 'scale-110' : ''}`}
            src="/third_nozzle.png"
            onClick={() => {
              onClick('third');
            }}
          />
          <img
            className={`h-full hover:scale-110 ${selected === 'fourth' ? 'scale-110' : ''}`}
            src="/fourth_nozzle.png"
            onClick={() => {
              onClick('fourth');
            }}
          />
          <img
            className={`h-full hover:scale-110 ${selected === 'fifth' ? 'scale-110' : ''}`}
            src="/fifth_nozzle.png"
            onClick={() => {
              onClick('fifth');
            }}
          />
        </div>
      )}
      <Canvas camera={{ position: [0, 0, 5] }} className='bg-orange-300'>
        <ambientLight intensity={0.1} />
        <Environment preset="city" />
        <Model />
        <OrbitControls makeDefault />
        {/* <CameraControls makeDefault /> */}
      </Canvas>
    </div>
  );
}

export default App;
