import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import url from '../../utils/url';

const CraftingAppBar = () => {
  const router = useRouter();

  const [color, setColor] = useState('bg-white');

  useEffect(() => {
    switch (router.route) {
      case '/separate':
        setColor('bg-separating');
        break;
      case '/craft':
        setColor('bg-crafting');
        break;
      case '/share':
        setColor('bg-sharing');
        break;
      default:
        setColor('bg-white');
    }
  }, [router.route]);

  return (
    <div className="w-full h-10 fixed top-0">
      <nav className={`m-3 h-full ${color} rounded-lg leading-[2.5rem] text-center text-xl text-white transition-all px-4 flex flex-row justify-around`}>
        <div className="w-[4.5rem] relative">
          <div className="w-full h-6 bg-white rounded-lg absolute top-2" />
          <div className="w-full text-separating text-center absolute top-0">
            分別
          </div>
        </div>
        <CaretRight />
        <div className="w-[4.5rem] relative">
          {/* <div className="w-full h-8 bg-white rounded-xl absolute top-2" /> */}
          <div className="w-full text-white text-center absolute top-0">
            製作
          </div>
        </div>
        <CaretRight />
        <div className="w-[4.5rem] relative">
          {/* <div className="w-full h-8 bg-white rounded-xl absolute top-2" /> */}
          <div className="w-full text-white text-center absolute top-0">
            共有
          </div>
        </div>
      </nav>
    </div>
  );
};

const CaretRight = () => {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url('/icons/ic_fluent_caret_right_24_filled.svg')}
        alt={"right"}
        width="30rem"
        className="mt-[0.35rem]"
      />
    </div>
  );
};

export default CraftingAppBar;
