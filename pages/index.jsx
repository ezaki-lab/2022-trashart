import Head from 'next/head';
import useRedirect from '../hooks/useRedirect';
import Main from '../components/main';

const title = '';
const description = 'アート製作を通じた海洋ごみ処理';

const Home = (props) => {
  useRedirect('/home');

  return (
    <Main
      title={title}
      description={description}
    >
      <Head>
        {props.twImgUrl !== null && (
          <>
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="MARINE TRASHART で作りました" name="twitter:title" />
            <meta content="" name="twitter:description" />
            <meta name="twitter:image" content={props.twImgUrl} />
            <meta content={props.twImgUrl} property="og:image" />
            <link as="image" crossOrigin="anonymous" href={props.twImgUrl} rel="preload" />
          </>
        )}
      </Head>
    </Main>
  );
};

export const getServerSideProps = async ({ req, res, query }) => {
  return {
    props: {
      twImgUrl: query.id !== undefined
        ? process.env.NEXT_PUBLIC_API_URL + '/storage/works/' + query.id + '.png'
        : null,
    }
  };
};


export default Home;
