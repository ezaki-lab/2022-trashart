import { useCallback, useRef, useState } from 'react';
import WebCamera from '../webCamera/webCamera';
import ModeButton from '../modeButton';
import { MdMemory } from 'react-icons/md';
import Modal from './modal';
import api from '../../models/apiClient';

const Camera = () => {
  const [isShowSeparate, setIsShowSeparate] = useState(false);

  const camera = useRef(null);

  const takePhoto = useCallback(() => {
    let b64 = '';
    try {
      b64 = camera.current.takePhoto();
    } catch (_) {
      return;
    }

    setIsShowSeparate(true);

    api.post('/pick/separate', {
      'image': b64
    });
  }, []);

  const closeSeparateDialog = useCallback(() => {
    setIsShowSeparate(false);
  }, [setIsShowSeparate]);

  return (
    <section className="size-main layout-main-fixed">
      <WebCamera facingMode="environment" ref={camera} />

      <div className="w-full sm:w-24 lg:w-full h-44 sm:h-full lg:h-44 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-evenly absolute bottom-0 right-0">
        <div className="mb-1 w-full flex sm:hidden lg:flex flex-col items-center">
          <ModeButton
            icon={<MdMemory />}
            label="プラスチックごみの分別"
            active={true}
          />
        </div>

        <button
          className="w-16 h-16 bg-gray-300 border-4 border-white rounded-full opacity-75"
          onClick={takePhoto}
        />

        <Modal
          isShow={isShowSeparate}
          onClose={closeSeparateDialog}
        />
      </div>
    </section>
  );
};

export default Camera;
