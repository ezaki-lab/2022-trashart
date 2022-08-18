import { BsStarFill } from 'react-icons/bs';

const MaterialTable = ({ textColor, borderColor, iconColor, className }) => {
  return (
    <ul className={className
      ? `relative ${className}`
      : 'relative mt-2'
    }>
      <Header
        textColor={textColor}
        iconColor={iconColor}
      />

      <Row
        borderColor="border-gray-300"
      />
      <Row
        borderColor="border-red-500"
      />
      <Row
        borderColor="border-yellow-500"
      />
      <Row
        borderColor="border-green-500"
      />
      <Row
        borderColor="border-blue-500"
      />
      <Row
        borderColor="border-orange-900"
      />
      <Row
        borderColor="border-neutral-800"
      />

      <div className={`w-1/3 h-[calc(100%+1rem)] border-r-2 border-dashed ${borderColor} absolute -top-2`} />
      <div className={`w-1/3 h-[calc(100%+1rem)] border-r-2 border-dashed ${borderColor} absolute -top-2 left-1/3`} />
    </ul>
  );
};

const Header = ({ textColor, iconColor }) => {
  const iconProps = {
    size: '1.75rem',
    color: iconColor
  };

  return (
    <li className={`${textColor} text-sm flex flex-row justify-around`}>
      <div className="w-1/3 flex flex-col items-start">
        <div className="w-full flex flex-col items-center">
          <BsStarFill {...iconProps} />
        </div>
        <div className="mt-1 w-full text-center">
          小物
        </div>
      </div>

      <div className="w-1/3 flex flex-col items-start">
        <div className="w-full flex flex-col items-center">
          <BsStarFill {...iconProps} />
        </div>
        <div className="mt-1 w-full text-center">
          直線
        </div>
      </div>

      <div className="w-1/3 flex flex-col items-start">
        <div className="w-full flex flex-col items-center">
          <BsStarFill {...iconProps} />
        </div>
        <div className="mt-1 w-full text-center">
          カーブ
        </div>
      </div>
    </li>
  );
};

const Row = ({ borderColor }) => {
  return (
    <li className={`mt-2 border-2 ${borderColor} rounded-lg flex flex-row justify-around`}>
      <div className="w-1/3 text-center">
        30
      </div>

      <div className="w-1/3 text-center">
        30
      </div>

      <div className="w-1/3 text-center">
        30
      </div>
    </li>
  );
};

export default MaterialTable;
