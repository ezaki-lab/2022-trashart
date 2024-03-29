import { useAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import api from '../../models/apiClient';
import { userIdAtom, isDemoModeAtom } from '../../models/stores';
import { FiShare2 } from 'react-icons/fi';
import share from '../share';

const MyAlbum = () => {
  const [userId] = useAtom(userIdAtom);
  const [isDemoMode] = useAtom(isDemoModeAtom);

  const [craftings, setCraftings] = useState([]);

  useEffect(() => {
    if (userId === '') {
      return;
    }

    api.get(`/users/${userId}`)
      .then((res) => {
        setCraftings(res.data['craftings']);
      });
  }, [userId]);

  return (
    <section className="w-full h-[calc(100vh-15rem)] text-white bg-none">
      <svg
        viewBox="0 0 1440 217"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full flip-horizontally"
      >
        <path d="m1135.8 0.019531c-55.781 0.32109-115.78 4.7977-175.78 16.91-160 31.7-320 117.7-480 144-160 26.7-320-5.3008-400-21.301l-80-16v93.371h1440v-189.37l-80-10.699c-50-6.4375-131.25-17.445-224.22-16.91z" fill={!isDemoMode ? 'rgb(0, 214, 200)' : 'rgb(0, 100, 200)'} className="transition-all" />
        <path d="m1338.6 31.385c-70.783 0.02917-152 4.6109-239.36 18.68-199.32 31.61-430.71 112.78-626.83 139.46-196.37 27.046-358.07 0.51628-438.92-12.748l-33.518-5.498v45.721h1440v-182.62c-30.61-1.7601-64.487-3.0093-101.37-2.9941z" fill="rgb(255, 255, 255)" strokeWidth="1.0101" />
        <path d="m1231 103.45c-45.601 0.33423-94.135 2.604-144.84 7.7305-202.44 20.001-439.6 85.702-638.58 101.16-199.24 15.793-360.94-17.817-441.79-34.621l-5.7598-1.1973v40.479h1440v-102.37c-57.863-6.376-128.91-11.767-209.03-11.18z" fill="rgb(0, 214, 200)" strokeWidth="0.99241" />
      </svg>

      {craftings.length > 0 ? (
        <div className="p-5 pt-10 pb-20 w-full min-h-[calc(100%-3rem)] bg-album-500 grid grid-cols-2 gap-8">
          {craftings.map((c) =>
            <Item
              id={c['id']}
              title={c['title']}
              sharePhotoId={c['image_id']}
              img={c['image_url']}
              hashtags={c['hashtags']}
              key={c['id']}
            />
          )}
        </div>
      ) : (
        <div className="p-5 pt-10 pb-20 w-full min-h-[calc(100%-3rem)] text-white text-center bg-album-500">
          まだ作品はありません。「製作」をクリックして作りましょう！
        </div>
      )}
    </section>
  );
};

const Item = ({ title, sharePhotoId, img, hashtags }) => {
  const handleShare = useCallback(() => {
    share(title, sharePhotoId, hashtags);
  }, [title, sharePhotoId, hashtags]);

  return (
    <div className="w-full h-48 bg-album-100 rounded-xl shadow-lg overflow-hidden">
      <div className="w-full h-36 relative">
        <img
          src={img}
          alt="アート画像"
          className="w-full h-36 object-cover"
        />
      </div>

      <div className="p-2 flex flex-row justify-between">
        <h2 className="text-album-900">
          {title}
        </h2>
        <button
          className="text-album-900"
          onClick={handleShare}
        >
          <FiShare2 />
        </button>
      </div>
    </div>
  );
};

export default MyAlbum;
