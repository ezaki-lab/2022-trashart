import { MdNavigateNext, MdOutlineYard, MdYard } from 'react-icons/md';
import { BsArchive, BsArchiveFill } from 'react-icons/bs';
import { HiOutlineShare, HiShare } from 'react-icons/hi';
import useHeadRoute from '../hooks/useHeadRoute';
import useSessionColor from '../hooks/useSessionColor';
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

const SessionAppBar = () => {
  const route = useHeadRoute();
  const { bgColor, borderColor } = useSessionColor();

  return (
    <nav className={`m-3 w-[calc(100%-1.5rem)] h-20 py-1 bg-gray-50 rounded-2xl text-center text-xl transition-colors px-4 border-4 ${borderColor} flex flex-row justify-around fixed top-0 z-10`}>
      <Item
        label="回収"
        href="/pick"
        active={'/pick' === route}
        icon={<BsArchive {...iconProps} />}
        iconActive={<BsArchiveFill {...iconActiveProps} />}
        bgColor={bgColor}
      />

      <NavigateNext />

      <Item
        label="製作"
        href="/craft"
        active={'/craft' === route || '/crafting' === route}
        icon={<MdOutlineYard {...iconProps} />}
        iconActive={<MdYard {...iconActiveProps} />}
        bgColor={bgColor}
      />

      <NavigateNext />

      <Item
        label="共有"
        href="/share"
        active={'/share' === route}
        icon={<HiOutlineShare {...iconProps} />}
        iconActive={<HiShare {...iconActiveProps} />}
        bgColor={bgColor}
      />
    </nav>
  );
};

const Item = ({ label, href, active, icon, iconActive, bgColor }) => {
  return (
    <Linking href={href}>
      <div className={
        active
          ? `w-10 h-10 ${bgColor} rounded-xl`
          : 'w-10 h-10 border-2 border-gray-300 rounded-xl'
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

const NavigateNext = () => {
  return (
    <CenterText>
      <MdNavigateNext
        size="3rem"
        color="rgb(156, 163, 175)"
      />
    </CenterText>
  );
};

export default SessionAppBar;
