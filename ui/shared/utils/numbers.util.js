export const angle = (cx, cy, ex, ey) => {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  return 180 + rad * (180 / Math.PI);
};

export const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const getRandomPosition = () => {
  const winWidth = window.innerWidth * 0.75;
  const winHeight = window.innerHeight * 0.75;
  const randomTop = getRandomNumber(0, winHeight);
  const randomLeft = getRandomNumber(0, winWidth);

  return { randomTop, randomLeft };
};
