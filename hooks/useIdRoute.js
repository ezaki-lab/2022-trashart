import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// 識別用のルートを取得
const useIdRoute = () => {
  const headsCrafting = [
    'crafting',
    'separate',
    'craft',
    'share'
  ];

  const router = useRouter();

  const [route, setRoute] = useState('/social');

  useEffect(() => {
    const head = router.route.split('/')[1];
    if (headsCrafting.includes(head)) {
      setRoute('/crafting');
    } else {
      setRoute('/social');
    }
  }, [router.route]);

  return route;
};

export default useIdRoute;
