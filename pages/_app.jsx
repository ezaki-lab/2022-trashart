import Head from 'next/head';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { Transition } from 'react-transition-group';
import useModern from '../hooks/useModern';
import useIdRoute from '../hooks/useIdRoute';
import SocialAppBar from '../components/appBar/social';
import CraftAppBar from '../components/appBar/craft';
import BottomAppBar from '../components/bottomAppBar';
import '../styles/globals.css';
import SplashScreen from '../components/splashScreen';

const MyApp = ({ Component, pageProps }) => {
  // スマホ表示の最適化、ユーザーのカラーテーマの適応をサポート
  useModern();
  // 識別用のルートを取得
  const route = useIdRoute();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);

  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
      </Head>

      <div className="w-screen h-screen text-black text-lg">
        {route === '/social'
          ? <SocialAppBar />
          : <CraftAppBar />
        }
        <Component {...pageProps} />
        <BottomAppBar route={route} />
      </div>

      {/* <Transition
        in={!ready}
        timeout={{ enter: 250, exit: 500 }}
        mountOnEnter
        unmountOnExit
      >
        {(state) =>
          <SplashScreen style={transitionStyle[state]} />
        }
      </Transition> */}
    </RecoilRoot>
  );
};

// スプラッシュスクリーンの画面推移の設定
const transitionStyle = {
  entering: {
    transition: 'all 0.25s ease',
    opacity: '1'
  },
  entered: {
    transition: 'all 0.5s ease',
    opacity: '1'
  },
  exiting: {
    transition: 'all 0.5s ease',
    opacity: '0'
  },
  exited: {
    transition: 'all 0.5s ease',
    opacity: '0'
  },
  unmounted: {
    transition: 'all 0.5s ease',
    opacity: '0'
  }
};

export default MyApp;
