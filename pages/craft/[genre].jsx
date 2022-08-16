import { useCallback, useState } from 'react';
import Session from '../../lib/session';
import Genre from '../../lib/craft/genre';
import MaterialList from '../../lib/materialList/materialList';

const title = 'ジャンル';
const description = 'ジャンルを選びましょう！';

const Craft = () => {
  const [mode, setMode] = useState('genre');

  const handleBackFromList = useCallback(() => {
    setMode('genre');
  }, []);

  return (
    <Session
      title={title}
      description={description}
    >
      {mode === 'genre' &&
        <Genre
          genre="魚"
          setMode={setMode}
        />
      }

      {mode === 'list' &&
        <MaterialList handleBack={handleBackFromList} />
      }
    </Session>
  );
};

export default Craft;
