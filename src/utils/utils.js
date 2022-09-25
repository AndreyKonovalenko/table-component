export const colorSelector = (color) => {
  let rgb;
  switch (color) {
    case 'red':
      rgb = 'rgb(255,0,0, 0.05)';
      break;
    case 'green':
      rgb = 'rgb(0,255,0, 0.05)';
      break;
    case 'yellow':
      rgb = 'rgb(255,255,0, 0.05)';
      break;
    default:
      rgb = 'rgb(255,255,255)';
  }
  return rgb;
};
