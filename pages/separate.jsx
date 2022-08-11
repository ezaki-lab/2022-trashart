import { useAtom } from 'jotai';
import { trashCountAtom } from '../common/stores';
import Main from '../components/main';
import Counter from '../components/counter';

const title = '分別';
const description = '分別をしましょう！';

const Separate = () => {
  const [trashCount, setTrashCount] = useAtom(trashCountAtom);

  const handleMinus = (type) => {
    setTrashCount({
      ...trashCount,
      [type]: trashCount[type] - 1
    });
  };

  const handlePlus = (type) => {
    setTrashCount({
      ...trashCount,
      [type]: trashCount[type] + 1
    });
  };

  return (
    <Main
      title={title}
      description={description}
    >
      <h1 className="text-2xl">
        ごみをカウントしましょう
      </h1>

      <div className="my-4">
        <h2 className="mb-2">流木</h2>
        <Counter
          value={trashCount['driftwood']}
          onMinus={() => handleMinus('driftwood')}
          onPlus={() => handlePlus('driftwood')}
        />
      </div>

      <div className="my-4">
        <h2 className="mb-2">アルミ缶</h2>
        <Counter
          value={trashCount['aluminumCan']}
          onMinus={() => handleMinus('aluminumCan')}
          onPlus={() => handlePlus('aluminumCan')}
        />
      </div>

      <div className="my-4">
        <h2 className="mb-2">スプレー缶</h2>
        <Counter
          value={trashCount['sprayCan']}
          onMinus={() => handleMinus('sprayCan')}
          onPlus={() => handlePlus('sprayCan')}
        />
      </div>

      <div className="my-4">
        <h2 className="mb-2">ポリエチレン（ビニール袋など）</h2>
        <Counter
          value={trashCount['pe']}
          onMinus={() => handleMinus('pe')}
          onPlus={() => handlePlus('pe')}
        />
      </div>

      <div className="my-4">
        <h2 className="mb-2">ポリエチレンテレフタレート（ペットボトル、パックなど）</h2>
        <Counter
          value={trashCount['pet']}
          onMinus={() => handleMinus('pet')}
          onPlus={() => handlePlus('pet')}
        />
      </div>

      <div className="my-4">
        <h2 className="mb-2">ポリプロピレン（かごなど）</h2>
        <Counter
          value={trashCount['pp']}
          onMinus={() => handleMinus('pp')}
          onPlus={() => handlePlus('pp')}
        />
      </div>
    </Main>
  );
};

export default Separate;
