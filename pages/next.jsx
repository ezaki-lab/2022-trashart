import { useAtom } from 'jotai';
import { userAtom } from '../common/stores';
import Main from '../components/main';
import Linking from '../components/linking';

const title = '次のページ';
const description = 'サンプルです。';

const Tsugi = () => {
  const [user, setUser] = useAtom(userAtom);

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
