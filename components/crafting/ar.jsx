// 参考: https://codesandbox.io/s/7push?file=/src/BallPit.js:686-891

import { useEffect, useRef } from 'react';
import { ARCanvas } from '@react-three/xr';
import sleep from '../../utils/sleep';

const polarRandom = () => (0.5 - Math.random()) * 2;
const randomRange = (min, max) => min + (Math.random() * max - min);
const polarRange = (min, max) => min + (polarRandom() * max - min);

const colors = [
  '#25282F',
  '#314469',
  '#236C8E',
  '#F0E5E1',
  '#D2AD93',
  '#DB7C2F',
  '#CD6961',
];

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const waitForARButton = async () => {
  while (true) {
    const element = document.getElementById('ARButton');
    if (element !== null) {
      return element;
    }
    await sleep(10);
  };
};

const waitForAREndButton = async () => {
  while (true) {
    const elements = document.getElementsByTagName('svg');
    for (const element of elements) {
      const width = element.getAttribute('width');
      const height = element.getAttribute('height');
      if (width === "38" && height === "38") {
        return element;
      }
    }

    await sleep(10);
  };
};

const Ar = ({ setIsAr }) => {
  const ArButton = useRef();
  const ArEndButton = useRef();

  useEffect(() => {
    // TODO: 1回目のスタート/エンドは上手くいくが、2回目以降はうまくいかないので修正する
    (async () => {
      ArButton.current = await waitForARButton();
      await sleep(10);

      ArButton.current.style = 'display: none';

      ArButton.current.click();

      ArEndButton.current = await waitForAREndButton();
      ArEndButton.current.addEventListener('click', () => {
        setIsAr(false);
      });
    })();
  }, [setIsAr]);

  return (
    <ARCanvas
      sessionInit={{ requiredFeatures: ['hit-test'] }}
      pixelRatio={window.devicePixelRatio}
    >
      <ambientLight />
      <group>
        {new Array(512).fill(0).map((v, i) => {
          return (
            <Ball
              key={`${i}-ball`}
              position={[polarRange(1, 10), polarRange(1, 10), polarRange(1, 3)]}
            />
          );
        })}
      </group>
    </ARCanvas>
  );
};

const Ball = (props) => {
  return (
    <mesh {...props}>
      <sphereBufferGeometry
        args={[randomRange(0.1, 0.3), 12, 12]}
        attach="geometry"
      />
      <meshBasicMaterial color={pickRandom(colors)} attach="material" />
    </mesh>
  );
};


export default Ar;
