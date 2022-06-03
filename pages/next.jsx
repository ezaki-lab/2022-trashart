import { useRecoilValue } from 'recoil';
import * as atom from '../common/atom';
import Main from '../components/main';
import Linking from '../components/linking';

const title = '次のページ';
const description = 'サンプルです。';

const Tsugi = () => {
  const user = useRecoilValue(atom.user);

  return (
    <Main
      title={title}
      description={description}
    >
      <div className="flex flex-col">
        <ul>
          <Linking href="/">
            次のページです
          </Linking>
        </ul>
        <ul>
          {user}
        </ul>
      </div>
    </Main>
  );
};

export default Tsugi;
