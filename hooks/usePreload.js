import { useCallback, useEffect, useState } from 'react';

// プリロードするフック
const usePreload = (url) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const prefetchLink = document.createElement('link');
    prefetchLink.href = url;
    prefetchLink.rel = 'prefetch';
    prefetchLink.addEventListener('load', onLoad);
    document.body.appendChild(prefetchLink);

    return () => {
      document.body.removeChild(prefetchLink);
    };
  }, [onLoad, url]);

  return loaded;
};

export default usePreload;
