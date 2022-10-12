import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import useSession from '../../../../hooks/useSession';
import WebCamera from '../../../webCamera/webCamera';
import { artIdAtom, isDemoModeAtom, shareImgAtom, sharePhotoIdAtom } from '../../../../models/stores';
import api from '../../../../models/apiClient';

const Camera = () => {
  const router = useRouter();

  const { setMode } = useSession();
  const [artId] = useAtom(artIdAtom);
  const [supportImgUrl, setSupportImgUrl] = useState(null);

  const [, setShareImg] = useAtom(shareImgAtom);
  const [, setSharePhotoId] = useAtom(sharePhotoIdAtom);
  const [isDemoMode] = useAtom(isDemoModeAtom);

  const takePhoto = useCallback(() => {
    let b64 = '';
    try {
      b64 = camera.current.takePhoto();
    } catch (_) {
      return;
    }
    setShareImg(b64);

    api.post('/share-photos', {
      'image': b64
    })
      .then((res) => {
        setSharePhotoId(res.data['id']);
      });
  }, [setShareImg, setSharePhotoId]);

  const backPortal = useCallback(() => {
    setMode('portal');
  }, [setMode]);

  const handleComplete = useCallback(() => {
    if (isDemoMode) {
      takePhoto();
    }
    router.push('/craft/share');
  }, [isDemoMode, takePhoto, router]);

  useEffect(() => {
    if (artId === '') {
      return;
    }

    api.get(`/arts/${artId}`)
      .then((res) => {
        setSupportImgUrl(res.data['support_image_url']);
      });
  }, [artId]);

  return (
    <div className="size-main layout-main-fixed">
      <WebCamera facingMode="environment" />

      {supportImgUrl && (
        <>
          <img
            src={supportImgUrl}
            alt="補助画像"
            className="w-full sm:w-auto lg:w-full h-auto sm:h-full lg:h-auto opacity-50 pointer-events-none absolute m-auto inset-0"
          />
        </>
      )}

      <button
        className="text-white text-xl fixed left-5 top-4"
        onClick={backPortal}
      >
        ←戻る
      </button>

      <button
        className="m-auto w-48 sm:w-24 lg:w-48 h-16 text-white text-2xl text-center leading-[4rem] font-bold bg-crafting-500 rounded-2xl shadow-xl absolute inset-x-0 sm:inset-x-auto lg:inset-x-0 right-0 sm:right-4 lg:right-0 bottom-4"
        onClick={handleComplete}
      >
        完成
      </button>
    </div>
  );
};

export default Camera;
