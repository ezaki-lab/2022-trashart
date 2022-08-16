import useRedirect from '../hooks/useRedirect';
import Session from '../lib/session';

const title = '製作';
const description = '製作しましょう！';

const Crafting = () => {
  useRedirect('/crafting/[id]?id=new', '/crafting/new');

  return (
    <Session
      title={title}
      description={description}
    >
    </Session>
  );
};

export default Crafting;
