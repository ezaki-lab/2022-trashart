import usePreload from '../hooks/usePreload';
import CenterText from '../components/centerText';
import Linking from '../components/linking';
import url from '../utils/url';

const BottomAppBar = ({ route }) => {
  const icons = {
    social: {
      inactive: url('/icons/ic_fluent_album_24_regular.svg'),
      active: url('/icons/ic_fluent_album_24_filled.svg')
    },
    craft: {
      inactive: url('/icons/ic_fluent_pair_24_regular.svg'),
      active: url('/icons/ic_fluent_pair_24_filled.svg')
    }
  };

  // アイコンを予め読み込んでいく
  usePreload(url('/icons/ic_fluent_album_24_regular.svg'));
  usePreload(url('/icons/ic_fluent_album_24_filled.svg'));
  usePreload(url('/icons/ic_fluent_pair_24_regular.svg'));
  usePreload(url('/icons/ic_fluent_pair_24_filled.svg'));

  return (
    <nav className="w-full h-16 bg-sky-100 text-center text-2xl leading-[3rem] flex flex-row justify-around fixed bottom-0">
      <Item
        label="投稿"
        href="/social"
        idRoute="/social"
        now={route}
        icon={icons.social}
      />
      <Item
        label="製作"
        href="/separate"
        idRoute="/craft"
        now={route}
        icon={icons.craft}
      />
    </nav>
  );
};

const Item = ({ label, href, idRoute, now, icon }) => {
  return (
    <Linking href={href}>
      <button>
        <div className={
          idRoute !== now
            ? 'mt-1 px-3'
            : 'mt-1 px-3 bg-sky-300 rounded-xl'
        }>
          <CenterText>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={idRoute !== now ? icon.inactive : icon.active}
              alt={label}
              width="35rem"
              className="pointer-events-none"
            />
          </CenterText>
        </div>
        <div className="-mt-1 text-lg">
          {label}
        </div>
      </button>
    </Linking>
  );
};

export default BottomAppBar;
