import { useEffect, useState } from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';
import useHeadRoute from '../../hooks/useHeadRoute';
import Linking from '../../components/linking';
import CenterText from '../../components/centerText';

const CraftAppBar = () => {
  const route = useHeadRoute();

  const [textColor, setTextColor] = useState('text-white');
  const [bgColor, setBgColor] = useState('bg-white');

  useEffect(() => {
    switch (route) {
      case '/separate':
        setTextColor('text-separating-500');
        setBgColor('bg-separating-500');
        break;
      case '/craft':
        setTextColor('text-crafting-500');
        setBgColor('bg-crafting-500');
        break;
      case '/crafting':
        setTextColor('text-crafting-500');
        setBgColor('bg-crafting-500');
        break;
      case '/share':
        setTextColor('text-sharing-500');
        setBgColor('bg-sharing-500');
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

        <CenterText>
          <AiOutlineCaretRight size="1.8rem" />
        </CenterText>

        <Item
          label="製作"
          href="/craft"
          now={route === '/crafting' ? '/craft' : route}
          textColor={textColor}
        />

        <CenterText>
          <AiOutlineCaretRight size="1.8rem" />
        </CenterText>

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

export default CraftAppBar;
