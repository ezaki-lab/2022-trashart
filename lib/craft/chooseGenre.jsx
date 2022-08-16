import { MdPhotoLibrary } from 'react-icons/md';
import { Headline1 } from '../../components/headline';
import GenreItem from './genreItem';

const ChooseGenre = () => {
  return (
    <section className="mt-6">
      <Headline1
        label="ジャンルから選ぶ"
        textColor="text-crafting-500"
        icon={<MdPhotoLibrary />}
        iconColor="rgb(253, 167, 69)"
      />

      <section className="mt-3 w-full grid grid-cols-2 gap-3">
        <GenreItem />
        <GenreItem />
        <GenreItem />
        <GenreItem />
        <GenreItem />
        <GenreItem />
      </section>
    </section>
  );
};

export default ChooseGenre;
