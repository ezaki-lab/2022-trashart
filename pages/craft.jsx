import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSession from '../hooks/useSession';
import url from '../utils/url';

const Craft = () => {
  const router = useRouter();
  const { section } = useSession();

  useEffect(() => {
    // TODO: 共有終了後もういちどcraftの画面に戻ると、数ミリ秒共有の画面が表示されるバグを修正する
    switch (section) {
      case 'take':
        router.push('/craft/take', url('/craft/take'));
        break;
      case 'crafting':
        router.push('/craft/crafting', url('/craft/crafting'));
        break;
      case 'share':
        router.push('/craft/share', url('/craft/share'));
        break;
      default:
        router.push('/craft/take', url('/craft/take'));
    }
  }, [router, section]);

  return <>Loading...</>;
};

export default Craft;
