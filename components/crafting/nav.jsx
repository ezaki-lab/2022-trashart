import { useEffect, useState } from 'react';

const Nav = () => {
  const [isAvailableAr, setIsAvailableAr] = useState(false);

  useEffect(() => {
    if ('xr' in navigator) {
      setIsAvailableAr(true);
    }
  }, []);

  return (
    <div className="w-full h-20 flex fixed bottom-16">
      {isAvailableAr
        ? (
          <button
            className="text-lg btn border-none text-white bg-crafting hover:bg-orange-700 shadow-lg m-auto"
          >
            ARで置いてみる
          </button>
        )
        : (
          <div
            className="text-lg px-4 leading-[3rem] text-gray-500 bg-gray-300 font-semibold rounded-lg shadow-lg select-none m-auto"
          >
            ARはできません
          </div>
        )}
      <button
        className="px-5 text-lg btn border-none text-white bg-crafting hover:bg-orange-700 shadow-lg m-auto"
      >
        完成
      </button>
    </div>
  );
};

export default Nav;
