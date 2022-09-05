import { memo } from 'react';
import { IconContext } from 'react-icons';

const ModeButton = ({ label, icon, active, onClick }) => {
  return (
    <button
      className={
        active
          ? 'mb-1 px-8 py-1 bg-sky-100 rounded-full flex flex-row transition-colors'
          : 'mb-1 px-8 py-1 bg-none rounded-full flex flex-row transition-colors'
      }
      onClick={onClick}
    >
      <IconContext.Provider value={{
        size: '1.2rem',
        color: active ? 'rgb(12, 203, 232)' : 'white',
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
