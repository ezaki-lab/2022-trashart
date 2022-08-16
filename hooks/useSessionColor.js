import useHeadRoute from './useHeadRoute';

const textColor = {
  '/pick': 'text-picking-500',
  '/craft': 'text-crafting-500',
  '/crafting': 'text-crafting-500',
  '/share': 'text-sharing-500'
};

const bgColor = {
  '/pick': 'bg-picking-500',
  '/craft': 'bg-crafting-500',
  '/crafting': 'bg-crafting-500',
  '/share': 'bg-sharing-500'
};

const borderColor = {
  '/pick': 'border-picking-500',
  '/craft': 'border-crafting-500',
  '/crafting': 'border-crafting-500',
  '/share': 'border-sharing-500'
};

const iconColor = {
  '/pick': 'rgb(12, 203, 232)',
  '/craft': 'rgb(253, 167, 69)',
  '/crafting': 'rgb(253, 167, 69)',
  '/share': 'rgb(255, 120, 102)'
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
