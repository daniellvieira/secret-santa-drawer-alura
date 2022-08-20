import { useRecoilValue } from 'recoil';
import { resultSecretSanta } from '../atom';

export const useResultDraw = () => {
  return useRecoilValue(resultSecretSanta);
};
