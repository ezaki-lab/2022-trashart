import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSession from '../hooks/useSession';
import url from '../utils/url';

const Craft = () => {
  const router = useRouter();
  const { section } = useSession();

  useEffect(() => {
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
