import Recommend from './recommend';
import ChooseGenre from './chooseGenre';

const Portal = ({ setGenreId, setGenreName, setCraftingId, changeMode }) => {
  return (
    <>
      <Recommend
        setCraftingId={setCraftingId}
        changeMode={changeMode}
      />
      <ChooseGenre
        setGenreId={setGenreId}
        setGenreName={setGenreName}
        changeMode={changeMode}
      />
    </>
  );
};

export default Portal;
