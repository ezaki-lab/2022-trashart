import Session from '../lib/session';
import MyAlbum from '../lib/album/myAlbum';
import url from '../utils/url';

const title = 'アルバム';
const description = 'アルバムを見ましょう！';

const Album = () => {
  return (
    <Session
      title={title}
      description={description}
      className="h-[calc(100%-5rem)] flex flex-col items-center overflow-x-hidden overflow-y-auto"
      style={{
        background: 'radial-gradient(rgb(234, 241, 246) 0.2rem, transparent 0.2rem)',
        backgroundSize: '3rem 3rem'
      }}
    >
      <img
        src={url('/logo.svg')}
        alt="ロゴ"
        className="my-10 w-1/2"
      />

      <MyAlbum />
    </Session>
  );
};

export default Album;
