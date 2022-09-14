import useHeadRoute from './useHeadRoute';

const textColor = {
  '/home': 'text-album-500',
  '/album': 'text-album-500',
  '/craft': 'text-crafting-500',
  '/separate': 'text-separating-500'
};

const bgColor = {
  '/home': 'bg-album-500',
  '/album': 'bg-album-500',
  '/craft': 'bg-crafting-500',
  '/separate': 'bg-separating-500'
};

const borderColor = {
  '/home': 'border-album-500',
  '/album': 'border-album-500',
  '/craft': 'border-crafting-500',
  '/separate': 'border-separating-500'
};

const iconColor = {
  '/home': 'rgb(12, 203, 232)',
  '/album': 'rgb(12, 203, 232)',
  '/craft': 'rgb(253, 167, 69)',
  '/separating': 'rgb(62, 224, 146)'
};

const useSessionColor = () => {
  const route = useHeadRoute();

  return {
    textColor: textColor[route],
    bgColor: bgColor[route],
    borderColor: borderColor[route],
    iconColor: iconColor[route]
  };
};

export default useSessionColor;
