import { useCallback, useState } from 'react';
import Session from '../lib/session';
import Portal from '../lib/craft/portal/portal';
import Genre from '../lib/craft/genre/genre';
import MaterialList from '../lib/materialList/materialList';
import Crafting from '../lib/craft/crafting/crafting';

const title = '製作';
const description = '製作をしましょう！';

const Craft = () => {
  const [modePopped, setModePopped] = useState('');
  const [mode, setMode] = useState('portal');
  const [genreId, setGenreId] = useState('');
  const [genreName, setGenreName] = useState('');
  const [craftingId, setCraftingId] = useState('');

  const changeMode = useCallback((modeTo) => {
    setModePopped(mode);
    setMode(modeTo);
  }, [mode]);

  const handleBackFromList = useCallback(() => {
    setMode(modePopped);
  }, []);

  return (
    <Session
      title={title}
      description={description}
    >
      {mode === 'portal' &&
        <Portal
          setGenreId={setGenreId}
          setGenreName={setGenreName}
          setCraftingId={setCraftingId}
          changeMode={changeMode}
        />
      }

      {mode === 'genre' &&
        <Genre
          id={genreId}
          name={genreName}
          setCraftingId={setCraftingId}
          changeMode={changeMode}
        />
      }

      {mode === 'list' &&
        <MaterialList handleBack={handleBackFromList} />
      }

      {mode === 'crafting' &&
        <Crafting id={craftingId} />
      }
    </Session>
  );
};

export default Craft;
