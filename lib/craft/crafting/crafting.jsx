import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import Camera from './camera';
import MaterialList from '../../materialList/materialList';

const Canvas = dynamic(
  () => import('../../../lib/craft/crafting/canvas'),
  { ssr: false }
);
const Nav = dynamic(
  () => import('../../../lib/craft/crafting/nav'),
  { ssr: false }
);

const Crafting = ({ id }) => {
  const [mode, setMode] = useState('camera');

  const displayObj = useRef(null);
  const canvasObj = useRef(null);

  const [blueprintUrl, setBlueprintUrl] = useState('');

  const handleBackFromList = useCallback(() => {
    setMode('camera');
  }, []);

  useEffect(() => {
    console.log('ID:', id);

    // fetch(`${process.env.NEXT_PUBLIC_API_URL}/craftings`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     'base_id': query.id
    //   })
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setCraftingId(json['id']);
    //   });
  }, [id]);

  const handleClickAr = useCallback(() => {
    setIsAr(true);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/craftings/${id}/blueprint`, {
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
    <>
      {mode === 'camera' &&
        <Camera
          id={id}
          setMode={setMode}
        />
      }

      {mode === 'list' &&
        <MaterialList handleBack={handleBackFromList} />
      }
    </>
  );
};

export default Crafting;
