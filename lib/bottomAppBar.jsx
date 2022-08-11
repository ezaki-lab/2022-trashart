import { AiFillBuild, AiOutlineBuild } from 'react-icons/ai';
import { MdOutlineArticle, MdArticle } from 'react-icons/md';
import CenterText from '../components/centerText';
import Linking from '../components/linking';

const BottomAppBar = ({ route }) => {
  const iconProps = {
    size: '2rem',
    color: 'rgb(33, 33, 33)'
  };
  const iconActiveProps = {
    size: '2rem',
    color: 'rgb(33, 33, 33)'
  };

  return (
    <nav className="w-full h-16 bg-sky-100 text-center text-2xl leading-[3rem] flex flex-row justify-around fixed bottom-0">
      <Item
        label="投稿"
        href="/social"
        active={"/social" === route}
        icon={<MdOutlineArticle {...iconProps} />}
        iconActive={<MdArticle {...iconActiveProps} />}
      />
      <Item
        label="製作"
        href="/separate"
        active={"/craft" === route}
        icon={<AiOutlineBuild {...iconProps} />}
        iconActive={<AiFillBuild {...iconActiveProps} />}
      />
    </nav>
  );
};

const Item = ({ label, href, active, icon, iconActive }) => {
  return (
    <Linking href={href}>
      <button>
        <div className={
          active
            ? 'mt-1 px-3 bg-sky-300 rounded-xl'
            : 'mt-1 px-3'
        }>
          <CenterText>
            {active ? iconActive : icon}
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
