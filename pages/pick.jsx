import { useCallback, useState } from 'react';
import Session from '../lib/session';
import General from '../lib/pick/general';
import MaterialList from '../lib/materialList/materialList';

const title = '回収';
const description = '回収をしましょう！';

const Pick = () => {
  const [mode, setMode] = useState('general');

  const handleBackFromList = useCallback(() => {
    setMode('general');
  }, []);

  return (
    <Session
      title={title}
      description={description}
    >
      {mode === 'general' &&
        <General setMode={setMode} />
      }

      {mode === 'list' &&
        <MaterialList handleBack={handleBackFromList} />
      }
    </Session>
  );
};

export default Pick;
