import Session from '../lib/session';
import Social from '../lib/home/social';
import url from '../utils/url';

const title = 'ホーム';
const description = 'アート製作を通じた海洋ごみ処理';

const Home = () => {
  return (
    <Session
      title={title}
      description={description}
      className="size-main layout-main flex flex-col items-center overflow-x-hidden overflow-y-auto"
      style={{
        background: 'radial-gradient(rgb(234, 241, 246) 0.2rem, transparent 0.2rem)',
        backgroundSize: '3rem 3rem'
      }}
    >
      <img
        src={url('/logo-wide.svg')}
        alt="ロゴ"
        className="my-10 w-2/3"
      />

      <Social />
    </Session>
  );
};

export default Home;
