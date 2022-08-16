import { MdAssistantPhoto } from 'react-icons/md';
import { Headline1 } from '../../components/headline';
import ArtItem from './artItem';

const Recommend = () => {
  return (
    <section>
      <Headline1
        label="おすすめ"
        textColor="text-crafting-500"
        icon={<MdAssistantPhoto />}
        iconColor="rgb(253, 167, 69)"
      />

      <section className="mt-3 w-full grid grid-cols-2 gap-3">
        <ArtItem />
        <ArtItem />
        <ArtItem />
        <ArtItem />
      </section>
    </section>
  );
};

export default Recommend;
