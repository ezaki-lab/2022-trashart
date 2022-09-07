import { useCallback, useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import WebCamera from '../../webCamera/webCamera';
import useSession from '../../../hooks/useSession';
import ModeButton from './modeButton';
import { MdMemory } from 'react-icons/md';
import { BsArchiveFill } from 'react-icons/bs';
import SeparateDialog from './separateDialog';
import { materialB64Atom } from '../../../models/stores';

const Camera = () => {
  const { setSection, mode, setMode } = useSession();
  const [isShowSeparate, setIsShowSeparate] = useState(false);

  const camera = useRef(null);

  const [materialB64, setMaterialB64] = useAtom(materialB64Atom);

  useEffect(() => {
    if (mode == 'result') {
      setMode('store');
      return;
    }

    setMode('separate');
  }, []);

  const changeSeparateMode = useCallback(() => {
    setMode('separate');
  }, [setMode]);

  const changeStoreMode = useCallback(() => {
    setMode('store');
  }, [setMode]);

  const takePhoto = useCallback(() => {
    if (mode === 'separate') {
      separate();
    } else if (mode === 'store') {
      store();
    }
  }, [mode]);

  const separate = () => {
    const b64 = camera.current.takePhoto();
    // setIsShowSeparate(true);

    fetch(process.env.NEXT_PUBLIC_API_URL + '/pick/separate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'data': b64
      })
    });
  };

  const store = () => {
    const b64 = camera.current.takePhoto();
    setMaterialB64(b64);
    setSection('result');
  };

  const closeSeparateDialog = useCallback(() => {
    setIsShowSeparate(false);
  }, [setIsShowSeparate]);

  return (
    <section className="w-full h-full fixed top-0 left-0">
      <WebCamera facingMode="environment" ref={camera} />

      <div className="w-full h-52 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-evenly fixed bottom-0">
        <div className="mb-1 w-full flex flex-col items-center">
          <ModeButton
            icon={<MdMemory />}
            label="プラスチックごみの分別"
            active={mode === 'separate'}
            onClick={changeSeparateMode}
          />

          <ModeButton
            icon={<BsArchiveFill />}
            label="アート素材の撮影"
            active={mode === 'store'}
            onClick={changeStoreMode}
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
