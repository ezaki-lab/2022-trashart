import { useCallback, useRef, useState } from 'react';
import { MdMemory } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import WebCamera from '../webCamera/webCamera';
import ModeButton from '../modeButton';
import Modal from './modal';
import api from '../../models/apiClient';
import sleep from '../../utils/sleep';

const Camera = () => {
  const [isShowSeparate, setIsShowSeparate] = useState(false);

  const [isTaking, setIsTaking] = useState(false);
  const [isTookLighted, setIsTookLighted] = useState(false);
  const [isTookLed850, setIsTookLed850] = useState(false);
  const [isTookLed940, setIsTookLed940] = useState(false);

  const [detectedImage, setDetectedImage] = useState(null);
  const [detectedColor, setDetectedColor] = useState(null);
  const [detectedPlastic, setDetectedPlastic] = useState(null);

  const camera = useRef(null);

  const takePhoto = () => {
    try {
      return camera.current.takePhoto();
    } catch (_) {
      return '';
    }
  };

  const takePhotos = useCallback(async () => {
    setIsTaking(true);

    await sleep(300);

    const b64Lighted = takePhoto();
    setIsTookLighted(true);
    await sleep(1500);

    const b64Led850 = takePhoto();
    setIsTookLed850(true);
    await sleep(1500);

    const b64Led940 = takePhoto();
    setIsTookLed940(true);

    if (b64Lighted === '' || b64Led850 === '' || b64Led940 === '') {
      return;
    }

    setIsShowSeparate(true);

    api.post('/separate', {
      'image_lighted': b64Lighted,
      'image_led850': b64Led850,
      'image_led940': b64Led940
    })
      .then((res) => {
        console.log(res.data);
        setDetectedImage(res.data['image']);
        setDetectedColor(res.data['color']);
        setDetectedPlastic(res.data['results'][0]['name']);
      });
  }, []);

  const closeSeparateDialog = useCallback(() => {
    setIsShowSeparate(false);
    setIsTaking(false);
    setIsTookLighted(false);
    setIsTookLed850(false);
    setIsTookLed940(false);
    setDetectedImage(null);
    setDetectedColor(null);
    setDetectedPlastic(null);
  }, [setIsShowSeparate, setIsTaking, setIsTookLighted, setIsTookLed850, setIsTookLed940, setDetectedImage, setDetectedColor, setDetectedPlastic]);

  return (
    <section className="size-main layout-main-fixed">
      <WebCamera facingMode="environment" ref={camera} />

      <div className="w-full sm:w-24 lg:w-full h-44 sm:h-full lg:h-44 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-evenly absolute bottom-0 right-0">
        <div className="mb-1 sm:m-auto lg:mb-1 w-full sm:w-auto lg:w-full flex flex-col items-center static sm:fixed lg:static top-5 inset-x-0 left-20">
          <ModeButton
            icon={<MdMemory />}
            label="プラスチックごみの分別"
            active={true}
          />
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

        <Modal
          isShow={isShowSeparate}
          onClose={closeSeparateDialog}
          image={detectedImage}
          color={detectedColor}
          plastic={detectedPlastic}
        />
      </div>
    </section>
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
