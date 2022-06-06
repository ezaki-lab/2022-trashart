import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import url from '../../utils/url';
import Linking from '../linking';

const CraftingAppBar = () => {
  const router = useRouter();

  const [textColor, setTextColor] = useState('text-white');
  const [bgColor, setBgColor] = useState('bg-white');

  useEffect(() => {
    switch (router.route) {
      case '/separate':
        setTextColor('text-separating');
        setBgColor('bg-separating');
        break;
      case '/craft':
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
  }, [router.route]);

  return (
    <div className="w-full h-10 fixed top-0">
      <nav className={`m-3 h-full ${bgColor} rounded-lg text-center text-xl text-white transition-all px-4 flex flex-row justify-around`}>
        <Item
          label="分別"
          href="/separate"
          now={router.route}
          textColor={textColor}
        />
        <CaretRight />
        <Item
          label="製作"
          href="/craft"
          now={router.route}
          textColor={textColor}
        />
        <CaretRight />
        <Item
          label="共有"
          href="/share"
          now={router.route}
          textColor={textColor}
        />
      </nav>
    </div>
  );
};

const Item = ({ label, href, now, textColor }) => {
  return (
    <div className="mt-[0.4rem]">
      <Linking href={href}>
        <button className={
          href !== now
            ? `text-white px-2`
            : `${textColor} bg-white px-2 rounded-lg`
        }>
          {label}
        </button>
      </Linking>
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
        className="mt-[0.35rem] pointer-events-none"
      />
    </div>
  );
};

export default CraftingAppBar;
