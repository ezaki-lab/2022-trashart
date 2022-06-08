import { useRouter } from 'next/router';
import { useState } from 'react';
import Main from '../../components/main';
import url from '../../utils/url';

const title = 'ジャンル';
const description = 'ジャンルを選びましょう！';

const Craft = () => {
  const [littles, setLittles] = useState(['hoge', 'hoge', 'hoge', 'hoge']);
  const [bigs, setBigs] = useState(['hoge', 'hoge', 'hoge']);

  return (
    <Main
      title={title}
      description={description}
    >
      <div className="w-full h-[calc(100vh-11rem)] p-3 border-4 border-crafting rounded-lg">
        <h1 className="text-2xl text-center">
          作りたい作品を選ぼう！
        </h1>
        <input
          type="text"
          placeholder="検索"
          className="my-4 input w-full text-lg text-white placeholder-white bg-crafting"
        />
        <div className="w-full h-[calc(100vh-24.5rem)] overflow-y-scroll">
          <div>
            <h2 className="my-2 text-xl">
              ちいさめ
            </h2>
            <div className="w-full h-56 overflow-scroll">
              <ul
                className="h-full flex flex-row justify-between"
                style={{
                  width: `${littles.length * 11.5}rem`
                }}
              >
                {littles.map((item, index) =>
                  <Item key={index} />
                )}
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="my-2 text-xl">
              おおきめ
            </h2>
            <div className="w-full h-56 overflow-scroll">
              <ul
                className="h-full flex flex-row justify-between"
                style={{
                  width: `${bigs.length * 11.5}rem`
                }}
              >
                {bigs.map((item, index) =>
                  <Item key={index} />
                )}
              </ul>
            </div>
          </div>
        </div>
        <button className="my-4 w-full text-lg btn border-none text-white bg-crafting hover:bg-orange-700 shadow-xl">
          いちから作る
        </button>
      </div>
    </Main>
  );
};

const Item = () => {
  const router = useRouter();

  const handleCreate = () => {
    router.push('/crafting/[id]?id=new', url('/crafting/new'));
  };

  return (
    <li className="w-44 h-full border-4 border-crafting rounded-lg shadow-lg overflow-hidden">
      <div className="w-full h-20 bg-gray-300" />
      <div className="p-2">
        <h3>
          イヤリング
        </h3>
        <div className="w-full text-sm">
          3時間
          <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
            <li className="px-2 mr-2 bg-gray-200 rounded-full">
              ペットボトル
            </li>
            <li className="px-2 mr-2 bg-gray-200 rounded-full">
              流木
            </li>
            <li className="px-2 mr-2 bg-gray-200 rounded-full">
              シーガラス
            </li>
          </ul>
          <button
            className="mt-3 w-full text-lg btn btn-sm border-none text-white bg-purple-500 hover:bg-purple-700 shadow-lg"
            onClick={handleCreate}
          >
            製作する
          </button>
        </div>
      </div>
    </li>
  );
};

export default Craft;
