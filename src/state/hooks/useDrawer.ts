import shuffle from 'just-shuffle';
import { useSetRecoilState } from 'recoil';
import { resultSecretSanta } from '../atom';
import { useUsersList } from './useUsersList';

export const useDrawer = () => {
  const users = useUsersList();
  const setResult = useSetRecoilState(resultSecretSanta);

  return () => {
    const totalUsers = users.length;
    const shuffled = shuffle(users);
    const result = new Map<string, string>();

    for (let index = 0; index < totalUsers; index++) {
      const indexSanta = index === totalUsers - 1 ? 0 : index + 1;
      result.set(shuffled[index], shuffled[indexSanta]);
    }

    setResult(result);
  };
};
