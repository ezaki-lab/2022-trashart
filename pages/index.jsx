import Link from 'next/link';
import { useRecoilState } from 'recoil';
import * as atom from '../common/atom';
import Main from '../components/main';

const title = 'ホーム';
const description = 'アート製作を通じた海洋ごみ処理';

const Home = () => {
  const [user, setUser] = useRecoilState(atom.user);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

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
        <input
          type="text"
          value={user}
          onChange={handleChange}
        />
        <Link href="/next">
          <a>次のページへ</a>
        </Link>
      </div>
    </Main>
  );
};

export default Home;
