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
        className="w-full h-[calc(100vh-4rem)] relative"
        ref={canvasObj}
      >
        <Canvas
          width={width}
          height={height}
        />
        <div className="w-full h-20 flex absolute bottom-0">
          <button
            className="text-lg btn border-none text-white bg-crafting hover:bg-orange-700 shadow-lg m-auto"
          >
            ARで置いてみる
          </button>
          <button
            className="px-5 text-lg btn border-none text-white bg-crafting hover:bg-orange-700 shadow-lg m-auto"
          >
            完成
          </button>
        </div>
      </div>
    </Main>
  );
};

export default Crafting;
