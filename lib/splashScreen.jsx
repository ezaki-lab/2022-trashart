import { useEffect, useState } from 'react';
import Loop from '../components/loop';
import { pickRandom } from '../utils/random';
import url from '../utils/url';

const SplashScreen = () => {
  return (
    <div className="w-full h-full bg-white fixed top-0 z-20">
      <div className="w-full h-full flex flex-wrap items-end content-start">
        <Loop times={5 * 12}>
          <RandomTile />
        </Loop>
      </div>
      <div className="w-full h-full border-[1rem] border-white absolute top-0" />

      <div className="p-8 w-2/3 h-56 bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center absolute inset-0 m-auto">
        <img
          src={url('/logo.svg')}
          alt="ロゴ"
          className="w-full"
        />

        <div className="mt-10 text-gray-500">
          {process.env.NEXT_PUBLIC_BUILT_AT && (
            <div className="text-center">
              {process.env.NEXT_PUBLIC_BUILT_AT} Built
            </div>
          )}

          <small className="text-lg">
            © 2022 ezaki-lab.com
          </small>
        </div>
      </div>
    </div>
  );
};

const RandomTile = () => {
  const colors = [
    'bg-red-400',
    'bg-lime-300',
    'bg-sky-500',
    'bg-sky-400',
    'bg-blue-600'
  ];

  const [color, setColor] = useState('bg-white');

  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() > 0.7) {
        setColor(pickRandom(colors));
      }
    }, 200);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className={`w-[20vw] h-[20vw] ${color} transition-all`} />
  );
};

export default SplashScreen;
