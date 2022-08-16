import { MdMemory } from 'react-icons/md';
import { Headline1 } from '../../components/headline';

const Separate = () => {
  return (
    <section className="w-full h-1/2">
      <Headline1
        label="プラスチックごみ分類"
        textColor="text-picking-500"
        icon={<MdMemory />}
        iconColor="rgb(12, 203, 232)"
      />

      <div className="mt-2 w-full h-3/4 bg-black rounded-2xl relative">
        <button className="w-10 h-10 bg-gray-300 border-4 border-white rounded-full opacity-75 m-auto absolute inset-x-0 bottom-2" />
      </div>

      <div className="mt-2 text-gray-500 text-base text-center">
        ごみだけが映るように調整してください
      </div>
    </section>
  );
};

export default Separate;
