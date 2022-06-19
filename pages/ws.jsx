import { useEffect, useState } from 'react';
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
    >
      <h1>{count}人の世界</h1>
      <div>
        <textarea
          value={textareaText}
          onInput={handleInput}
        />
      </div>
    </Main>
  );
};

export default WsTest;
