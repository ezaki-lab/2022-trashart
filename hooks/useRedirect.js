import { useRouter } from 'next/router';
import { useEffect } from 'react';
import url from '../utils/url';

const useRedirect = (href, rootHref = '') => {
  const router = useRouter();

  useEffect(() => {
    if (rootHref === '') {
      router.push(href, url(href));
    } else {
      router.push(href, url(rootHref));
    }
  }, []);
};

export default useRedirect;
