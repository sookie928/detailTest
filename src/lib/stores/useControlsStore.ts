import { create } from 'zustand';

interface IUseControlsStore {
  reset: boolean;
  fullscreen: boolean;
  setReset: (reset: boolean) => void;
  setFullscreen: (fullscreen: boolean) => void;
}

const useControlsStore = create<IUseControlsStore>((set) => ({
  reset: false,
  fullscreen: false,
  setReset: (reset: boolean) => set({ reset }),
  setFullscreen: (fullscreen: boolean) => set({ fullscreen }),
}));

export default useControlsStore;
