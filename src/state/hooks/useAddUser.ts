import { useSetRecoilState } from 'recoil';
import { listUsersState } from '../atom';

export const useAddUser = () => {
  const setList = useSetRecoilState(listUsersState);
  return (nameUser: string) => {
    return setList((list) => [...list, nameUser]);
  };
};
