import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useHydrateAtoms } from 'jotai/utils';
import { Transition } from '@headlessui/react';
import useHttps from '../hooks/useHttps';
import useModern from '../hooks/useModern';
import useIdRoute from '../hooks/useIdRoute';
import SplashScreen from '../lib/splashScreen';
import BottomAppBar from '../lib/bottomAppBar';
import url from '../utils/url';
import {
  sessionIdAtom,
  homeSectionAtom,
  homeModeAtom,
  craftSectionAtom,
  craftModeAtom,
  separateSectionAtom,
  separateModeAtom,
  albumSectionAtom,
  albumModeAtom,
  materialB64Atom,
  materialsAtom,
  artIdAtom,
  artsAtom,
  quoteAtom
} from '../models/stores';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  // localhost以外ではHTTPSを強制する
  useHttps();

  const { initialState } = pageProps;
  useHydrateAtoms(initialState ? [[
    sessionIdAtom,
    homeSectionAtom,
    homeModeAtom,
    craftSectionAtom,
    craftModeAtom,
    separateSectionAtom,
    separateModeAtom,
    albumSectionAtom,
    albumModeAtom,
    materialB64Atom,
    materialsAtom,
    artIdAtom,
    artsAtom,
    quoteAtom
  ]] : []);

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
        <link rel="icon" href={url('/favicon.png')} />
        <link rel="apple-touch-icon" sizes="192x192" href={url('/icon-192x192.png')} />
        <link rel="apple-touch-icon" sizes="256x256" href={url('/icon-256x256.png')} />
        <link rel="apple-touch-icon" sizes="384x384" href={url('/icon-384x384.png')} />
        <link rel="apple-touch-icon" sizes="512x512" href={url('/icon-512x512.png')} />
        <meta name="theme-color" content="#fc9114" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
      </Head>

      <div className="w-screen h-screen text-black text-lg">
        <Component {...pageProps} />
        <BottomAppBar route={route} />
      </div>

      {/* <Transition
        appear
        show={!ready}
        leave="transition-opacity ease-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <SplashScreen />
      </Transition> */}
    </>
  );
};

export default MyApp;
