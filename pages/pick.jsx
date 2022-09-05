import { useEffect } from 'react';
import Session from '../lib/session';
import useSession from '../hooks/useSession';
import Result from '../lib/pick/result';
import Camera from '../lib/pick/camera';

const title = '回収';
const description = '回収をしましょう！';

const Pick = () => {
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

export default Pick;
