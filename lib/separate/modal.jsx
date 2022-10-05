import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MdClose } from 'react-icons/md';

const plasticNameJp = {
  'PP': 'ポリプロピレン',
  'PE': 'ポリエチレン',
  'PET': 'ポリエチレンテレフタレート',
  'PS': 'ポリスチレン'
};

const colorNameJp = {
  'white': '白',
  'gray': '灰',
  'black': '黒',
  'red': '赤',
  'brown': '茶',
  'yellow': '黄',
  'green': '緑',
  'blue': '青'
};

const details = {
  'PP': '身の回りの箱や容器などで使われている樹脂です。再生可能です。',
  'PE': '海洋ブイやボトルなどで使われている樹脂です。ポリエチレンは高温に熱して化学反応を起こすことで、石油に戻すことも可能です。',
  'PET': 'ペットボトルや飲料用の容器などで使われている樹脂です。再生可能です。',
  'PS': '食品トレーで使われている樹脂です。再生可能です。'
};

const SeparateDialog = ({ isShow, onClose, image, color, plastic }) => {
  useEffect(() => {
    if (plastic === null) {
      return;
    }

    const id = setTimeout(onClose, 10000);
    return () => {
      clearTimeout(id);
    };
  }, [plastic, onClose]);

  return (
    <Transition appear show={isShow} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-separating-100 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h1"
                  className="text-lg text-separating-800 font-medium"
                >
                  プラスチックごみの分別
                </Dialog.Title>

                <button
                  className="absolute top-5 right-5"
                  onClick={onClose}
                >
                  <MdClose
                    size="2rem"
                    color="rgb(50, 50, 50)"
                  />
                </button>

                {plastic
                  ? (
                    <>
                      <div className="my-2 text-center">
                        <h2 className="mb-5 flex flex-col items-center">
                          <div className="text-separating-700 text-8xl font-bold">
                            {plastic}
                          </div>
                          <div className="text-gray-500 flex flex-row">
                            <div className="pr-8">
                              {colorNameJp[color]}色
                            </div>
                            <div>
                              {plasticNameJp[plastic]}
                            </div>
                          </div>
                        </h2>

                        <div className="grid grid-cols-3 gap-4">
                          <img
                            src={image}
                            alt="検出画像"
                            className="w-full rounded-xl"
                          />
                          <div className="col-span-2">
                            {details[plastic]}
                          </div>
                        </div>
                      </div>

                      <div className="text-gray-400 text-center">
                        10秒後にカメラに戻ります...
                      </div>
                    </>
                  )
                  : (
                    <div className="w-full h-full text-gray-500 flex flex-col justify-center">
                      <div className="mt-10 flex flex-col items-center">
                        <div className="mb-8 animate-spin h-20 w-20 bg-separating-300 rounded-xl" />
                        撮影した画像から素材を判定しています...
                      </div>
                    </div>
                  )
                }
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SeparateDialog;
