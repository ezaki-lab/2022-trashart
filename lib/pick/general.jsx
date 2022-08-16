import { useCallback } from 'react';
import ToListButton from '../ToListButton';
import Counter from './counter';
import Separate from './separate';

const General = ({ setMode }) => {
  const handleToList = useCallback(() => {
    setMode('list');
  }, [setMode]);

  return (
    <>
      <ToListButton
        bgColor="bg-picking-500"
        onClick={handleToList}
      />

      <div className="w-full h-[calc(100vh-9rem)]">
        <Counter />
        <Separate />
      </div>
    </>
  );
};

export default General;
