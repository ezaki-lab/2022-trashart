import Head from 'next/head';

const Main = ({ children, title, description, className = '', style }) => {
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
        className={className !== '' ? className : 'p-5 pb-16 h-[calc(100%-5rem)] overflow-x-hidden overflow-y-auto'}
        style={style}
      >
        {children}
      </div>
    </>
  );
};

export default Main;
