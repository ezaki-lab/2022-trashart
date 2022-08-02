import { useEffect, useState } from 'react';
import { Camera as WebCamera } from 'react-camera-pro';
import { useWindowSize } from 'react-use';

const Camera = ({ id }) => {
  const { width, height } = useWindowSize();

  const [blueprintUrl, setBlueprintUrl] = useState('');

  useEffect(() => {
    setBlueprintUrl(`${process.env.NEXT_PUBLIC_API_URL}/storage/blueprints/${id}.webp`);
  }, [id]);

  return (
    <>
      <WebCamera facingMode="environment" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={blueprintUrl}
        alt="設計図"
        width={width}
        className="opacity-50 pointer-events-none absolute m-auto inset-0"
      />
    </>
  );
};

export default Camera;
