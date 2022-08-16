import { useCallback } from 'react';
import { MdPhotoLibrary } from 'react-icons/md';
import { Headline1 } from '../../components/headline';
import ToListButton from '../ToListButton';
import ArtItem from './artItem';

const Genre = ({ genre, setMode }) => {
  const handleToList = useCallback(() => {
    setMode('list');
  }, [setMode]);

  return (
    <>
      <ToListButton
        bgColor="bg-crafting-500"
        onClick={handleToList}
      />

      <Headline1
        label={genre}
        textColor="text-crafting-500"
        icon={<MdPhotoLibrary />}
        iconColor="rgb(253, 167, 69)"
      />

      <section className="mt-5 mb-6 w-full grid grid-cols-2 gap-3">
        <ArtItem />
        <ArtItem />
        <ArtItem />
        <ArtItem />
      </section>
    </>
  );
};

export default Genre;
