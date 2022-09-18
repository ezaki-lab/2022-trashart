import Head from 'next/head';
import useRedirect from '../hooks/useRedirect';
import Main from '../components/main';

const title = 'MARINE TRASHART';
const description = 'アート製作を通じた海洋ごみ処理';

const Home = (props) => {
  useRedirect('/home');

  return (
    <Main
      title={title}
      description={description}
    >
      <Head>
        {props.imgUrl !== null && (
          <>
            <meta property="og:url" content="https://ezaki-lab.cloud/~trashart" />
            <meta property="og:title" content="海洋ごみアート - MARINE TRASHART" />
            <meta property="og:type" content="article" />
            <meta property="og:description" content="あなたも海洋ごみアートを作りませんか？" />
            <meta property="og:image" content={props.imgUrl} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@takara2314" />
            <meta property="og:site_name" content="MARINE TRASHART" />
            <meta property="og:locale" content="ja_JP" />
          </>
        )}
      </Head>
    </Main>
  );
};

export const getServerSideProps = async ({ req, res, query }) => {
  return {
    props: {
      imgUrl: query.id !== undefined
        ? process.env.NEXT_PUBLIC_API_URL + '/storage/works/' + query.id + '.png'
        : null,
    }
  };
};


export default Home;
