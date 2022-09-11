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
        {props.twImgUrl !== null && <meta name="twitter:image" content={props.twImgUrl} />}
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
