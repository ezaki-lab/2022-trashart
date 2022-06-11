import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import Main from '../../components/main';

const title = '製作';
const description = '製作しましょう！';

const Canvas = dynamic(
  () => import('../../components/crafting/canvas'),
  { ssr: false }
);
const Ar = dynamic(
  () => import('../../components/crafting/ar'),
  { ssr: false }
);

const Crafting = () => {
  const canvasObj = useRef();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(canvasObj.current.clientWidth);
    setHeight(canvasObj.current.clientHeight);
  }, [canvasObj.current]);

  return (
    <Main
      title={title}
      description={description}
      padding={false}
    >
      <div
        className="w-full h-[calc(100vh-4rem)]"
        ref={canvasObj}
      >
        <Canvas
          width={width}
          height={height}
        />
      </div>
    </Main>
  );
};

export default Crafting;
