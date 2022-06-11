import Main from '../components/main';
import Linking from '../components/linking';

const title = '製作';
const description = '製作をしましょう！';

const Craft = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <div className="w-full h-[calc(100vh-11rem)] p-3 bg-white border-4 border-crafting rounded-lg">
        <h1 className="text-2xl text-center">
          ジャンルを選ぼう！
        </h1>
        <input
          type="text"
          placeholder="検索"
          className="my-4 input w-full text-lg text-white placeholder-white bg-crafting"
        />
        <ul className="w-full h-[calc(100vh-24rem)] grid grid-cols-2 gap-4 overflow-y-scroll">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ul>
        <button className="my-4 w-full text-lg btn border-none text-white bg-crafting hover:bg-orange-700 shadow-xl">
          いちから作る
        </button>
      </div>
    </Main>
  );
};

const Item = () => {
  return (
    <li>
      <Linking href="/craft/[genre]?genre=hoge" rootHref="/~trashart/craft/hoge">
        <div className="w-full h-44 border-4 border-crafting rounded-lg shadow-lg">
          <div className="w-full h-32 bg-gray-300" />
          <div className="p-2 text-center">
            <h3>
              動物
            </h3>
          </div>
        </div>
      </Linking>
    </li>
  );
};

export default Craft;
