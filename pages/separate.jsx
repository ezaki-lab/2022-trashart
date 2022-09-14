import { useEffect } from 'react';
import useSession from '../hooks/useSession';
import Session from '../lib/session';

const title = '分別';
const description = '分別をしましょう！';

const Separate = () => {
  const { section, setSection } = useSession();

  useEffect(() => {
    setSection('camera');
  }, []);

  return (
    <div>
      準備中
    </div>
  );
};

export default Separate;
