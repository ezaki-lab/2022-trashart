import sleep from './sleep';

export const getElementByIdAfterShown = async (id) => {
  while (true) {
    const element = document.getElementById(id);
    if (element !== null) {
      return element;
    }
    await sleep(10);
  };
};

export const getOneElementByTagAttrs = (tag, attrs) => {
  const elements = document.getElementsByTagName(tag);
  for (const element of elements) {
    for (let attr of attrs) {
      const value = element.getAttribute(attr.name);
      if (attr.value !== value) {
        continue;
      }
    }
    return element;
  }
};
