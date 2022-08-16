import useRedirect from '../hooks/useRedirect';
import Main from '../components/main';

const title = '';
const description = 'アート製作を通じた海洋ごみ処理';

const Home = () => {
  useRedirect('/home');

  return (
    <Main
      title={title}
      description={description}
    >
    </Main>
  );
};

export default Home;
