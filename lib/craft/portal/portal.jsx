import { useCallback } from 'react';
import { MdAssistantPhoto } from 'react-icons/md';
import { Headline1 } from '../../../components/headline';
import useSession from '../../../hooks/useSession';
import ArtItem from './artItem';

const Portal = () => {
  const { setSection } = useSession();

  const samples = [
    { id: '339014c515e93bac0c4f3f91', name: 'タイ' },
    { id: '339014c515e93bac0c4f3f92', name: '海中生物' },
    { id: '339014c515e93bac0c4f3f93', name: '鳥羽丸' },
    { id: '339014c515e93bac0c4f3f94', name: 'パンダ' }
  ];

  const handleClick = useCallback(() => {
    setSection('crafting');
  }, [setSection]);

  return (
    <section>
      <Headline1
        label="おすすめ"
        textColor="text-crafting-500"
        icon={<MdAssistantPhoto />}
        iconColor="rgb(253, 167, 69)"
      />

      <section className="mt-3 w-full grid grid-cols-2 gap-3">
        {samples.map((sample, index) =>
          <ArtItem
            name={sample.name}
            index={index}
            onClick={handleClick}
            key={sample.id}
          />
        )}
      </section>

      <button
        className="px-10 py-5 text-white text-xl font-bold bg-crafting-500 rounded-2xl shadow-xl fixed bottom-8"
      >
        新しい画像からアート製作する
      </button>
    </section>
  );
};

export default Portal;
