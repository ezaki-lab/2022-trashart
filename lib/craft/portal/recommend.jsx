import { useCallback } from 'react';
import { MdAssistantPhoto } from 'react-icons/md';
import { Headline1 } from '../../../components/headline';
import ArtItem from '../artItem';

const Recommend = ({ setCraftingId, changeMode }) => {
  const samples = [
    { id: '339014c515e93bac0c4f3f91', name: 'タイ', time: '3時間' },
    { id: '339014c515e93bac0c4f3f91', name: '海中生物', time: '10時間' },
    { id: '339014c515e93bac0c4f3f91', name: '鳥羽丸', time: '5時間' },
    { id: '339014c515e93bac0c4f3f91', name: 'パンダ', time: '2時間' }
  ];

  const handleClick = useCallback((id) => {
    setCraftingId(id);
    changeMode('crafting');
  }, [setCraftingId, changeMode]);

  return (
    <section>
      <Headline1
        label="おすすめ"
        textColor="text-crafting-500"
        icon={<MdAssistantPhoto />}
        iconColor="rgb(253, 167, 69)"
      />

      <section className="mt-3 w-full grid grid-cols-2 gap-3">
        {samples.map((sample) =>
          <ArtItem
            id={sample.id}
            name={sample.name}
            time={sample.time}
            onClick={handleClick}
            key={sample.id}
          />
        )}
      </section>
    </section>
  );
};

export default Recommend;
