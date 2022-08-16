import { useCallback } from 'react';
import { BsBagFill } from 'react-icons/bs';
import useSessionColor from '../../hooks/useSessionColor';
import Counter from './counter';
import Separate from './separate';

const General = ({ setMode }) => {
  const { textColor, bgColor, borderColor, iconColor } = useSessionColor();

  const handleToList = useCallback(() => {
    setMode('list');
  }, [setMode]);

  return (
    <>
      <ToListButton
        bgColor={bgColor}
        onClick={handleToList}
      />

      <div className="w-full h-[calc(100vh-9rem)]">
        <Counter
          textColor={textColor}
          borderColor={borderColor}
          iconColor={iconColor}
        />

        <Separate
          textColor={textColor}
          iconColor={iconColor}
        />
      </div>
    </>
  );
};

const ToListButton = ({ bgColor, onClick }) => {
  return (
    <button
      className={`px-7 py-1 text-white text-sm font-medium ${bgColor} rounded-2xl shadow-lg absolute top-28 right-5`}
      onClick={onClick}
    >
      <div className="w-full flex flex-col items-center">
        <BsBagFill
          size="1.25rem"
          color="white"
        />
      </div>
      <div className="mt-1 w-full text-center">
        リスト
      </div>
    </button>
  );
};

export default General;
