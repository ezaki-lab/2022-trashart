import { useCallback } from 'react';
import { MdPhotoLibrary } from 'react-icons/md';
import { Headline1 } from '../../../components/headline';
import ToListButton from '../../ToListButton';
import ArtItem from '../artItem';

const Genre = ({ id, name, setCraftingId, changeMode }) => {
  const samples = [
    { id: '339014c515e93bac0c4f3f91', name: 'タイ', time: '3時間' },
    { id: '339014c515e93bac0c4f3f91', name: 'マンボウ', time: '10時間' },
    { id: '339014c515e93bac0c4f3f91', name: 'カツオ', time: '5時間' },
    { id: '339014c515e93bac0c4f3f91', name: 'イルカ', time: '2時間' },
    { id: '339014c515e93bac0c4f3f91', name: 'サメ', time: '7時間' },
    { id: '339014c515e93bac0c4f3f91', name: 'クラゲ', time: '1時間' }
  ];

  const handleToList = useCallback(() => {
    changeMode('list');
  }, [changeMode]);

  const handleClick = useCallback((id) => {
    setCraftingId(id);
    changeMode('crafting');
  }, [setCraftingId, changeMode]);

  return (
    <>
      <ToListButton
        bgColor="bg-crafting-500"
        onClick={handleToList}
      />

      <Headline1
        label={name}
        textColor="text-crafting-500"
        icon={<MdPhotoLibrary />}
        iconColor="rgb(253, 167, 69)"
      />

      <section className="mt-5 mb-6 w-full grid grid-cols-2 gap-3">
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
    </>
  );
};

export default Genre;
