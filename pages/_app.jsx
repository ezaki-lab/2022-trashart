import Head from 'next/head';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { Transition } from '@headlessui/react';
import useModern from '../hooks/useModern';
import useIdRoute from '../hooks/useIdRoute';
import SocialAppBar from '../lib/appBar/social';
import CraftAppBar from '../lib/appBar/craft';
import BottomAppBar from '../lib/bottomAppBar';
import SplashScreen from '../lib/splashScreen';
import '../styles/globals.css';

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

      <Transition
        appear
        show={!ready}
        leave="transition-opacity ease-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <SplashScreen />
      </Transition>
    </RecoilRoot>
  );
};

export default MyApp;
