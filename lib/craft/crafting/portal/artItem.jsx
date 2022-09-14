const ArtItem = ({ id, name, img, onClick, index }) => {
  return (
    <button
      className="bg-crafting-100 text-center rounded-2xl shadow-xl overflow-hidden"
      onClick={() => { onClick(id); }}
    >
      <div className="w-full h-48 relative">
        <img
          src={img}
          alt="アート画像"
          className="w-full h-48 object-cover"
        />
        <div className="text-white text-2xl drop-shadow-lg absolute left-2 top-2">
          {index >= 9 ? index + 1 : `0${index + 1}`}
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
