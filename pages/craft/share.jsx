import { useEffect } from 'react';
import useSession from '../../hooks/useSession';
import Session from '../../lib/session';
import Camera from '../../lib/craft/share/camera';
import Description from '../../lib/craft/share/description';
import ShareToSns from '../../lib/craft/share/shareToSns';
import api from '../../models/apiClient';
import { useAtom } from 'jotai';
import { craftingIdAtom, userIdAtom } from '../../models/stores';

const title = '共有';
const description = '共有をしましょう！';

const Share = () => {
  const { setSection } = useSession();
  const [userId] = useAtom(userIdAtom);
  const [craftingId, setCraftingId] = useAtom(craftingIdAtom);

  useEffect(() => {
    setSection('share');
  }, [setSection]);

  useEffect(() => {
    if (userId === '' || craftingId !== '') {
      return;
    }

    api.post('/craftings', {
      'user_id': userId
    })
      .then((res) => {
        setCraftingId(res.data['id']);
      });
  }, [craftingId, setCraftingId, userId]);

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
