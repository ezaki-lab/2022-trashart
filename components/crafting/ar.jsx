// 参考: https://codesandbox.io/s/7push?file=/src/BallPit.js:686-891

import { useCallback, useEffect, useRef } from 'react';
import { ARCanvas } from '@react-three/xr';
import sleep from '../../utils/sleep';
import { pickRandom } from '../../utils/random';
import { getElementByIdAfterShown, getOneElementByTagAttrs } from '../../utils/element';

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

const Ar = ({ setIsAr }) => {
  const ArButton = useRef();
  const ArEndButton = useRef();

  useEffect(() => {
    (async () => {
      // ARボタンが出現したら要素を取得
      ArButton.current = await getElementByIdAfterShown('ARButton');
      await sleep(10);

      // ARボタンを非表示にして、押したときの処理をする
      ArButton.current.style = 'display: none';
      ArButton.current.click();

      // AR終了ボタンをクリックしたら、ARコンポーネントを取り除く
      ArEndButton.current = getOneElementByTagAttrs('svg', [
        { name: 'width', value: '38' },
        { name: 'height', value: '38' }
      ]);
      ArEndButton.current.addEventListener('click', endAr);
    })();

    return () => {
      // AR関連の要素を削除
      ArEndButton.current.removeEventListener('click', endAr);
      ArButton.current.remove();
      ArEndButton.current.parentElement.remove();
    };
  }, [endAr]);

  const endAr = useCallback(() => {
    setIsAr(false);
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
