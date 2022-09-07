import { useCallback, useEffect } from 'react';
import { useAtom } from 'jotai';
import { MdMemory } from 'react-icons/md';
import { Headline1 } from '../../../components/headline';
import Linking from '../../../components/linking';
import useSession from '../../../hooks/useSession';
import { materialB64Atom, materialsAtom } from '../../../models/stores';

const Result = () => {
  const { setSection, setMode } = useSession();

  const [materialB64, setMaterialB64] = useAtom(materialB64Atom);
  const [materials, setMaterials] = useAtom(materialsAtom);

  const retake = useCallback(() => {
    setSection('camera');
  }, []);

  useEffect(() => {
    setMode('result');

    if (materialB64 === '') {
      return;
    }

    fetch(process.env.NEXT_PUBLIC_API_URL + '/pick/store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'data': materialB64
      })
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMaterials(json['materials']);
      });
  }, []);

  return (
    <section className="text-center">
      <Headline1
        label="アート素材の撮影"
        textColor="text-picking-500"
        icon={<MdMemory />}
        iconColor="rgb(12, 203, 232)"
        className="mb-2"
      />

      これだけの素材が集まりました。

      {materials.length === 0
        ? (
          <div className="mt-5 w-32 h-32 bg-picking-700" />
        )
        : (
          <div className="w-full flex flex-wrap">
            {materials.map((material) =>
              // eslint-disable-next-line @next/next/no-img-element
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

      <div className="w-full h-40 fixed left-0 bottom-0">
        <div className="mt-10">
          <Linking
            href="/craft"
            className="px-10 py-5 text-white text-2xl font-bold bg-picking-500 rounded-2xl shadow-xl"
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
    </section>
  );
};

export default Result;
