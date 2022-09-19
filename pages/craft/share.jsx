import { useCallback, useEffect } from 'react';
import useSession from '../../hooks/useSession';
import Session from '../../lib/session';
import Camera from '../../lib/craft/share/camera';
import Description from '../../lib/craft/share/description';
import ShareToSns from '../../lib/craft/share/shareToSns';

const title = '共有';
const description = '共有をしましょう！';

const Share = () => {
  const { setSection } = useSession();

  useEffect(() => {
    setSection('share');
  }, [setSection]);

  return (
    <Session
      title={title}
      description={description}
    >
      <div>
        <Camera />
        <Description />
        <ShareToSns />
      </div>
    </Session>
  );
};

export default Share;
