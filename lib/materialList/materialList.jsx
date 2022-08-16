import { BsArrowReturnLeft, BsBagFill } from 'react-icons/bs';
import useSessionColor from '../../hooks/useSessionColor';
import { Headline1 } from '../../components/headline';
import MaterialTable from './table';

const MaterialList = ({ handleBack }) => {
  const { textColor, bgColor, borderColor, iconColor } = useSessionColor();

  return (
    <>
      <BackButton
        bgColor={bgColor}
        onClick={handleBack}
      />

      <Headline1
        label="素材リスト"
        textColor={textColor}
        icon={<BsBagFill />}
        iconColor={iconColor}
      />

      <MaterialTable
        textColor={textColor}
        borderColor={borderColor}
        iconColor={iconColor}
        className="mt-7"
      />

      <MaterialTable
        textColor={textColor}
        borderColor={borderColor}
        iconColor={iconColor}
        className="mt-10"
      />
    </>
  );
};

const BackButton = ({ bgColor, onClick }) => {
  return (
    <button
      className={`px-7 py-1 text-white text-sm font-medium ${bgColor} rounded-2xl shadow-lg absolute top-[6.25rem] right-5`}
      onClick={onClick}
    >
      <div className="w-full flex flex-col items-center">
        <BsArrowReturnLeft
          size="1.25rem"
          color="white"
        />
      </div>
      <div className="mt-1 w-full text-center">
        戻る
      </div>
    </button>
  );
};

export default MaterialList;
