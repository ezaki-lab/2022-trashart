import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import urlJoin from 'url-join';

const useSocketIo = (namespace = '') => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const uri = urlJoin(
      process.env.NEXT_PUBLIC_SOCKET_IO_URI,
      namespace
    );

    const path = urlJoin(
      process.env.NEXT_PUBLIC_SOCKET_IO_PATH,
      'socket.io'
    );

    setSocket(io(uri, { path: path, transports: ['polling'] }));
  }, [namespace]);

  return socket;
};

export default useSocketIo;
