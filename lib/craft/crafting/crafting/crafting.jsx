import { useEffect } from 'react';
import useSession from '../../../hooks/useSession';
import Camera from './camera';

const Crafting = () => {
  const { mode, setMode } = useSession();

  useEffect(() => {
    setMode('camera');
  }, []);

  return (
    <>
      {mode === 'camera' &&
        <Camera />
      }
    </>
  );
};

export default Crafting;
