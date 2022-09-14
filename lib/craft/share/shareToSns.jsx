import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import url from "../../../utils/url";
import { sessionIdAtom, quoteAtom } from '../../../models/stores';

const ShareToSns = () => {
  const [sessionId, setSessionId] = useAtom(sessionIdAtom);
  const [quote, setQuote] = useAtom(quoteAtom);

  const [fbLink, setFbLink] = useState('');
  const [twLink, setTwLink] = useState('');

  useEffect(() => {
    setFbLink(`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_URL}?id=${sessionId}&quote=${quote}&hashtag=%23ゴミアート`);
    setTwLink(`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_URL}?id=${sessionId}&text=${quote}&hashtags=ゴミアート`);
  }, [sessionId, quote]);

  return (
    <div className="mt-8 pb-36 px-10 flex flex-row justify-around">
      <a href={fbLink}>
        <img
          src={url('/icons/Facebook.svg')}
          alt="Facebookロゴ"
          width="60rem"
        />
      </a>

      <a href={twLink}>
        <img
          src={url('/icons/Twitter.svg')}
          alt="Twitterロゴ"
          width="60rem"
        />
      </a>
    </div>
  );
};

export default ShareToSns;
