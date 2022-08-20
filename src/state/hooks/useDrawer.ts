import { useSetRecoilState } from 'recoil';
import { resultSecretSanta } from '../atom';
import { makeDraw } from '../helpers/makeDraw';
import { useUsersList } from './useUsersList';

export const useDrawer = () => {
  const users = useUsersList();
  const setResult = useSetRecoilState(resultSecretSanta);

  return () => {
    const result = makeDraw(users);
    setResult(result);
  };
};
