import { useCallback, useRef, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import WebCamera from '../webCamera/webCamera';
import api from '../../models/apiClient';
import sleep from '../../utils/sleep';

const Camera = () => {
  const [isTaking, setIsTaking] = useState(false);
  const [isTookLighted, setIsTookLighted] = useState(false);
  const [isTookLed850, setIsTookLed850] = useState(false);
  const [isTookLed940, setIsTookLed940] = useState(false);

  const [message, setMessage] = useState(false);

  const [plasticType, setPlasticType] = useState('PP');
  const [plasticColor, setPlasticColor] = useState('red');

  const camera = useRef(null);

  const takePhoto = () => {
    try {
      return camera.current.takePhoto();
    } catch (_) {
      return '';
    }
  };

  const closeSeparateDialog = useCallback(() => {
    setIsTaking(false);
    setIsTookLighted(false);
    setIsTookLed850(false);
    setIsTookLed940(false);
  }, [setIsTaking, setIsTookLighted, setIsTookLed850, setIsTookLed940]);

  const takePhotos = useCallback(async () => {
    setMessage('撮影中・・・');
    setIsTaking(true);

    await sleep(500);

    const b64Lighted = takePhoto();
    setIsTookLighted(true);
    await sleep(1000);

    const b64Led850 = takePhoto();
    setIsTookLed850(true);
    await sleep(1000);

    const b64Led940 = takePhoto();
    setIsTookLed940(true);

    if (b64Lighted === '' || b64Led850 === '' || b64Led940 === '') {
      return;
    }

    setMessage('サーバーに送信しています・・・');

    api.post('/separate-train', {
      'plastic_type': plasticType,
      'plastic_color': plasticColor,
      'image_lighted': b64Lighted,
      'image_led850': b64Led850,
      'image_led940': b64Led940
    })
      .then(() => {
        setMessage('画像が保存されました');
        closeSeparateDialog();
      })
      .catch(() => {
        setMessage('サーバーエラーが発生しました');
      });
  }, [setMessage, plasticType, plasticColor, closeSeparateDialog]);

  return (
    <section className="size-main layout-main-fixed">
      <WebCamera facingMode="environment" ref={camera} />

      <div className="w-full sm:w-24 lg:w-full h-44 sm:h-full lg:h-44 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-evenly absolute bottom-0 right-0">
        <div className="mb-1 sm:m-auto lg:mb-1 w-full sm:w-auto lg:w-full flex flex-col items-center static sm:fixed lg:static top-5 inset-x-0 left-20">
          <h1 className="text-separating-200">
            判別の学習データ集め
          </h1>
        </div>

        <div className="w-full h-16 flex flex-col items-center justify-center">
          {!isTaking
            ? (
              <button
                className="w-16 h-16 bg-gray-300 border-4 border-white rounded-full opacity-75"
                onClick={takePhotos}
              />
            ) : (
              <TakeProgress
                isTookLighted={isTookLighted}
                isTookLed850={isTookLed850}
                isTookLed940={isTookLed940}
              />
            )
          }
        </div>
      </div>

      <div className="p-4 w-full fixed top-0 left-0">
        <ChooseType plasticType={plasticType} setPlasticType={setPlasticType} />
        <ChooseColor plasticColor={plasticColor} setPlasticColor={setPlasticColor} />
        <div className="mt-2 text-white text-center">
          {message}
        </div>
      </div>
    </section>
  );
};

const ChooseType = ({ plasticType, setPlasticType }) => {
  return (
    <div className="-mt-2 flex flex-row justify-between">
      <button className={
        plasticType === 'PP'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-separating-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-separating-800 font-medium bg-separating-200 rounded-xl'
      } onClick={() => { setPlasticType('PP'); }}>
        PP
      </button>

      <button className={
        plasticType === 'PE'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-separating-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-separating-800 font-medium bg-separating-200 rounded-xl'
      } onClick={() => { setPlasticType('PE'); }}>
        PE
      </button>

      <button className={
        plasticType === 'PET'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-separating-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-separating-800 font-medium bg-separating-200 rounded-xl'
      } onClick={() => { setPlasticType('PET'); }}>
        PET
      </button>

      <button className={
        plasticType === 'PS'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-separating-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-separating-800 font-medium bg-separating-200 rounded-xl'
      } onClick={() => { setPlasticType('PS'); }}>
        PS
      </button>
    </div>
  );
};

const ChooseColor = ({ plasticColor, setPlasticColor }) => {
  return (
    <div className="mt-3 flex flex-row justify-between flex-wrap">
      <button className={
        plasticColor === 'white'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-crafting-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-crafting-800 font-medium bg-crafting-200 rounded-xl'
      } onClick={() => { setPlasticColor('white'); }}>
        white
      </button>

      <button className={
        plasticColor === 'gray'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-crafting-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-crafting-800 font-medium bg-crafting-200 rounded-xl'
      } onClick={() => { setPlasticColor('gray'); }}>
        gray
      </button>

      <button className={
        plasticColor === 'black'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-crafting-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-crafting-800 font-medium bg-crafting-200 rounded-xl'
      } onClick={() => { setPlasticColor('black'); }}>
        black
      </button>

      <button className={
        plasticColor === 'red'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-crafting-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-crafting-800 font-medium bg-crafting-200 rounded-xl'
      } onClick={() => { setPlasticColor('red'); }}>
        red
      </button>

      <button className={
        plasticColor === 'brown'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-crafting-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-crafting-800 font-medium bg-crafting-200 rounded-xl'
      } onClick={() => { setPlasticColor('brown'); }}>
        brown
      </button>

      <button className={
        plasticColor === 'yellow'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-crafting-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-crafting-800 font-medium bg-crafting-200 rounded-xl'
      } onClick={() => { setPlasticColor('yellow'); }}>
        yellow
      </button>

      <button className={
        plasticColor === 'green'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-crafting-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-crafting-800 font-medium bg-crafting-200 rounded-xl'
      } onClick={() => { setPlasticColor('green'); }}>
        green
      </button>

      <button className={
        plasticColor === 'blue'
          ? 'mt-2 w-20 h-10 text-white font-medium bg-crafting-700 rounded-xl'
          : 'mt-2 w-20 h-10 text-crafting-800 font-medium bg-crafting-200 rounded-xl'
      } onClick={() => { setPlasticColor('blue'); }}>
        blue
      </button>
    </div>
  );
};

const TakeProgress = ({ isTookLighted, isTookLed850, isTookLed940 }) => {
  return (
    <ul className="-mt-7 px-5 w-full h-full text-xl">
      <li className={
        isTookLighted
          ? 'text-white flex flex-row'
          : 'text-neutral-400 flex flex-row'
      }>
        {isTookLighted ? <BsCheckLg /> : <LoadingIcon />}
        <div className="-mt-1 pl-5">
          白色LEDを照射して撮影
        </div>
      </li>

      <li className={
        isTookLed850
          ? 'text-white mt-2 flex flex-row'
          : 'text-neutral-400 mt-2 flex flex-row'
      }>
        {isTookLed850 ? <BsCheckLg /> : <LoadingIcon />}
        <div className="-mt-1 pl-5">
          近赤外線(850nm)を照射して撮影
        </div>
      </li>

      <li className={
        isTookLed940
          ? 'text-white mt-2 flex flex-row'
          : 'text-neutral-400 mt-2 flex flex-row'
      }>
        {isTookLed940 ? <BsCheckLg /> : <LoadingIcon />}
        <div className="-mt-1 pl-5">
          近赤外線(940nm)を照射して撮影
        </div>
      </li>
    </ul>
  );
};

const LoadingIcon = () => {
  return (
    <div className="animate-spin h-5 w-5 border-4 border-neutral-400 rounded-full border-t-transparent" />
  );
};

export default Camera;
