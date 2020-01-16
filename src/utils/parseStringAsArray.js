module.exports = function parseStringAdArray(arrayString) {
  return arrayString.split(',').map(tech => tech.trim());
};
