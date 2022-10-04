import { useCallback, useState } from 'react';
import Session from '../lib/session';
import Social from '../lib/home/social';
import url from '../utils/url';
import { useAtom } from 'jotai';
import { isDemoModeAtom } from '../models/stores';

const title = 'ホーム';
const description = 'アート製作を通じた海洋ごみ処理';

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [, setIsDemoMode] = useAtom(isDemoModeAtom);

  const handleClick = useCallback(() => {
    const value = clickCount + 1;
    setClickCount(value);

    if (value % 3 == 0) {
      setIsDemoMode(true);
    } else {
      setIsDemoMode(false);
    }
  }, [clickCount, setIsDemoMode]);

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
        className="my-10 w-2/3 block sm:hidden lg:block"
        onClick={handleClick}
      />

      <Social />
    </Session>
  );
};

export default Home;
