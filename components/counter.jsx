import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Counter = ({ value, onMinus, onPlus }) => {
  return (
    <div className="flex flex-row">
      <button
        className="w-8 h-8 flex justify-center items-center rounded-xl bg-blue-500"
        onClick={onMinus}
      >
        <AiOutlineMinus
          size="1.25rem"
          color="white"
        />
      </button>

      <div className="text-2xl mx-4">
        {value}
      </div>

      <button
        className="w-8 h-8 flex justify-center items-center rounded-xl bg-blue-500"
        onClick={onPlus}
      >
        <AiOutlinePlus
          size="1.25rem"
          color="white"
        />
      </button>
    </div>
  );
};

export default Counter;
