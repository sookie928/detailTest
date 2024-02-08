import { create } from 'zustand';

interface IUseStore {
  clicked: boolean;
  selected: 'first' | 'second' | 'third' | 'fourth' | 'fifth' | null;
  setClicked: (clicked: boolean) => void;
  setSelected: (selected: 'first' | 'second' | 'third' | 'fourth' | 'fifth') => void;
}

const useStore = create<IUseStore>((set) => ({
  clicked: false,
  selected: null,
  setClicked: (clicked) => set({ clicked }),
  setSelected: (selected) => set({ selected }),
}));

export default useStore;
