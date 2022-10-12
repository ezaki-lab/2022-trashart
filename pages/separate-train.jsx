import Session from '../lib/session';
import Camera from '../lib/separate-train/camera';

const title = '分別（学習データ集め）';
const description = '学習データを集めましょう！';

const SeparateTrain = () => {
  return (
    <Session
      title={title}
      description={description}
    >
      <Camera />
    </Session>
  );
};

export default SeparateTrain;
