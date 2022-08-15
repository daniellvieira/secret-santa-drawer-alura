import { useRecoilValue, useSetRecoilState } from 'recoil';
import { errorState, listUsersState } from '../atom';

export const useAddUser = () => {
  const setList = useSetRecoilState(listUsersState);
  const list = useRecoilValue(listUsersState);
  const setError = useSetRecoilState(errorState);

  return (nameUser: string) => {
    if (list.includes(nameUser)) {
      setError('Nomes duplicados não são permitidos.');
      setTimeout(() => {
        setError('');
      }, 5000);
      return;
    }

    return setList((list) => [...list, nameUser]);
  };
};
