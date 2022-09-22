import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import { useAtom } from 'jotai';
import { userIdAtom, sessionIdAtom } from '../models/stores';
import api from '../models/apiClient';

const Session = ({ children, title, description, className = '', style }) => {
  const [userId, setUserId] = useAtom(userIdAtom);
  const [sessionId, setSessionId] = useAtom(sessionIdAtom);

  const checkValidUser = async (id) => {
    const res = await api.get(`/users/${id}`).catch(() => {
      return { data: null };
    });

    if (res.data === null) {
      return false;
    }

    return true;
  };

  const registerUser = useCallback(() => {
    api.post('/users', {})
      .then((res) => {
        setUserId(res.data['id']);
        localStorage.setItem('userId', res.data['id']);
      });
  }, [setUserId]);

  useEffect(() => {
    if (userId !== '') {
      return;
    }

    const id = localStorage.getItem('userId');
    if (id === null) {
      registerUser();
      return;
    }

    (async () => {
      if (await checkValidUser(id)) {
        setUserId(id);
      } else {
        registerUser();
      }
    })();
  }, [userId, setUserId, registerUser]);

  useEffect(() => {
    if (sessionId !== '') {
      return;
    }

    api.post('/sessions', {})
      .then((res) => {
        setSessionId(res.data['id']);
      });
  }, [sessionId, setSessionId]);

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
