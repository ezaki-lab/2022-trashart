import Head from 'next/head';

const Main = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title} - MARINE TRASHART</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      {children}
    </>
  );
};

export default Main;
