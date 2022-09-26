export const numberFormatter = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const selectorArray = (data, accessor) => {
  const result = ['All'];
  for (const element of data) {
    result.push(element[accessor]);
  }
  return [...new Set(result)];
};
