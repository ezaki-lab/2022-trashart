import { memo, useCallback, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import WebCamera from '../../webCamera/webCamera';
import { craftingIdAtom } from '../../../models/stores';
import api from '../../../models/apiClient';

const Camera = () => {
  const camera = useRef(null);

  const [craftingId] = useAtom(craftingIdAtom);
  const [isTakenPhoto, setIsTakenPhoto] = useState(false);

  const [workImg, setWorkImg] = useState(null);

  const takePhoto = useCallback(() => {
    let b64 = '';
    try {
      b64 = camera.current.takePhoto();
    } catch (_) {
      return;
    }
    setWorkImg(b64);

    api.post(`/share/${craftingId}/photo`, {
      'data': b64
    })
      .then(() => {
        setIsTakenPhoto(true);
      });
  }, [craftingId]);

  const reTakeMode = useCallback(() => {
    setIsTakenPhoto(false);
  }, []);

  return (
    <div className="mt-2 w-full h-96 bg-black rounded-2xl relative overflow-hidden">
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
              src={workImg}
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
