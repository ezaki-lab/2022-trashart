const ArtItem = ({ name, index, onClick }) => {
  return (
    <button
      className="bg-crafting-100 text-center rounded-2xl shadow-xl overflow-hidden"
      onClick={onClick}
    >
      <div className="w-full h-48 relative">
        <div className="w-full h-full bg-crafting-600" />
        <div className="text-white text-2xl drop-shadow-lg absolute left-2 top-2">
          0{index + 1}
        </div>
      </div>

      <div className="p-2">
        <h2 className="text-crafting-900">
          {name}
        </h2>
      </div>
    </button>
  );
};

export default ArtItem;
