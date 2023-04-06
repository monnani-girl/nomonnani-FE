import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { SelectedProps } from '../api/types';

const { persistAtom } = recoilPersist({
  key: 'selected-persist',
  storage: sessionStorage,
});

export const selectedAtom = atom<SelectedProps>({
  key: 'selected',
  default: {
    season: '',
    weather: '',
    feel: '',
    travel: '',
    photo: '',
  },
  effects_UNSTABLE: [persistAtom],
});
