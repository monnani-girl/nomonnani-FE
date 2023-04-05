import { atom } from 'recoil';

export const selectedAtom = atom<Record<string, string>>({
  key: 'selectedAtom',
  default: {
    season: '',
    weather: '',
    feel: '',
    travel: '',
    photo: '',
  },
});
