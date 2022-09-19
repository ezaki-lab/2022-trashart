import Head from 'next/head';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userIdAtom, sessionIdAtom } from '../models/stores';
import api from '../models/apiClient';

const Session = ({ children, title, description, className = '', style }) => {
  const [userId, setUserId] = useAtom(userIdAtom);
  const [sessionId, setSessionId] = useAtom(sessionIdAtom);

  useEffect(() => {
    if (userId !== '') {
      return;
    }

    if (localStorage.getItem('userId') !== null) {
      setUserId(localStorage.getItem('userId'));
      return;
    }

    api.post('/users', {})
      .then((res) => {
        setUserId(res.data['id']);
        localStorage.setItem('userId', res.data['id']);
      });
  }, [userId, setUserId]);

  useEffect(() => {
    if (sessionId !== '') {
      return;
    }

    api.post('/sessions', {})
      .then((res) => {
        setSessionId(res.data['id']);
      });
  }, []);

  return (
    <>
      <Head>
        {title === ''
          ? <title>MARINE TRASHART</title>
          : <title>{`${title} - MARINE TRASHART`}</title>
        }
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <div
        className={className ? className : 'p-5 pb-16 h-[calc(100%-5rem)] overflow-x-hidden overflow-y-auto'}
        style={style}
      >
        {children}
      </div>
    </>
  );
};

export default Session;
