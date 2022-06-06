import { useRouter } from 'next/router';
import { useEffect } from 'react';
import urlJoin from 'url-join';

const useRedirect = (href) => {
  const router = useRouter();

  useEffect(() => {
    router.push(href, urlJoin('/', process.env.NEXT_PUBLIC_ASSET_PREFIX, href));
  }, []);
};

export default useRedirect;
