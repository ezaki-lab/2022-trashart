import { useEffect } from 'react';

const useHttps = () => {
  useEffect(() => {
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      window.location.href = window.location.href.replace(/^http:/, 'https:');
    }
  }, []);
};

export default useHttps;
