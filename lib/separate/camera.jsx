import { useCallback, useRef, useState } from 'react';
import WebCamera from '../webCamera/webCamera';
import ModeButton from '../modeButton';
import { MdMemory } from 'react-icons/md';
import SeparateDialog from './separateDialog';

const Camera = () => {
  const [isShowSeparate, setIsShowSeparate] = useState(false);

  const [message, setMessage] = useState('');

  const camera = useRef(null);

  const takePhoto = useCallback(() => {
    const b64 = camera.current.takePhoto();
    setIsShowSeparate(true);

    setMessage('サーバーに送信中…');

    fetch(process.env.NEXT_PUBLIC_API_URL + '/pick/separate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'data': b64
      })
    })
      .then(() => {
        setMessage('保存成功');
        setTimeout(() => {
          setMessage('');
        }, 3000);
      });
  }, []);

  const closeSeparateDialog = useCallback(() => {
    setIsShowSeparate(false);
  }, [setIsShowSeparate]);

  return (
    <section className="w-full h-[calc(100%-5rem)] fixed top-0 left-0">
      <WebCamera facingMode="environment" ref={camera} />

      <div className="text-white w-full h-12 bg-[rgba(0,0,0,0.5)] absolute top-0">
        {message}
      </div>

      <div className="w-full h-44 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-evenly absolute bottom-0">
        <div className="mb-1 w-full flex flex-col items-center">
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

        <SeparateDialog
          isShow={isShowSeparate}
          onClose={closeSeparateDialog}
        />
      </div>
    </section>
  );
};

export default Camera;
