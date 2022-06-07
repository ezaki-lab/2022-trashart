import { useEffect, useState } from 'react';
import useHeadRoute from './useHeadRoute';

// 識別用のルートを取得
const useIdRoute = () => {
  const headsCraft = [
    '/separate',
    '/craft',
    '/crafting',
    '/share'
  ];

  const headRoute = useHeadRoute();

  const [route, setRoute] = useState('/social');

  useEffect(() => {
    if (headsCraft.includes(headRoute)) {
      setRoute('/craft');
    } else {
      setRoute('/social');
    }
  }, [headRoute]);

  return route;
};

export default useIdRoute;
