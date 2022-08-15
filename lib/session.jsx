import Head from 'next/head';

const Session = ({ children, title, description, padding = true }) => {
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

      <div className={padding ? 'p-3 pt-20' : null}>
        {children}
      </div>
    </>
  );
};

export default Session;
