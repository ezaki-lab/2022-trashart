import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
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
const Nav = dynamic(
  () => import('../../components/crafting/nav'),
  { ssr: false }
);

const Crafting = () => {
  const canvasObj = useRef();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [isAr, setIsAr] = useState(false);

  useEffect(() => {
    setWidth(canvasObj.current.clientWidth);
    setHeight(canvasObj.current.clientHeight);
  }, [canvasObj.current]);

  const handleClickAr = useCallback(() => {
    setIsAr(true);
  }, []);

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

        {isAr && <div className="w-full h-full bg-sky-100 absolute top-0 left-0">
          <Ar />
        </div>}

        <Nav
          onClickAr={handleClickAr}
        />
      </div>
    </Main>
  );
};

export default Crafting;
