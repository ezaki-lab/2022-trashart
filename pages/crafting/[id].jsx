import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import Main from '../../components/main';
import Camera from '../../lib/crafting/camera';

const title = '製作';
const description = '製作しましょう！';

const Canvas = dynamic(
  () => import('../../lib/crafting/canvas'),
  { ssr: false }
);
const Nav = dynamic(
  () => import('../../lib/crafting/nav'),
  { ssr: false }
);

const Crafting = () => {
  const router = useRouter();
  const query = router.query;

  const displayObj = useRef(null);
  const canvasObj = useRef(null);

  const [craftingId, setCraftingId] = useState('');
  const [blueprintUrl, setBlueprintUrl] = useState('');

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (query.id === undefined) {
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/craftings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'base_id': query.id
      })
    })
      .then((res) => res.json())
      .then((json) => {
        setCraftingId(json['id']);
      });
  }, [query.id]);

  useEffect(() => {
    setWidth(displayObj.current.clientWidth);
    setHeight(displayObj.current.clientHeight);
  }, [displayObj.current]);

  const handleClickAr = useCallback(() => {
    setIsAr(true);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/craftings/${craftingId}/blueprint`, {
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
        {craftingId !== '' &&
          <Camera id={craftingId} />
        }

        {/* <Canvas
          width={width}
          height={height}
          canvasRef={canvasObj}
        />

        <Nav
          onClickAr={handleClickAr}
        /> */}
      </div>
    </Main>
  );
};

export default Crafting;
