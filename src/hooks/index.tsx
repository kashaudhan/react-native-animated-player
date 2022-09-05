import { useContext } from 'react';
import { PlayerContext as Context } from '../state/context';

export function useVideoTranstion() {
  const c = useContext(Context);
  return c;
}
