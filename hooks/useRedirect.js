import { useRouter } from 'next/router';
import { useEffect } from 'react';
import url from '../utils/url';

const useRedirect = (href) => {
  const router = useRouter();

  useEffect(() => {
    router.push(href, url(href));
  }, []);
};

export default useRedirect;
