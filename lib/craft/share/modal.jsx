import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Modal = ({ counter, isShow, onClose }) => {
  const [counterShowing, setCounterShowing] = useState(0);

  useEffect(() => {
    if (!isShow) {
      return;
    }

    setCounterShowing(counter);

    const interval = setInterval(() => {
      setCounterShowing(counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isShow, counter]);

  useEffect(() => {
    if (!isShow) {
      return;
    }

    const id = setTimeout(onClose, 10000);
    return () => {
      clearTimeout(id);
    };
  }, [isShow, onClose]);

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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-crafting-100 p-6 text-left align-middle shadow-xl transition-all">
                <div className="my-2 text-center">
                  <h2 className="mb-5">
                    <div className="text-crafting-900">
                      これまでごみアートを作った数
                    </div>
                    <div className="text-crafting-600 text-8xl font-bold">
                      {counterShowing}
                    </div>
                  </h2>

                  ごみアートを作るために、たくさんの海洋ごみを拾いました。
                  これからも、
                  <span className="px-1 text-crafting-500 font-medium">
                    地球に優しい行動
                  </span>
                  を行っていきましょう！
                </div>

                <div className="text-gray-400 text-center">
                  10秒後にトップ画面に戻ります...
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
