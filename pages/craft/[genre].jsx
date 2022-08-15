import { useRouter } from 'next/router';
import { useState } from 'react';
import Session from '../../lib/session';
import url from '../../utils/url';

const title = 'ジャンル';
const description = 'ジャンルを選びましょう！';

const Craft = () => {
  const router = useRouter();

  const [littles, setLittles] = useState(['hoge', 'hoge', 'hoge', 'hoge']);
  const [bigs, setBigs] = useState(['hoge', 'hoge', 'hoge']);

  const handleCreate = (base_id) => {
    router.push(`/crafting/[id]?id=${base_id}`, url(`/crafting/${base_id}`));
  };

  return (
    <Session
      title={title}
      description={description}
    >
      <div className="w-full h-[calc(100vh-15rem)] bg-white p-3 border-4 border-crafting-500 rounded-lg">
        <h1 className="text-2xl text-center">
          作りたい作品を選ぼう！
        </h1>
        <input
          type="text"
          placeholder="検索"
          className="my-4 px-4 py-2 w-full text-lg text-white placeholder-white rounded-xl bg-crafting-500"
        />
        <div className="w-full h-[calc(100vh-28rem)] overflow-y-scroll">
          <div>
            <h2 className="my-2 text-xl">
              ちいさめ
            </h2>
            <div className="w-full h-56 overflow-scroll">
              <ul
                className="h-full flex flex-row justify-between"
                style={{
                  width: `${14 * 11.5}rem`   //6 * 11.5
                }}
              >
                {/* {littles.map((item, index) =>
                  <Item key={index} />
                )} */}

                {/* 以下は仮置き */}

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      イルカ
                    </h3>
                    <div className="w-full text-sm">
                      2時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          シーガラス
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('1d557c21d8238d47ecb1dcfb'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      カメ
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PP
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('1e429a12f32e233a7ca06f1d'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      海中生物
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('8ec8e95a279e5ebef39f601b'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      タイ
                    </h3>
                    <div className="w-full text-sm">
                      2時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PET
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('339014c515e93bac0c4f3f91'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      フグ
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PP
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('d23d5f32ec0735542673595b'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      ペンギン
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('c17cd2c0c1bbc01856cc852f'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      ハリセンボン
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('0b4d1b76fa1f70609dacc6b4'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      バッタ
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('2fd7b4ec4a8633c574b7a6be'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      せみ
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('132272f2c1142ef39235e165'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      ホタル
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('ae34f3c7706a21deaaf17831'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      カブトムシ
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('3c03f805ea7802c2661e3884'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      ちょうちょ
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('79a6c49377cd32987bb9dbdc'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      とんぼ
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('17826540fd74aa77a111617d'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      クワガタ
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('50860e0023327b18aa5b2f36'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

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
                  width: `${7 * 11.5}rem`
                }}
              >

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      新幹線
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('c9f392b1fe9fcb7807807962'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      飛行機
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('2ea34fd0a5fa226aaa7d31c8'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      サメ
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('101dca18d5da501e11e608d8'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-20 bg-gray-300" />
                  <div className="p-2">
                    <h3>
                      タコ
                    </h3>
                    <div className="w-full text-sm">
                      3時間
                      <ul className="mt-1 h-5 whitespace-nowrap flex flex-row overflow-scroll">
                        <li className="px-2 mr-2 bg-gray-200 rounded-full">
                          PS
                        </li>
                      </ul>
                      <button
                        className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
                        onClick={() => { handleCreate('101dca18d5da501e11e608d8'); }}
                      >
                        製作する
                      </button>
                    </div>
                  </div>
                </li>

                {bigs.map((item, index) =>
                  <Item key={index} />
                )}
              </ul>
            </div>
          </div>
        </div>
        <button className="my-4 px-4 py-2 w-full text-lg font-medium text-white rounded-xl bg-crafting-500 hover:bg-orange-700 shadow-xl">
          いちから作る
        </button>
      </div>
    </Session>
  );
};

const Item = () => {
  const router = useRouter();

  const handleCreate = () => {
    router.push('/crafting/[id]?id=new', url('/crafting/new'));
  };

  return (
    <li className="w-44 h-full border-4 border-crafting-500 rounded-lg shadow-lg overflow-hidden">
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
            className="mt-3 w-full text-lg font-medium text-white rounded-xl bg-purple-500 hover:bg-purple-700 shadow-lg"
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
