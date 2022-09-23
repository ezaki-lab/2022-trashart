import Session from '../lib/session';
import MyAlbum from '../lib/album/myAlbum';
import Profile from '../lib/album/profile';

const title = 'アルバム';
const description = 'アルバムを見ましょう！';

const Album = () => {
  return (
    <Session
      title={title}
      description={description}
      className="size-main overflow-x-hidden overflow-y-auto"
      style={{
        background: 'radial-gradient(rgb(234, 241, 246) 0.2rem, transparent 0.2rem)',
        backgroundSize: '3rem 3rem'
      }}
    >
      <Profile />

      <MyAlbum />
    </Session>
  );
};

export default Album;
