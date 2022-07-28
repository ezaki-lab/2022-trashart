import { useEffect, useState } from 'react';
import useHeadRoute from '../../hooks/useHeadRoute';
import Linking from '../../components/linking';
import url from '../../utils/url';

const CraftAppBar = () => {
  const route = useHeadRoute();

  const [textColor, setTextColor] = useState('text-white');
  const [bgColor, setBgColor] = useState('bg-white');

  useEffect(() => {
    switch (route) {
      case '/separate':
        setTextColor('text-separating');
        setBgColor('bg-separating');
        break;
      case '/craft':
        setTextColor('text-crafting');
        setBgColor('bg-crafting');
        break;
      case '/crafting':
        setTextColor('text-crafting');
        setBgColor('bg-crafting');
        break;
      case '/share':
        setTextColor('text-sharing');
        setBgColor('bg-sharing');
        break;
      default:
        setTextColor('text-white');
        setBgColor('bg-white');
    }
  }, [route]);

  return (
    <div className="w-full h-10 fixed top-0 z-10">
      <nav className={`m-3 h-full ${bgColor} rounded-lg text-center text-xl text-white transition-all px-4 flex flex-row justify-around`}>
        <Item
          label="分別"
          href="/separate"
          now={route}
          textColor={textColor}
        />
        <CaretRight />
        <Item
          label="製作"
          href="/craft"
          now={route === '/crafting' ? '/craft' : route}
          textColor={textColor}
        />
        <CaretRight />
        <Item
          label="共有"
          href="/share"
          now={route}
          textColor={textColor}
        />
      </nav>
    </div>
  );
};

const Item = ({ label, href, now, textColor }) => {
  return (
    <div className="mt-[0.4rem]">
      {href !== now
        ? (
          <Linking href={href}>
            <button className="text-white px-2">
              {label}
            </button>
          </Linking>
        )
        : (
          <div className={`${textColor} bg-white px-2 rounded-lg`}>
            {label}
          </div>
        )
      }
    </div>
  );
};

const CaretRight = () => {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url('/icons/ic_fluent_caret_right_24_filled.svg')}
        alt="right"
        width="30rem"
        className="mt-[0.35rem] pointer-events-none"
      />
    </div>
  );
};

export default CraftAppBar;
