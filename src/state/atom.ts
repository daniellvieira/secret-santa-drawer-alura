import { atom } from 'recoil';

export const listUsersState = atom<string[]>({
  key: 'listUsersState',
  default: [],
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});
