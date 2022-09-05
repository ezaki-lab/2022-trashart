import { useCallback } from 'react';
import Linking from '../../../components/linking';
import useSession from '../../../hooks/useSession';
import WebCamera from '../../webCamera/webCamera';

const Camera = () => {
  const { setSection } = useSession();

  const backPortal = useCallback(() => {
    setSection('portal');
  }, [setSection]);

  return (
    <div className="w-full h-full fixed top-0 left-0">
      <WebCamera facingMode="environment" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img
        src={blueprintUrl}
        alt="設計図"
        width={width}
        className="opacity-50 pointer-events-none absolute m-auto inset-0"
      /> */}

      <button
        className="text-white text-xl fixed left-5 top-32"
        onClick={backPortal}
      >
        ←戻る
      </button>

      <Linking
        href="/share"
        className="m-auto w-48 h-16 text-white text-2xl text-center leading-[4rem] font-bold bg-crafting-500 rounded-2xl shadow-xl fixed inset-x-0 bottom-8"
      >
        完成
      </Linking>
    </div>
  );
};

export default Camera;
