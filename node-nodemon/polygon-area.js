const getTriangleArea = (base, height) => {
  return (base * height) / 2;
};

const getSquareArea = base => {
  return base * base;
};

module.exports = {
  getTriangleArea: getTriangleArea,
  getSquareArea: getSquareArea
};
