import { atom } from 'recoil';

export const listUsersState = atom<string[]>({
  key: 'listUsersState',
  default: [],
});
