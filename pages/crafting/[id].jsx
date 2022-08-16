import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import Session from '../../lib/session';
import Camera from '../../lib/crafting/camera';
import MaterialList from '../../lib/materialList/materialList';

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

  const [mode, setMode] = useState('camera');

  const displayObj = useRef(null);
  const canvasObj = useRef(null);

  const [craftingId, setCraftingId] = useState('');
  const [blueprintUrl, setBlueprintUrl] = useState('');

  const handleBackFromList = useCallback(() => {
    setMode('camera');
  }, []);

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
    <Session
      title={title}
      description={description}
      padding={false}
    >
      {mode === 'camera' &&
        <Camera
          id={craftingId}
          setMode={setMode}
        />
      }

      {mode === 'list' &&
        <MaterialList handleBack={handleBackFromList} />
      }
    </Session>
  );
};

export default Crafting;
