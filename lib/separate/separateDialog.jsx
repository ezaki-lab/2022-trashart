import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MdClose } from 'react-icons/md';

const SeparateDialog = ({ isShow, onClose }) => {
  const [plasticType, setPlasticType] = useState(null);

  const handleDetected = () => {
    setPlasticType('PE');
    setTimeout(onClose, 10000);
  };

  useEffect(() => {
    if (!isShow) {
      return;
    }

    const id = setTimeout(handleDetected, 1500);
    return () => {
      setPlasticType(null);
      clearTimeout(id);
    };
  }, [isShow]);

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

                {plasticType
                  ? (
                    <>
                      <div className="my-2 text-center">
                        <h2 className="mb-5">
                          <div className="text-separating-700 text-8xl font-bold">
                            {plasticType}
                          </div>
                          <div className="text-gray-500">
                            ポリエチレン
                          </div>
                        </h2>

                        海洋ブイやボトルなどで使われている樹脂です。
                        ポリエチレンは高温に熱して化学反応を起こすことで、
                        石油に戻すことも可能です。
                      </div>

                      <div className="text-gray-400 text-center">
                        10秒後にカメラに戻ります...
                      </div>
                    </>
                  )
                  : (
                    <div>
                      Loading...
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
