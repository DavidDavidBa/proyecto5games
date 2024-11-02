export const removeLife = () => {
  const lifesAll = document.querySelectorAll('.life');
  console.log(lifesAll);
  if (lifesAll.length > 0) {
    lifesAll[lifesAll.length - 1].remove();
  }
};
