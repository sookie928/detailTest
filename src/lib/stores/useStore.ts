import { create } from 'zustand';

interface IUseStore {
  color: string;
  clicked: boolean;
  selected: 'first' | 'second' | 'third' | 'fourth' | 'fifth' | null;
  setColor: (color: string) => void;
  setClicked: (clicked: boolean) => void;
  setSelected: (selected: 'first' | 'second' | 'third' | 'fourth' | 'fifth') => void;
}

const useStore = create<IUseStore>((set) => ({
  color: 'white',
  clicked: false,
  selected: null,
  setColor: (color) => set({ color }),
  setClicked: (clicked) => set({ clicked }),
  setSelected: (selected) => set({ selected }),
}));

export default useStore;
