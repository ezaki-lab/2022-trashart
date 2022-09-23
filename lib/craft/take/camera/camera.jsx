import { useCallback, useRef } from 'react';
import { useAtom } from 'jotai';
import WebCamera from '../../../webCamera/webCamera';
import useSession from '../../../../hooks/useSession';
import ModeButton from '../../../modeButton';
import { BsArchiveFill } from 'react-icons/bs';
import { materialB64Atom } from '../../../../models/stores';

const Camera = () => {
  const { setMode } = useSession();
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

  return (
    <section className="size-main layout-main-fixed">
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
      </div>
    </section>
  );
};

export default Camera;
