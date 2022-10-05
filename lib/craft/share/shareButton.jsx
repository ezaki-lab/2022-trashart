import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { FiShare2 } from 'react-icons/fi';
import { userIdAtom, titleAtom, hashtagsAtom, sharePhotoIdAtom } from '../../../models/stores';
import url from '../../../utils/url';
import useSession from '../../../hooks/useSession';
import Modal from './modal';
import api from '../../../models/apiClient';
import share from '../../share';

const ShareToSns = () => {
  const { setSection, resetSession } = useSession();
  const router = useRouter();

  const [userId] = useAtom(userIdAtom);
  const [title] = useAtom(titleAtom);
  const [hashtags] = useAtom(hashtagsAtom);
  const [sharePhotoId] = useAtom(sharePhotoIdAtom);

  const [isShowDialog, setIsShowDialog] = useState(false);

  const [craftingNum, setCraftingNum] = useState(0);

  useEffect(() => {
    if (userId === '') {
      return;
    }

    api.get(`/users/${userId}`)
      .then((res) => {
        setCraftingNum(res.data['crafting_num']);
      });
  }, [userId]);

  const handleShare = useCallback(() => {
    share(title, sharePhotoId, hashtags);
  }, [title, sharePhotoId, hashtags]);

  const handleShared = useCallback(() => {
    api.post(`/shares`, {
      'user_id': userId,
      'title': title,
      'hashtags': hashtags,
      'image_id': sharePhotoId,
    })
      .then(() => {
        setIsShowDialog(true);
      });

    setSection('take');
  }, [userId, title, hashtags, sharePhotoId, setIsShowDialog, setSection]);

  const closeDialog = useCallback(() => {
    resetSession();
    router.push('/home', url('/home'));
  }, [resetSession, router]);

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

      <Modal
        counter={craftingNum}
        isShow={isShowDialog}
        onClose={closeDialog}
      />
    </div>
  );
};

export default ShareToSns;
