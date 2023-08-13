const setLineParams = (elem, setWidth, setLeft) => {
  setWidth(elem.offsetWidth + 'px');
  setLeft(elem.offsetLeft + 'px');
};

export default setLineParams;
