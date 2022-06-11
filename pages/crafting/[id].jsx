import dynamic from 'next/dynamic';
import Main from '../../components/main';

const title = '製作';
const description = '製作しましょう！';

const Ar = dynamic(
  () => import('../../components/crafting/ar'),
  { ssr: false }
);

const Crafting = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <Ar />
    </Main>
  );
};

export default Crafting;
