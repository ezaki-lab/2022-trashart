import { MdPhotoLibrary } from 'react-icons/md';
import { Headline1 } from '../../../components/headline';
import GenreItem from './genreItem';

const ChooseGenre = ({ setGenreId, setGenreName, changeMode }) => {
  const samples = [
    { id: 'fish', name: '魚' },
    { id: 'plant', name: '植物' },
    { id: 'animal', name: '動物' },
    { id: 'bird', name: '鳥' },
    { id: 'character', name: 'キャラクター' },
    { id: 'other', name: 'その他' }
  ];

  const handleClick = (id, name) => {
    setGenreId(id);
    setGenreName(name);
    changeMode('genre');
  };

  return (
    <section className="mt-6">
      <Headline1
        label="ジャンルから選ぶ"
        textColor="text-crafting-500"
        icon={<MdPhotoLibrary />}
        iconColor="rgb(253, 167, 69)"
      />

      <section className="mt-3 w-full grid grid-cols-2 gap-3">
        {samples.map((sample) =>
          <GenreItem
            id={sample.id}
            name={sample.name}
            onClick={handleClick}
            key={sample.id}
          />
        )}
      </section>
    </section>
  );
};

export default ChooseGenre;
