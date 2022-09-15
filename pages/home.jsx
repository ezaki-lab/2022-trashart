import Linking from '../components/linking';
import Session from '../lib/session';
import url from '../utils/url';

const title = 'ホーム';
const description = 'アート製作を通じた海洋ごみ処理';

const Home = () => {
  return (
    <Session
      title={title}
      description={description}
      className="h-screen flex flex-col items-center"
      style={{
        background: 'radial-gradient(rgb(234, 241, 246) 0.2rem, transparent 0.2rem)',
        backgroundSize: '3rem 3rem'
      }}
    >
      <img
        src={url('/logo.svg')}
        alt="ロゴ"
        className="my-10 w-2/3"
      />

      <section className="pb-36 w-full h-screen text-white bg-album-600 rounded-t-2xl">
        <div className="p-5 w-full grid grid-cols-2 gap-4">
          <div className="w-11/12 h-48 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://ezaki-lab.cloud/~trashart/api/storage/arts/cf66b6f3171748223635a5e5/art.webp"
              alt="作品"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-11/12 h-48 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://ezaki-lab.cloud/~trashart/api/storage/arts/2bb3758df7c1b66c633e7609/art.webp"
              alt="作品"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-11/12 h-48 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://ezaki-lab.cloud/~trashart/api/storage/arts/5b46e3aa305acee647f297ee/art.webp"
              alt="作品"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-11/12 h-48 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://ezaki-lab.cloud/~trashart/api/storage/arts/bfda8bde91dbb8656c534669/art.webp"
              alt="作品"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-11/12 h-48 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://ezaki-lab.cloud/~trashart/api/storage/arts/cf66b6f3171748223635a5e5/art.webp"
              alt="作品"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-11/12 h-48 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://ezaki-lab.cloud/~trashart/api/storage/arts/2bb3758df7c1b66c633e7609/art.webp"
              alt="作品"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </Session>
  );
};

export default Home;
