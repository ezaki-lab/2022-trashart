import Session from '../lib/session';
import Camera from '../lib/separate/camera';

const title = '分別';
const description = '分別をしましょう！';

const Separate = () => {
  return (
    <Session
      title={title}
      description={description}
    >
      <Camera />
    </Session>
  );
};

export default Separate;
