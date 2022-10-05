import { MdOutlineYard, MdYard } from 'react-icons/md';
import { BsArchive, BsArchiveFill } from 'react-icons/bs';
import { RiRecycleLine, RiRecycleFill } from 'react-icons/ri';
import { IoShapesOutline, IoShapes } from 'react-icons/io5';
import useHeadRoute from '../hooks/useHeadRoute';
import useHeadColor from '../hooks/useHeadColor';
import Linking from '../components/linking';
import CenterText from '../components/centerText';

const iconProps = {
  size: '1.75rem',
  color: 'rgb(209, 213, 219)'
};

const iconActiveProps = {
  size: '1.75rem',
  color: 'white'
};

const BottomAppBar = () => {
  const route = useHeadRoute();
  const { bgColor } = useHeadColor();

  return (
    <nav className="w-full sm:w-20 lg:w-full h-20 sm:h-full lg:h-20 text-center text-2xl leading-[3rem] shadow-up-md bg-white flex flex-row sm:flex-col lg:flex-row justify-around fixed bottom-0 sm:left-0">
      <Item
        label="ホーム"
        href="/home"
        active={'/home' === route}
        icon={<BsArchive {...iconProps} />}
        iconActive={<BsArchiveFill {...iconActiveProps} />}
        bgColor={bgColor}
      />

      <Item
        label="分別"
        href="/separate"
        active={'/separate' === route}
        icon={<RiRecycleLine {...iconProps} />}
        iconActive={<RiRecycleFill {...iconActiveProps} />}
        bgColor={bgColor}
      />

      <Item
        label="製作"
        href="/craft"
        active={'/craft' === route}
        icon={<IoShapesOutline {...iconProps} />}
        iconActive={<IoShapes {...iconActiveProps} />}
        bgColor={bgColor}
      />

      <Item
        label="アルバム"
        href="/album"
        active={'/album' === route}
        icon={<MdOutlineYard {...iconProps} />}
        iconActive={<MdYard {...iconActiveProps} />}
        bgColor={bgColor}
      />
    </nav>
  );
};

const Item = ({ label, href, active, icon, iconActive, bgColor }) => {
  return (
    <Linking
      href={href}
      className="flex flex-col items-center justify-center transition-colors duration-500"
    >
      <div className={
        active
          ? `w-10 h-10 ${bgColor} rounded-xl`
          : 'w-10 h-10 bg-white rounded-xl'
      }>
        <CenterText>
          {!active ? icon : iconActive}
        </CenterText>
      </div>
      <div className={
        !active
          ? "mt-1 text-sm text-gray-300"
          : 'mt-1 text-sm text-gray-800'
      }>
        {label}
      </div>
    </Linking>
  );
};

export default BottomAppBar;
