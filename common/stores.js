import { atom } from 'jotai';

export const userAtom = atom('user');

export const trashCountAtom = atom({
  driftwood: 0,
  aluminumCan: 0,
  sprayCan: 0,
  pe: 0,
  pet: 0,
  pp: 0
});
