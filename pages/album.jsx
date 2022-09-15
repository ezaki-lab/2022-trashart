import Session from '../lib/session';

const title = 'アルバム';
const description = 'アルバムを見ましょう！';

const Album = () => {
  return (
    <Session
      title={title}
      description={description}
    >
      アルバム
    </Session>
  );
};

export default Album;
