import { useEffect, useState } from 'react';
import Loop from './loop';
import { randomChoice } from '../utils/random';

const SplashScreen = ({ style }) => {
  return (
    <div
      className="w-full h-full bg-white fixed top-0 z-20"
      style={style}
    >
      <div className="w-full h-full flex flex-wrap items-end content-start">
        <Loop times={5 * 12}>
          <RandomTile />
        </Loop>
      </div>
      <div className="w-full h-full border-[1rem] border-white absolute top-0" />

      <h1 className="w-72 h-20 text-white bg-blue-800 text-5xl leading-[4.2rem] text-center tracking-wide border-4 border-white shadow-2xl absolute inset-0 m-auto">
        TRASHART
      </h1>
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
        setColor(randomChoice(colors));
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
