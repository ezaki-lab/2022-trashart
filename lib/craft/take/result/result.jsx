import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { MdMemory } from 'react-icons/md';
import { Headline1 } from '../../../../components/headline';
import Linking from '../../../../components/linking';
import useSession from '../../../../hooks/useSession';
import { materialB64Atom, materialsAtom, sessionIdAtom } from '../../../../models/stores';
import api from '../../../../models/apiClient';

const Result = () => {
  const [sessionId] = useAtom(sessionIdAtom);

  const [materialB64] = useAtom(materialB64Atom);
  const [, setMaterials] = useAtom(materialsAtom);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (materialB64 === '' || sessionId === '') {
      return;
    }

    api.post(`/pick/${sessionId}/store`, {
      'image': materialB64
    })
      .then((res) => {
        console.log(res.data);
        setMaterials(res.data['materials']);
        setLoaded(true);
      });
  }, [materialB64, sessionId, setMaterials, setLoaded]);

  return (
    <section className="text-center">
      <Headline1
        label="アート素材の撮影"
        textColor="text-crafting-500"
        icon={<MdMemory />}
        iconColor="rgb(253, 188, 114)"
        className="mb-2"
      />

      {loaded ? <Loaded /> : <Waiting />}
    </section>
  );
};

const Loaded = () => {
  const [materials] = useAtom(materialsAtom);

  return (
    <>
      {materials.length === 0 ? <LoadedFailure /> : <LoadedSuccessful />}
    </>
  );
};

const LoadedSuccessful = () => {
  const { setMode } = useSession();

  const [materials] = useAtom(materialsAtom);

  const retake = useCallback(() => {
    setMode('camera');
  }, [setMode]);

  return (
    <>
      これだけの素材が集まりました。

      <div className="px-5 -ml-5 w-screen h-[calc(100vh-20rem)] overflow-scroll">
        {materials.length === 0
          ? (
            <div className="mt-5 w-32 h-32 bg-crafting-700" />
          )
          : (
            <div className="w-full flex flex-wrap">
              {materials.map((material) =>
                <img
                  src={material['image_url']}
                  alt="素材画像"
                  className="p-3"
                  key={material['id']}
                />
              )}
            </div>
          )
        }
      </div>

      <div className="mt-1 w-full h-28">
        <div className="pt-5">
          <Linking
            href="/craft/crafting"
            className="px-10 py-5 text-white text-2xl font-bold bg-crafting-500 rounded-2xl shadow-xl"
          >
            製作するアートを選ぶ
          </Linking>
        </div>

        <button
          className="mt-8 text-gray-500 text-xl font-medium"
          onClick={retake}
        >
          撮り直す
        </button>
      </div>
    </>
  );
};

const LoadedFailure = () => {
  const { setMode } = useSession();

  const retake = useCallback(() => {
    setMode('camera');
  }, [setMode]);

  return (
    <div className="h-[calc(100vh-11rem)] flex flex-col justify-center">
      <div className="flex flex-col items-center">
        画像中から素材が見つかりませんでした。

        <button
          className="mt-10 px-10 py-5 text-white text-2xl font-bold bg-crafting-500 rounded-2xl shadow-xl"
          onClick={retake}
        >
          撮り直す
        </button>
      </div>
    </div>
  );
};

const Waiting = () => {
  return (
    <div className="h-[calc(100vh-11rem)] text-gray-500 flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <div className="mb-8 animate-spin h-20 w-20 bg-crafting-200 rounded-xl" />
        撮影した画像から素材を確認しています…
      </div>
    </div>
  );
};

export default Result;
