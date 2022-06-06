import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Main from '../components/main';

const title = '製作';
const description = '製作しましょう！';

const Crafting = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/separate`);
  }, []);

  return (
    <Main
      title={title}
      description={description}
    >
    </Main>
  );
};

export default Crafting;
