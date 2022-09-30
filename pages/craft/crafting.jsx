import { useEffect } from 'react';
import useSession from '../../hooks/useSession';
import Session from '../../lib/session';
import Portal from '../../lib/craft/crafting/portal/portal';
import Crafting from '../../lib/craft/crafting/crafting/crafting';

const title = '製作';
const description = '製作をしましょう！';

const Craft = () => {
  const { setSection, mode, setMode } = useSession();

  useEffect(() => {
    setSection('crafting');

    if (mode !== 'crafting') {
      setMode('portal');
    }
  }, [setSection, mode, setMode]);

  return (
    <Session
      title={title}
      description={description}
    >
      {mode === 'portal' &&
        <Portal />
      }

      {mode === 'crafting' &&
        <Crafting />
      }
    </Session>
  );
};

export default Craft;
