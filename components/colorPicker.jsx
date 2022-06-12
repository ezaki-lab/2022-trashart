const ColorPicker = ({ onPicked, onInactive }) => {
  const colors = [
    '#000000', '#ef4444', '#3b82f6', '#22c55e', '#eab308'
  ];

  return (
    <div
      className="w-screen h-screen fixed left-0 top-0 z-20"
      onClick={onInactive}
    >
      <div className="w-56 h-16 bg-gray-100 rounded-lg shadow-lg flex flex-row justify-evenly items-center absolute top-36 left-5">
        {colors.map((color) =>
          <ColorPickerItem
            color={color}
            onClick={() => { onPicked(color); }}
            key={color}
          />
        )}
      </div>
    </div>
  );
};

const ColorPickerItem = ({ color, onClick }) => {
  return (
    <button
      className="w-8 h-8 rounded-full shadow-base-300"
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
};

export default ColorPicker;
