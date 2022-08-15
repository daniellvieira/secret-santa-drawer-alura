import { useRecoilValue } from 'recoil';
import { listUsersState } from '../atom';

export const useUsersList = () => {
  return useRecoilValue(listUsersState);
};
