import Main from '../components/main';
import Linking from '../components/linking';

const title = 'ホーム';
const description = 'アート製作を通じた海洋ごみ処理';

const Home = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <h1 className="text-2xl font-bold text-green-500 mb-3">
        MARINE TRASHART
      </h1>
      「MARINE TRASHART」はアート作品を作るために浜辺のごみを拾うことによって、
      ごみ問題解決に繋げることを支援します。
      <div className="mt-3">
        <Linking href="/next">
          次のページへ
        </Linking>
      </div>
    </Main>
  );
};

export default Home;
