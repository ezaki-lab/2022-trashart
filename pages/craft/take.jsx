import { useEffect } from 'react';
import useSession from '../../hooks/useSession';
import Session from '../../lib/session';
import Camera from '../../lib/craft/take/camera/camera';
import Result from '../../lib/craft/take/result/result';

const title = '撮影';
const description = '撮影をしましょう！';

const Take = () => {
  const { section, setSection } = useSession();

  useEffect(() => {
    setSection('camera');
  }, []);

  return (
    <Session
      title={title}
      description={description}
    >
      {section === 'camera' &&
        <Camera />
      }

      {section === 'result' &&
        <Result />
      }
    </Session>
  );
};

export default Take;
