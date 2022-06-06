import { useRecoilState } from 'recoil';
import Main from '../components/main';
import Linking from '../components/linking';
import * as atom from '../common/atom';

const title = '投稿';
const description = '投稿された作品を見ましょう！';

const Social = () => {
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
        <Linking href="/next">
          次のページへ
        </Linking>
      </div>
    </Main>
  );
};

export default Social;
