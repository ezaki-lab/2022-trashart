import { useCallback, useEffect } from 'react';
import { MdMemory } from 'react-icons/md';
import { Headline1 } from '../../../components/headline';
import Linking from '../../../components/linking';
import useSession from '../../../hooks/useSession';

const Result = () => {
  const { setSection, setMode } = useSession();

  const retake = useCallback(() => {
    setSection('camera');
  }, []);

  useEffect(() => {
    setMode('result');
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

      <div className="mt-5 w-32 h-32 bg-picking-700" />

      <div className="w-full h-40 fixed left-0 bottom-0">
        <div className="mt-10">
          <Linking
            href="/craft"
            className="px-10 py-5 text-white text-2xl font-bold bg-picking-400 rounded-2xl shadow-xl"
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
