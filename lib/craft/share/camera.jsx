import { memo, useCallback, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import WebCamera from '../../webCamera/webCamera';
import { shareImgAtom } from '../../../models/stores';

const Camera = () => {
  const camera = useRef(null);

  const [isTakenPhoto, setIsTakenPhoto] = useState(false);

  const [shareImg, setShareImg] = useAtom(shareImgAtom);

  const takePhoto = useCallback(() => {
    let b64 = '';
    try {
      b64 = camera.current.takePhoto();
    } catch (_) {
      return;
    }
    setShareImg(b64);
    setIsTakenPhoto(true);
  }, [setShareImg, setIsTakenPhoto]);

  const reTakeMode = useCallback(() => {
    setIsTakenPhoto(false);
  }, []);

  return (
    <div className="mt-2 w-full h-96 sm:h-64 lg:h-96 bg-black rounded-2xl relative overflow-hidden">
      {!isTakenPhoto
        ? (
          <>
            <WebCamera facingMode="environment" ref={camera} />
            <button
              className="w-10 h-10 bg-gray-300 border-4 border-white rounded-full opacity-75 m-auto absolute inset-x-0 bottom-2"
              onClick={takePhoto}
            />
          </>
        )
        : (
          <>
            <img
              src={shareImg}
              alt="作品画像"
              className="w-full"
            />

            <button
              className="m-auto w-48 h-12 text-white text-xl text-center font-bold bg-crafting-500 rounded-2xl shadow-xl absolute inset-x-0 bottom-2"
              onClick={reTakeMode}
            >
              撮り直す
            </button>
          </>
        )
      }
    </div>
  );
};

export default memo(Camera);
