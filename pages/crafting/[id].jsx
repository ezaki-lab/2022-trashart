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
  const displayObj = useRef(null);
  const canvasObj = useRef(null);

  const [craftingId, setCraftingId] = useState('');
  const [blueprintUrl, setBlueprintUrl] = useState('');

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [isAr, setIsAr] = useState(false);

  useEffect(() => {
    fetch('https://ezaki-lab.cloud/~trashart/api/craftings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'base_id': ''
      })
    })
      .then((res) => res.json())
      .then((json) => {
        setCraftingId(json['id']);
      });
  }, []);

  useEffect(() => {
    setWidth(displayObj.current.clientWidth);
    setHeight(displayObj.current.clientHeight);
  }, [displayObj.current]);

  const handleClickAr = useCallback(() => {
    setIsAr(true);

    fetch(`https://ezaki-lab.cloud/~trashart/api/craftings/${craftingId}/blueprint`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'data': canvasObj.current.toDataURL()
      })
    })
      .then((res) => res.json())
      .then((json) => {
        setBlueprintUrl(json['url']);
      });
  }, [canvasObj.current]);

  return (
    <Main
      title={title}
      description={description}
      padding={false}
    >
      <div
        className="w-full h-[calc(100vh-4rem)] relative"
        ref={displayObj}
      >
        <Canvas
          width={width}
          height={height}
          canvasRef={canvasObj}
        />

        {isAr && <div className="w-full h-full bg-sky-100 absolute top-0 left-0">
          <Ar
            setIsAr={setIsAr}
            blueprintUrl={blueprintUrl}
          />
        </div>}

        <Nav
          onClickAr={handleClickAr}
        />
      </div>
    </Main>
  );
};

export default Crafting;
