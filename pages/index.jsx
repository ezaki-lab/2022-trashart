import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Main from '../components/main';

const title = 'ホーム';
const description = 'アート製作を通じた海洋ごみ処理';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/social`);
  }, []);

  return (
    <Main
      title={title}
      description={description}
    >
    </Main>
  );
};

export default Home;
