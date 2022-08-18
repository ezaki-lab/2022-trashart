import { useCallback, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import WebCamera from '../../webCamera/webCamera';
import ToListButton from '../../ToListButton';

const Camera = ({ id, setMode }) => {
  const { width } = useWindowSize();

  const [blueprintUrl, setBlueprintUrl] = useState('');

  useEffect(() => {
    setBlueprintUrl(`${process.env.NEXT_PUBLIC_API_URL}/storage/blueprints/${id}.webp`);
  }, [id]);

  const handleToList = useCallback(() => {
    setMode('list');
  }, [setMode]);

  return (
    <div className="w-full h-full fixed top-0 left-0">
      <WebCamera facingMode="environment" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={blueprintUrl}
        alt="設計図"
        width={width}
        className="opacity-50 pointer-events-none absolute m-auto inset-0"
      />

      <ToListButton
        bgColor="bg-crafting-500"
        onClick={handleToList}
        posClassName="fixed bottom-5 left-5"
      />

      <button
        className="px-6 py-3 text-white text-xl font-medium bg-crafting-500 rounded-2xl shadow-xl fixed bottom-5 right-5"
      >
        設計図を編集する
      </button>
    </div>
  );
};

export default Camera;
