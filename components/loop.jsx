import { memo } from 'react';

const Loop = ({ times, children }) => {
  const items = [];

  for (let i = 0; i < times; i++) {
    items.push(children);
  }

  return (
    <>{items}</>
  );
};

export default memo(Loop);
