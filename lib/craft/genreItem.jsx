import Linking from '../../components/linking';

const GenreItem = () => {
  return (
    <Linking
      href="/craft/genre"
      className="py-2 bg-crafting-100 text-center rounded-2xl shadow-xl overflow-hidden"
    >
      <h2 className="text-crafting-700">
        魚
      </h2>
    </Linking>
  );
};

export default GenreItem;
