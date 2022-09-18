import { useAtom } from 'jotai';
import { AiOutlineSmile } from 'react-icons/ai';
import { userIdAtom } from '../../models/stores';
import CenterText from '../../components/centerText';

const Profile = () => {
  const [userId] = useAtom(userIdAtom);

  return (
    <section className="my-10 ml-5 flex flex-row">
      <CenterText className="w-20 h-20 text-album-800 bg-album-100 text-6xl rounded-2xl">
        <AiOutlineSmile />
      </CenterText>

      <div className="pl-5 flex flex-col justify-center">
        <h1 className="text-xl font-medium">
          クリエイター
        </h1>
        <span className="text-gray-400">
          {userId}
        </span>
      </div>
    </section>
  );
};

export default Profile;
