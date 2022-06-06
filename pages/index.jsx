import useRedirect from '../hooks/useRedirect';
import Main from '../components/main';

const title = 'ホーム';
const description = 'アート製作を通じた海洋ごみ処理';

const Home = () => {
  useRedirect('/social');

  return (
    <Main
      title={title}
      description={description}
    >
    </Main>
  );
};

export default Home;
