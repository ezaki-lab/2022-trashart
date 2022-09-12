import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useHydrateAtoms } from 'jotai/utils';
import { Transition } from '@headlessui/react';
import useHttps from '../hooks/useHttps';
import useModern from '../hooks/useModern';
import useIdRoute from '../hooks/useIdRoute';
import SplashScreen from '../lib/splashScreen';
import url from '../utils/url';
import { sessionIdAtom, sectionAtom, modeAtom, materialB64Atom, materialsAtom, artIdAtom, artsAtom, quoteAtom } from '../models/stores';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  // localhost以外ではHTTPSを強制する
  useHttps();

  const { initialState } = pageProps;
  useHydrateAtoms(initialState ? [[sessionIdAtom, sectionAtom, modeAtom, materialB64Atom, materialsAtom, artIdAtom, artsAtom, quoteAtom, initialState]] : []);

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
    <>
      <Head>
        <link rel="manifest" href={url('/manifest.json')} />
        <link rel="apple-touch-icon" href={url('/icon.png')} />
        <link rel="icon" href={url('/favicon.png')} />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
      </Head>

      <div className="w-screen h-screen text-black text-lg">
        <Component {...pageProps} />
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
    </>
  );
};

export default MyApp;
