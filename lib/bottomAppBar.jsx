import { MdOutlineYard, MdYard } from 'react-icons/md';
import { BsArchive, BsArchiveFill } from 'react-icons/bs';
import { HiOutlineShare, HiShare } from 'react-icons/hi';
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
    <nav className="w-full h-20 bg-white text-center text-2xl leading-[3rem] shadow-up-md flex flex-row justify-around fixed bottom-0">
      <Item
        label="アルバム"
        href="/home"
        active={'/home' === route || '/album' === route}
        icon={<BsArchive {...iconProps} />}
        iconActive={<BsArchiveFill {...iconActiveProps} />}
        bgColor={bgColor}
      />

      <Item
        label="製作"
        href="/craft"
        active={'/craft' === route}
        icon={<MdOutlineYard {...iconProps} />}
        iconActive={<MdYard {...iconActiveProps} />}
        bgColor={bgColor}
      />

      <Item
        label="分別"
        href="/separate"
        active={'/separate' === route}
        icon={<HiOutlineShare {...iconProps} />}
        iconActive={<HiShare {...iconActiveProps} />}
        bgColor={bgColor}
      />
    </nav>
  );
};

const Item = ({ label, href, active, icon, iconActive, bgColor }) => {
  return (
    <Linking
      href={href}
      className="flex flex-col items-center justify-center"
    >
      <div className={
        active
          ? `w-10 h-10 ${bgColor} rounded-xl`
          : 'w-10 h-10 rounded-xl'
      }>
        <CenterText>
          {!active ? icon : iconActive}
        </CenterText>
      </div>
      <div className="mt-1 text-sm">
        {label}
      </div>
    </Linking>
  );
};

export default BottomAppBar;
