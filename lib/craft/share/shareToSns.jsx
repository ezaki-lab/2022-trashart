import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { FiShare2 } from 'react-icons/fi';
import { sessionIdAtom, quoteAtom } from '../../../models/stores';
import useSession from '../../../hooks/useSession';

const ShareToSns = () => {
  const { setSection } = useSession();

  const [sessionId, setSessionId] = useAtom(sessionIdAtom);
  const [quote, setQuote] = useAtom(quoteAtom);

  const handleShare = useCallback((e) => {
    e.preventDefault();

    if (window.location.protocol !== 'https:') {
      return;
    }

    navigator.share({
      title: 'MARINE TRASHART',
      text: quote,
      url: `${process.env.NEXT_PUBLIC_URL}?id=${sessionId}`,
    });
  }, [quote, sessionId]);

  const handleFinish = useCallback((e) => {
    e.preventDefault();
    setSection('take');
  }, [setSection]);

  return (
    <div className="mt-8 w-full h-16 grid grid-cols-2 gap-4 justify-around">
      <button
        className="w-full h-full text-crafting-800 text-2xl text-center font-bold bg-crafting-200 rounded-2xl shadow-xl flex flex-col items-center justify-center"
        onClick={handleShare}
      >
        <div className="flex flex-row">
          <div className="mr-3">
            <FiShare2 />
          </div>
          <div>
            共有
          </div>
        </div>
      </button>

      <button
        className="w-full h-full text-white text-2xl text-center font-bold bg-crafting-500 rounded-2xl shadow-xl"
        onClick={handleFinish}
      >
        完成
      </button>
    </div>
  );
};

export default ShareToSns;
