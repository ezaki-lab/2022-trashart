import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import useModern from '../hooks/useModern';
import AppBar from '../components/appBar';
import BottomAppBar from '../components/bottomAppBar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  // スマホ表示の最適化、ユーザーのカラーテーマの適応をサポート
  useModern();

  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
      </Head>

      <div className="w-screen h-screen text-black text-lg">
        <AppBar />
        <div className="p-3 pt-16">
          <Component {...pageProps} />
        </div>
        <BottomAppBar />
      </div>
    </RecoilRoot>
  );
};

export default MyApp;
