import Main from '../components/main';
import Linking from '../components/linking';

const title = 'ホーム';
const description = 'アート製作を通じた海洋ごみ処理';

const Home = () => {
  return (
    <Main
      title={title}
      description={description}
      className="p-3 flex flex-col items-center"
    >
      <div className="w-full h-16 flex flex-col items-end">
        <button
          className="w-16 h-16 bg-gray-300 rounded-full"
        />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="ロゴ"
        className="mt-16 w-5/6"
      />

      <Linking
        href="/pick"
        className="mt-10 px-20 py-5 text-white text-2xl font-bold bg-sky-400 rounded-2xl shadow-xl"
      >
        はじめる
      </Linking>
    </Main>
  );
};

export default Home;
