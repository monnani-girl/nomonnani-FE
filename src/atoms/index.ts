import { atom } from 'recoil';
import { SelectedProps } from '../api/types';

export const selectedAtom = atom<SelectedProps>({
  key: 'selected',
  default: {
    season: '',
    weather: '',
    feel: '',
    travel: '',
    photo: '',
  },
});
