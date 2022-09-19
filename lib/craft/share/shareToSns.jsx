import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useAtom } from 'jotai';
import { FiShare2 } from 'react-icons/fi';
import { sessionIdAtom, quoteAtom } from '../../../models/stores';
import url from '../../../utils/url';
import useSession from '../../../hooks/useSession';
import Dialog from './dialog';

const ShareToSns = () => {
  const { setSection } = useSession();
  const router = useRouter();

  const [sessionId] = useAtom(sessionIdAtom);
  const [quote] = useAtom(quoteAtom);

  const [isShowDialog, setIsShowDialog] = useState(false);

  const handleShare = useCallback(() => {
    if (window.location.protocol !== 'https:') {
      return;
    }

    navigator.share({
      title: 'MARINE TRASHART',
      text: quote,
      url: `${process.env.NEXT_PUBLIC_URL}?id=${sessionId}`,
    });
  }, [quote, sessionId]);

  const handleFinish = useCallback(() => {
    setSection('take');
    setIsShowDialog(true);
  }, [setSection, setIsShowDialog]);

  const closeDialog = useCallback(() => {
    console.log('closed');
    router.push('/', url('/'));
  }, [router]);

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

      <Dialog
        counter={9}
        isShow={isShowDialog}
        onClose={closeDialog}
      />
    </div>
  );
};

export default ShareToSns;
