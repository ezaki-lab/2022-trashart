import Session from '../lib/session';

const title = '回収';
const description = '回収をしましょう！';

const Pick = () => {
  return (
    <Session
      title={title}
      description={description}
    >
      回収しましょう
    </Session>
  );
};

export default Pick;
