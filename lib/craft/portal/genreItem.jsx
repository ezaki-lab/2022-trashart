const GenreItem = ({ id, name, onClick }) => {
  return (
    <button
      className="py-2 bg-crafting-100 text-center rounded-2xl shadow-xl overflow-hidden"
      onClick={() => { onClick(id, name); }}
    >
      <h2 className="text-crafting-700">
        {name}
      </h2>
    </button>
  );
};

export default GenreItem;
