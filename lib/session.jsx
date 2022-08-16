import Head from 'next/head';
import SessionAppBar from './sessionAppBar';

const Session = ({ children, title, description, className = '' }) => {
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

      <div className={className !== '' ? className : 'p-5 pt-32'}>
        {children}
      </div>
    </>
  );
};

export default Session;