import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import * as atom from '../common/atom';
import Main from '../components/main';

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
          <Link href="/">
            <a>次のページです</a>
          </Link>
        </ul>
        <ul>
          {user}
        </ul>
      </div>
    </Main>
  );
};

export default Tsugi;
