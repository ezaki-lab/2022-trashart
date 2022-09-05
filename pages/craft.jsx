import { useEffect } from 'react';
import useSession from '../hooks/useSession';
import Session from '../lib/session';
import Portal from '../lib/craft/portal/portal';
import Crafting from '../lib/craft/crafting/crafting';

const title = '製作';
const description = '製作をしましょう！';

const Craft = () => {
  const { section, setSection } = useSession();

  useEffect(() => {
    setSection('portal');
  }, []);

  return (
    <Session
      title={title}
      description={description}
    >
      {section === 'portal' &&
        <Portal />
      }

      {section === 'crafting' &&
        <Crafting />
      }
    </Session>
  );
};

export default Craft;
