import Head from 'next/head';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userIdAtom, sessionIdAtom } from '../models/stores';

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

    fetch(process.env.NEXT_PUBLIC_API_URL + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
      .then(res => res.json())
      .then((json) => {
        localStorage.setItem('userId', json['id']);
        setUserId(json['id']);
      });
  }, []);

  useEffect(() => {
    if (sessionId !== '') {
      return;
    }

    fetch(process.env.NEXT_PUBLIC_API_URL + '/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
      .then(res => res.json())
      .then((json) => {
        setSessionId(json['id']);
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
