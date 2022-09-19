import { useCallback, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import WebCamera from '../../../webCamera/webCamera';
import useSession from '../../../../hooks/useSession';
import ModeButton from '../../../modeButton';
import { BsArchiveFill } from 'react-icons/bs';
import SeparateDialog from '../../../separate/separateDialog';
import { materialB64Atom } from '../../../../models/stores';

const Camera = () => {
  const { setMode } = useSession();
  const [isShowSeparate, setIsShowSeparate] = useState(false);

  const camera = useRef(null);

  const [, setMaterialB64] = useAtom(materialB64Atom);

  const takePhoto = useCallback(() => {
    let b64 = '';
    try {
      b64 = camera.current.takePhoto();
    } catch (_) {
      return;
    }

    setMaterialB64(b64);
    setMode('result');
  }, [setMaterialB64, setMode]);

  const closeSeparateDialog = useCallback(() => {
    setIsShowSeparate(false);
  }, [setIsShowSeparate]);

  return (
    <section className="w-full h-[calc(100%-5rem)] fixed top-0 left-0">
      <WebCamera facingMode="environment" ref={camera} />

      <div className="w-full h-44 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-evenly absolute bottom-0">
        <div className="mb-1 w-full flex flex-col items-center">
          <ModeButton
            icon={<BsArchiveFill />}
            label="アート素材の撮影"
            active={true}
          />
        </div>

        <button
          className="w-16 h-16 bg-gray-300 border-4 border-white rounded-full opacity-75"
          onClick={takePhoto}
        />

        <SeparateDialog
          isShow={isShowSeparate}
          onClose={closeSeparateDialog}
        />
      </div>
    </section>
  );
};

export default Camera;
