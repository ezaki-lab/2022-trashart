import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import useSession from '../../hooks/useSession';
import Session from '../../lib/session';
import Camera from '../../lib/craft/share/camera';
import Description from '../../lib/craft/share/description';
import ShareButton from '../../lib/craft/share/shareButton';
import Linking from '../../components/linking';

const title = '共有';
const description = '共有をしましょう！';

const Share = () => {
  const { setSection, setMode } = useSession();
  const router = useRouter();

  const backCrafting = useCallback(() => {
    router.push('/craft/crafting');
    setMode('crafting');
  }, [router, setMode]);

  useEffect(() => {
    setSection('share');
  }, [setSection]);

  return (
    <Session
      title={title}
      description={description}
    >
      <div>
        <button
          onClick={backCrafting}
          className="mb-3"
        >
          ←戻る
        </button>

        <Camera />
        <Description />
        <ShareButton />
      </div>
    </Session>
  );
};

export default Share;
