import { useCallback } from 'react';
import { BsCalculatorFill, BsStarFill } from 'react-icons/bs';
import { Headline1 } from '../../components/headline';

const colors = [
  'white', 'red', 'yellow', 'green', 'blue', 'brown', 'black'
];

const bgColors = [
  'bg-white', 'bg-red-500', 'bg-yellow-500',
  'bg-green-500', 'bg-blue-500', 'bg-orange-900', 'bg-black'
];

const shapes = [
  '小物', '直線', 'カーブ', '角', '平面', '特殊'
];

const Counter = () => {
  const handleSelectColor = useCallback((color) => {
    console.log('selected color:', color);
  }, []);

  const handleSelectShape = useCallback((shape) => {
    console.log('selected shape:', shape);
  }, []);

  return (
    <section className="w-full h-1/2">
      <Headline1
        label="素材カウンター"
        textColor="text-picking-500"
        icon={<BsCalculatorFill />}
        iconColor="rgb(12, 203, 232)"
      />

      <section className="px-2 mt-5 w-full h-12 border-2 border-picking-500 rounded-2xl flex flex-row justify-around">
        {bgColors.map((color, index) =>
          <ColorPallet
            color={color}
            key={color}
            onSelected={() => { handleSelectColor(colors[index]); }}
          />
        )}
      </section>

      <section className="p-2 mt-3 w-full h-36 border-2 border-picking-500 rounded-2xl grid grid-cols-3 gap-2">
        {shapes.map((shape, index) =>
          <button
            className="p-1 text-sm text-picking-500 border-2 border-picking-500 rounded-2xl shadow-lg"
            onClick={() => { handleSelectShape(shape); }}
            key={shape}
          >
            <div className="w-full flex flex-col items-center">
              <BsStarFill
                size="1.5rem"
                color="rgb(12, 203, 232)"
              />
            </div>
            <div className="w-full text-center">
              {shape}
            </div>
          </button>
        )}
      </section>
    </section>
  );
};

const ColorPallet = ({ color, onSelected }) => {
  return (
    <button
      className={`mt-1 w-9 h-9 ${color} border-4 border-gray-300 rounded-full shadow-lg`}
      onClick={onSelected}
    />
  );
};

export default Counter;
