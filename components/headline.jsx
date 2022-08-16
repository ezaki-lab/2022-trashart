import { IconContext } from 'react-icons';

const Headline1 = ({ label, textColor, icon, iconColor }) => {
  return (
    <section className="flex flex-row">
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

export { Headline1 };
