import { MdTimer } from 'react-icons/md';

const ArtItem = ({ id, name, time, onClick }) => {
  return (
    <button
      className="bg-crafting-100 text-center rounded-2xl shadow-xl overflow-hidden"
      onClick={() => { onClick(id); }}
    >
      <div className="w-full h-28 bg-crafting-200" />
      <div className="p-2">
        <h2 className="text-crafting-900">
          {name}
        </h2>
        <div className="w-full text-gray-500 text-sm flex flex-row justify-center">
          <MdTimer
            size="0.8rem"
            color="rgb(107, 114, 128)"
            className="mt-1 mr-2"
          />
          {time}
        </div>
      </div>
    </button>
  );
};

export default ArtItem;
