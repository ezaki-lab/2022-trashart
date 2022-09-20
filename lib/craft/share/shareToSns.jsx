import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { FiShare2 } from 'react-icons/fi';
import { sessionIdAtom, quoteAtom, craftingIdAtom, userIdAtom } from '../../../models/stores';
import url from '../../../utils/url';
import useSession from '../../../hooks/useSession';
import Dialog from './dialog';
import api from '../../../models/apiClient';

const ShareToSns = () => {
  const { setSection } = useSession();
  const router = useRouter();

  const [sessionId] = useAtom(sessionIdAtom);
  const [quote, setQuote] = useAtom(quoteAtom);
  const [craftingId, setCraftingId] = useAtom(craftingIdAtom);
  const [userId] = useAtom(userIdAtom);

  const [isShowDialog, setIsShowDialog] = useState(false);

  const [craftingCnt, setCraftingCnt] = useState(0);

  useEffect(() => {
    if (userId === '') {
      return;
    }

    api.get(`/users/${userId}`)
      .then((res) => {
        setCraftingCnt(res.data['craftings'].length);
      });
  }, [userId]);

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
    setCraftingId('');
    setQuote('');

    sessionStorage.setItem('crafted', 'true');

    api.patch(`/share/${craftingId}`, {
      'title': quote
    })
      .then(() => {
        setIsShowDialog(true);
      });
  }, [quote, craftingId, setSection, setCraftingId, setQuote, setIsShowDialog]);

  const closeDialog = useCallback(() => {
    router.push('/home', url('/home'));
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
        className={
          quote !== ''
            ? 'w-full h-20 text-white text-2xl text-center font-bold bg-crafting-500 rounded-2xl shadow-xl'
            : 'w-full h-20 text-gray-500 text-lg text-center font-bold bg-gray-300 rounded-2xl shadow-xl'
        }
        onClick={quote !== '' ? handleFinish : null}
      >
        {quote !== '' ? '完成' : '作品名を入力してください'}
      </button>

      <Dialog
        counter={craftingCnt}
        isShow={isShowDialog}
        onClose={closeDialog}
      />
    </div>
  );
};

export default ShareToSns;
