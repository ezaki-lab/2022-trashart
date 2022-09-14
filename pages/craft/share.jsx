import useSession from '../../hooks/useSession';
import Session from '../../lib/session';
import Camera from '../../lib/share/camera';
import Description from '../../lib/share/description';
import ShareToSns from '../../lib/share/shareToSns';

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
      <form>
        <Camera />
        <Description />
        <ShareToSns />
      </form>
    </Session>
  );
};

export default Share;
