import Session from '../lib/session';
import Recommend from '../lib/craft/recommend';
import ChooseGenre from '../lib/craft/chooseGenre';

const title = '製作';
const description = '製作をしましょう！';

const Craft = () => {
  return (
    <Session
      title={title}
      description={description}
    >
      <Recommend />
      <ChooseGenre />
    </Session>
  );
};

export default Craft;
