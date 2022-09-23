import { useEffect, useState } from 'react';
import urlJoin from 'url-join';
import useSocketIo from '../hooks/useSocketIo';
import Main from '../components/main';

const title = 'WebSocketテスト';
const description = 'テストページです。';

const WsTest = () => {
  const socket = useSocketIo('test');

  const [count, setCount] = useState(0);
  const [textareaText, setTextareaText] = useState('');

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('count_update', (msg) => {
      setCount(msg.count);
    });

    socket.on('text_update', (msg) => {
      setTextareaText(msg.text);
    });

    return (() => {
      socket.disconnect();
    });
  }, [socket]);

  const handleInput = (e) => {
    setTextareaText(e.target.value);

    socket.emit('text_update_request',
      {
        'text': e.target.value
      }
    );
  };

  return (
    <Main
      title={title}
      description={description}
      className="size-main layout-main p-5 overflow-x-hidden overflow-y-auto bg-white sm:bg-yellow-100 md:bg-green-100 lg:bg-blue-100 xl:bg-red-100 2xl:bg-pink-100"
    >
      <h1 className="text-xl font-medium">
        {count}人が接続中です
      </h1>
      <textarea
        className="mt-5 w-full h-40 p-3 border-2 border-sky-300 rounded-xl"
        value={textareaText}
        onInput={handleInput}
      />
      <div className="mt-5 flex flex-row items-center">
        <div className="mr-4 w-3 h-3 rounded-full bg-lime-500" />
        {urlJoin(
          process.env.NEXT_PUBLIC_SOCKET_IO_URI,
          process.env.NEXT_PUBLIC_SOCKET_IO_PATH,
          'test',
          'socket.io'
        )}
      </div>
    </Main>
  );
};

export default WsTest;
