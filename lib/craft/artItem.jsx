import { MdTimer } from 'react-icons/md';
import Linking from '../../components/linking';

const ArtItem = () => {
  return (
    <Linking
      href="/crafting/339014c515e93bac0c4f3f91"
      className="bg-crafting-100 text-center rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="w-full h-28 bg-crafting-200" />
      <div className="p-2">
        <h2 className="text-crafting-900">
          タイ
        </h2>
        <div className="w-full text-gray-500 text-sm flex flex-row justify-center">
          <MdTimer
            size="0.8rem"
            color="rgb(107, 114, 128)"
            className="mt-1 mr-2"
          />
          2時間
        </div>
      </div>
    </Linking>
  );
};

export default ArtItem;
