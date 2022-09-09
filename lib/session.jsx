import Head from 'next/head';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import SessionAppBar from './sessionAppBar';
import { sessionIdAtom } from '../models/stores';

const Session = ({ children, title, description, className = '', style }) => {
  const [sessionId, setSessionId] = useAtom(sessionIdAtom);

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

      <SessionAppBar />

      <div
        className={className !== '' ? className : 'p-5 pt-28'}
        style={style}
      >
        {children}
      </div>
    </>
  );
};

export default Session;
