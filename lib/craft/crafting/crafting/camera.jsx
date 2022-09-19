import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import Linking from '../../../../components/linking';
import useSession from '../../../../hooks/useSession';
import WebCamera from '../../../webCamera/webCamera';
import { artIdAtom } from '../../../../models/stores';

const Camera = () => {
  const { setMode } = useSession();
  const [artId] = useAtom(artIdAtom);
  const [supportImgUrl, setSupportImgUrl] = useState(null);

  const backPortal = useCallback(() => {
    setMode('portal');
  }, [setMode]);

  useEffect(() => {
    if (artId === '') {
      return;
    }

    fetch(process.env.NEXT_PUBLIC_API_URL + '/arts/' + artId)
      .then((res) => res.json())
      .then((json) => {
        setSupportImgUrl(json["support_image_url"]);
      });
  }, [artId]);


  return (
    <div className="w-full h-[calc(100%-5rem)] fixed top-0 left-0">
      <WebCamera facingMode="environment" />

      {supportImgUrl && (
        <>
          <img
            src={supportImgUrl}
            alt="補助画像"
            className="w-full opacity-50 pointer-events-none absolute m-auto inset-0"
          />
        </>
      )}

      <button
        className="text-white text-xl fixed left-5 top-4"
        onClick={backPortal}
      >
        ←戻る
      </button>

      <Linking
        href="/craft/share"
        className="m-auto w-48 h-16 text-white text-2xl text-center leading-[4rem] font-bold bg-crafting-500 rounded-2xl shadow-xl absolute inset-x-0 bottom-4"
      >
        完成
      </Linking>
    </div>
  );
};

export default Camera;
