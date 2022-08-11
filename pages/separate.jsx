import Main from '../components/main';

const title = '分別';
const description = '分別をしましょう！';

const Separate = () => {
  return (
    <Main
      title={title}
      description={description}
    >
      <h1 className="text-2xl">
        ごみをカウントしましょう
      </h1>

      <h2>流木</h2>
      <h2>アルミ缶</h2>
      <h2>スプレー缶</h2>
      <h2>ポリエチレン（ビニール袋など）</h2>
      <h2>ポリエチレンテレフタレート（ペットボトル、パックなど）</h2>
      <h2>ポリプロピレン（かごなど）</h2>
    </Main>
  );
};

export default Separate;
