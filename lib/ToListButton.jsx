import { BsBagFill } from 'react-icons/bs';

const ToListButton = ({ bgColor, onClick, posClassName = '' }) => {
  return (
    <button
      className={
        posClassName === ''
          ? `px-7 py-1 text-white text-sm font-medium ${bgColor} rounded-2xl shadow-lg absolute top-[6.25rem] right-5`
          : `px-7 py-1 text-white text-sm font-medium ${bgColor} rounded-2xl shadow-lg ${posClassName}`
      }
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

export default ToListButton;
