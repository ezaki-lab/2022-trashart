// 参考: https://codesandbox.io/s/7push?file=/src/BallPit.js:686-891

import { useCallback, useEffect, useRef } from 'react';
import { Image as DreiImage } from '@react-three/drei';
import { ARCanvas } from '../../lib/react-xr';
// import { ARCanvas } from '@react-three/xr';
import sleep from '../../utils/sleep';
import { pickRandom } from '../../utils/random';
import { getElementByIdAfterShown, getOneElementByTagAttrs } from '../../utils/element';

const polarRandom = () => (0.5 - Math.random()) * 2;
const randomRange = (min, max) => min + (Math.random() * max - min);
// const polarRange = (min, max) => min + (polarRandom() * max - min);

const colors = [
  '#25282F',
  '#314469',
  '#236C8E',
  '#F0E5E1',
  '#D2AD93',
  '#DB7C2F',
  '#CD6961',
];

const Ar = ({ setIsAr, blueprintUrl }) => {
  // const ArButton = useRef();
  // const ArEndButton = useRef();

  // useEffect(() => {
  //   console.log('こんにちは！');
  //   (async () => {
  //     // ARボタンが出現したら要素を取得
  //     ArButton.current = await getElementByIdAfterShown('ARButton');
  //     await sleep(10);

  //     // ARボタンを非表示にして、押したときの処理をする
  //     ArButton.current.style = 'display: none';
  //     ArButton.current.click();

  //     // AR終了ボタンをクリックしたら、ARコンポーネントを取り除く
  //     ArEndButton.current = getOneElementByTagAttrs('svg', [
  //       { name: 'width', value: '38' },
  //       { name: 'height', value: '38' }
  //     ]);
  //     ArEndButton.current.addEventListener('click', endAr);
  //   })();

  //   return () => {
  //     // AR関連の要素を削除
  //     console.log('現在のArEndButton');
  //     console.log(ArEndButton.current);
  //     console.log('現在のArButton');
  //     console.log(ArButton.current);

  //     try {
  //       ArEndButton.current.removeEventListener('click', endAr);
  //       ArEndButton.current.parentElement.remove();
  //       ArButton.current.remove();
  //     } catch (e) {
  //       console.log('できませんでした');
  //     }
  //   };
  // }, [endAr]);

  useEffect(() => {
    console.log(blueprintUrl);
  }, [blueprintUrl]);

  // const endAr = useCallback(() => {
  //   console.log('実行されましたよ☆');
  //   setIsAr(false);
  // }, [setIsAr]);

  return (
    <ARCanvas
      sessionInit={{ requiredFeatures: ['hit-test'] }}
      pixelRatio={window.devicePixelRatio}
    >
      <ambientLight />
      {blueprintUrl !== '' && <DreiImage
        url={blueprintUrl}
        rotate={[0, 0, Math.PI / 2]}
        position={[0, 0, 0]}
      />}
      <Ball
        position={[0, 0, 0]}
      />
      {/* 1mぐらい離れたところに描画される */}
      <Ball
        position={[3, 3, 0]}
      />
      <Ball
        position={[-3, 3, 0]}
      />
      <Ball
        position={[3, -3, 0]}
      />
      <Ball
        position={[-3, -3, 0]}
      />
      {/* <group>
        {new Array(512).fill(0).map((v, i) => {
          return (
            <Ball
              key={`${i}-ball`}
              position={[polarRange(1, 10), polarRange(1, 10), polarRange(1, 3)]}
            />
          );
        })}
      </group> */}
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
