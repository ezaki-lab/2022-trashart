import useHeadRoute from './useHeadRoute';

const textColor = {
  '/home': 'text-album-500',
  '/separate': 'text-separating-500',
  '/craft': 'text-crafting-500',
  '/album': 'text-album-500'
};

const bgColor = {
  '/home': 'bg-album-500',
  '/separate': 'bg-separating-500',
  '/craft': 'bg-crafting-500',
  '/album': 'bg-album-500'
};

const bgColorSecondary = {
  '/home': 'bg-album-100',
  '/separate': 'bg-separating-100',
  '/craft': 'bg-crafting-100',
  '/album': 'bg-album-100'
};

const borderColor = {
  '/home': 'border-album-500',
  '/separate': 'border-separating-500',
  '/craft': 'border-crafting-500',
  '/album': 'border-album-500'
};

const iconColor = {
  '/home': 'rgb(77, 255, 243)',
  '/separate': 'rgb(123, 234, 129)',
  '/craft': 'rgb(253, 188, 114)',
  '/album': 'rgb(77, 255, 243)'
};

const iconColorStrong = {
  '/home': 'rgb(0, 214, 200)',
  '/separate': 'rgb(35, 220, 44)',
  '/craft': 'rgb(252, 145, 20)',
  '/album': 'rgb(0, 214, 200)'
};

const useSessionColor = () => {
  const route = useHeadRoute();

  return {
    textColor: textColor[route],
    bgColor: bgColor[route],
    bgColorSecondary: bgColorSecondary[route],
    borderColor: borderColor[route],
    iconColor: iconColor[route],
    iconColorStrong: iconColorStrong[route]
  };
};

export default useSessionColor;
