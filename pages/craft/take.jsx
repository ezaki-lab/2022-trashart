import { useEffect } from 'react';
import useSession from '../../hooks/useSession';
import Session from '../../lib/session';
import Camera from '../../lib/craft/take/camera/camera';
import Result from '../../lib/craft/take/result/result';

const title = '撮影';
const description = '撮影をしましょう！';

const Take = () => {
  const { setSection, mode, setMode } = useSession();

  useEffect(() => {
    setSection('take');
    setMode('camera');
  }, [setSection, setMode]);

  return (
    <Session
      title={title}
      description={description}
    >
      {mode === 'camera' &&
        <Camera />
      }

      {mode === 'result' &&
        <Result />
      }
    </Session>
  );
};

export default Take;
