import useRedirect from '../hooks/useRedirect';
import Main from '../components/main';

const title = '製作';
const description = '製作しましょう！';

const Crafting = () => {
  useRedirect('/crafting/[id]?id=new', '/crafting/new');

  return (
    <Main
      title={title}
      description={description}
    >
    </Main>
  );
};

export default Crafting;
