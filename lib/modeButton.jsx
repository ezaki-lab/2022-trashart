import { memo } from 'react';
import { IconContext } from 'react-icons';
import useHeadColor from '../hooks/useHeadColor';

const ModeButton = ({ label, icon, active }) => {
  const { bgColorSecondary, iconColorStrong } = useHeadColor();

  return (
    <button
      className={
        active
          ? `mb-1 px-8 py-1 ${bgColorSecondary} rounded-full flex flex-row transition-colors`
          : 'mb-1 px-8 py-1 bg-none rounded-full flex flex-row transition-colors'
      }
    >
      <IconContext.Provider value={{
        size: '1.2rem',
        color: active ? iconColorStrong : 'white',
        className: 'mt-1 mr-2'
      }}>
        {icon}
      </IconContext.Provider>

      <h1 className={active ? 'text-lg' : 'text-white text-lg'}>
        {label}
      </h1>
    </button>
  );
};

export default memo(ModeButton);
