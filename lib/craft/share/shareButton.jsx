import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { FiShare2 } from 'react-icons/fi';
import { sessionIdAtom, userIdAtom, titleAtom, hashtagsAtom, shareImgAtom } from '../../../models/stores';
import url from '../../../utils/url';
import useSession from '../../../hooks/useSession';
import Dialog from './dialog';
import api from '../../../models/apiClient';

const ShareToSns = () => {
  const { setSection, resetSession } = useSession();
  const router = useRouter();

  const [sessionId] = useAtom(sessionIdAtom);
  const [userId] = useAtom(userIdAtom);
  const [title] = useAtom(titleAtom);
  const [hashtags] = useAtom(hashtagsAtom);
  const [shareImg] = useAtom(shareImgAtom);

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
      text: title,
      url: `${process.env.NEXT_PUBLIC_URL}?id=${sessionId}`,
    });
  }, [title, sessionId]);

  const handleShared = useCallback(() => {
    api.post(`/shares`, {
      'user_id': userId,
      'title': title,
      'hashtags': hashtags,
      'image': shareImg,
    })
      .then(() => {
        setIsShowDialog(true);
      });

    setSection('take');
    resetSession();
  }, [userId, title, hashtags, shareImg, setIsShowDialog, setSection, resetSession]);

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
          title !== ''
            ? 'w-full h-20 text-white text-2xl text-center font-bold bg-crafting-500 rounded-2xl shadow-xl'
            : 'w-full h-20 text-gray-500 text-lg text-center font-bold bg-gray-300 rounded-2xl shadow-xl'
        }
        onClick={title !== '' ? handleShared : null}
      >
        {title !== '' ? '完成' : '作品名を入力してください'}
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
