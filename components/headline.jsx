import { IconContext } from 'react-icons';

const Headline1 = ({ label, textColor, icon, iconColor, className }) => {
  return (
    <section className={!className ? 'flex flex-row' : `flex flex-row ${className}`}>
      <IconContext.Provider value={{
        size: '1.2rem',
        color: iconColor,
        className: 'mt-1 mr-2'
      }}>
        {icon}
      </IconContext.Provider>

      <h1 className={`${textColor} text-xl font-medium`}>
        {label}
      </h1>
    </section>
  );
};

const Headline2 = ({ label, textColor }) => {
  return (
    <h2 className={`${textColor} text-xl font-medium`}>
      {label}
    </h2>
  );
};

export { Headline1, Headline2 };
